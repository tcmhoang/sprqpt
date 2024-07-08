---
created: '2024-06-30'
date: '2024-07-07'
title: 'Typescript shenanigans'
excerpt: |
  There's a reason why everybody don't like Typescript
layout: blog
tags:
  - Web development
---

{% overview %}
For the past few months, I've worked with a large typescript mono
repository code base. For me, who's only ever used pure JavaScript for
web development.
{% /overview %}

It's a good chance to get my hands dirty with real-world enterprise code.
After messing it around for some time, I have to say, I do get why folks
are so grumpy about Typescripts. In the post, I'll show you some quirks
around Typescript and how I overcame them. The truth is

{% permalink %}

# Typescript type system sucks

{% /permalink %}

Yup, you heard that right. It's the biggest beef I got with Typescript
till now. The whole point of Typescript itself is the type inference and
type safety. But in reality, it's a false dilemma.

{% permalink %}

## The problem with type

{% /permalink %}

Let's say we have a function that supposedly takes a number as an
argument, for example.

```ts
function foo(a: number): number {
	return 3;
}
```

But is the `a` argument always the `number` type?

```ts
function foo(a: number): number {
	return 3;
}

// Let's assume that this function will go out to the internet
// to get that value
async function fakeFetch(): Promise<number> {
	const res = Promise.resolve(Math.random() > 0.5 ? 'foobar' : 1);
	return (await res) as number;
}

const badVariable = await fakeFetch();

console.log(foo(badVariable));
```

Well, if you guess that the code would be halt at the start of the
execution and throw an `Exception` about wrong type, you're wrong.
That code working fine. Because we did not use that value in our
function body.

But if our `foo` function uses a method belong to `Number` class like:

```ts
function foo(a: number): string {
	return a.toFixed().toUpperCase();
}
```

The code will now sometimes throw `TypeError: a.toFixed is not a
function` sometimes will not. It's actually weird, considering both the
returned type we specified and the methods we invoked inside as they has
no capability to throw an exception.

And yes, you can pull a fast one on the Typescript compiler with this `as`
assertion keyword. It seems whacked to me that Typescript gives us a
tool to bypass the whole type system on purpose at our dispose.

That example might seem trivial, but it does prove that the type system
is not sound in Typescript. In the real world, we encounter them all the
time - _type conversion_. Specifically, We have to deal with data from all
over the place - databases, APIs, you name it. We might know the general
shape of the data but you can't be sure the value it can hold. It can be
anything from `string` to `number` to who knows what.

Seems like we're backed to the old JavaScript ones. We cannot sure on
what value passed to functions/methods.

{% permalink %}

### `as` keyword?

{% /permalink %}

That's where the thing with `as` gets really frustrating. When you use
the `as` keyword, it should do the proper type casting instead of
blindly trusting the type we gave it. The behavior I assumed was that it
would shut the whole thing down and throw the error instead of trucking
along like nothing's wrong, even if the data is completely messed up.

This can lead to errors down the line if we access that value after
doing some computation. This would be a nightmare if that code block is
critical. Let me tell you, this kind of thing is hardly caught in the
unit tests, because it is not a bug, it's your wrong perspective about
the worldview. Let's put it like that.

{% permalink %}

## Validating types

{% /permalink %}

So how do we actually catch these errors? The first thing that pops into
your head is probably a try-catch block. But where do we put it?

- Around the function call

  ```ts
  try {
  	console.log(foo(badVariable));
  } catch (e) {
  	console.err('failed to call foo');
  	rethrow;
  }
  ```

  Seems okay, but every time we call a function, we have to add more 5
  lines to the code base? Yuck!

- Inside the function

  ```ts
  function foo(a: number): string {
  	try {
  		return a.toFixed().toUpperCase();
  	} catch (e) {
  		console.err('failed inside foo');
  		rethrow;
  	}
  }
  ```

  Talk about paranoid. Hard-pass!

- After doing the type assertion with `as`

  ```ts
  async function fakeFetch(): Promise<number> {
  	const res = Promise.resolve(Math.random() > 0.5 ? 'foobar' : 1);

  	const val = (await res) as number;
  	try {
  		val.toFixed();
  		// and for other properties in `Number` class
  		return val;
  	} catch (e) {
  		console.err('returned type is not a number instance');
  		rethrow;
  	}
  }
  ```

  For this to work, we have to call the actual property that get accessed
  by the callee to make sure it is _indeed_ a `number` instance and not
  others due to the effect of
  [duck typing](https://en.wikipedia.org/wiki/Duck_typing).

If we want to have more grain control, we also have to define our own
`Exception` types. That can be a real drag and cumbersome task
considering the syntax and how many places we have to put them in the
function. It would make the function body significantly longer and
heavily decrease code readability. Till now, I do not see any one used
this approach in their code base.

{% permalink %}

### Assertion functions

{% /permalink %}

Alright, maybe the aforementioned ways of catching that error are a bit
somewhat over the top, we can narrow them down in the function body
with the usage of `assertion functions`. That concept came out way back
in the typescript 3.7.

It'll go like this:

```ts
function assertIsNumber(value: unknown): asserts value is number {
	if (typeof value != 'number') {
		throw new Error(); // assertion error
	}
}

function foo(a: number): string {
	assertIsNumber(a);
	// After that, a is a true number 😀
	return a.toFixed().toUpperCase();
}
```

Yep, this works. Also for ones who might wonder the returned type of
that function would be. That will be `void`, in case of error it would
throw `Exception`

{% permalink %}

### Type Guards

{% /permalink %}

Cool, you can see, we use the `typeof` keyword in the **assert function**
about. That 's one of the _type guards_. You should use them
if you think the assertion functions are too long.
(Eg: Primitives, Array, Public Instance Types, etc.).

```ts
function foo(a: number): string | undefined {
	if (typeof a != 'number') return undefined;
	return a.toFixed().toUpperCase();
}
```

FYI, it's also called negative space programming. Besides `typeof` we
also have other guards:

- `instanceof` for instance types (have `proto` chains aka `Class`)
- `Array.isArray` to check if the value is an `Array`
- `in` to check if a particular property is _in_ the value

To sum up, uses the _assertion functions_ when you're dealing with the
composite type (Eg: Records, Private Instance Types, except for Array.)
and _guards_ for others.

{% permalink %}

## Better ways for handle Composite Types

{% /permalink %}

It seems like a decent way of solving that issue.

But to me, It's just too imperative, and for each custom type we throw at
it, we have to write a function in this format and set it up with the
same old type validation. Besides, for the case of composite type
(Eg: `Record`), We can easily violate the invariant by setting the
properties with the invalid value. Is there any way we can streamline
that process?

Well, to control how we set the values inside the record,
we can actually use
[Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
or
[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
for that.

Personally, I gravitate towards the class ones, mostly because of the
syntax. But hey, either one works. It's your call, go with whatever
feels right. In this blog, I'll only demonstrate the way I utilized
`Class`. But the concept applied to `Proxy` as well. Just a different
syntax.

{% permalink %}

### Class

{% /permalink %}

Just like other OOP languages, we can supercharge our `Record` type and
make it an instance type

```ts
// from this
type UserPayload = {
	name?: string;
};

// to this

class User {
	private static kPlaceHolderName = 'NOT_FOUND';
	constructor(private _name?: string) {
		super();
		if (this._name == User.kPlaceHolderName) {
			this._name = undefined;
		}
	}

	get name(): string {
		return name ?? User.kPlaceHolderName;
	}

	set name(value: string) {
		if (
			value == User.kPlaceHolderName ||
			!value.trim().length ||
			!typeof value == 'string' ||
			value == this._name
		) {
			return;
		}

		this._name = value;
	}
}
```

By using the getter and setter in `Class` we can internally maintain the
invariant and guarantee extra things so that every method should be
fine to access the inner properties without worrying much about the
types. That also helps to enforce the
[Soc - Separation of concerns principles](https://en.wikipedia.org/wiki/Separation_of_concerns)
which is a good thing.

And to further get more out of these `Class`, we can actually implement
these `static` methods to help with constructing those and destructing
it vice versa without manually passing the positional arguments to it.

```ts
class User {
	private static kPlaceHolderName = 'NOT_FOUND';

	// Notice, contructor now private
	private constructor(private _name?: string) {
		super();
		if (this._name == User.kPlaceHolderName) {
			this._name = undefined;
		}
	}

	static promote(userPayload: UserPayload): User {
		return User.parse(userPayload);
	}

	static parse(raw: unknown): User {
		if (!typeof raw != 'object' || (!'name') in raw)
			throw new Error(`
        Invalid Argument ${raw}`);

		return new User(raw.name);
	}

	get name(): string {
		return name ?? User.kPlaceHolderName;
	}

	set name(value: string) {
		if (
			value == User.kPlaceHolderName ||
			!value.trim().length ||
			!typeof value == 'string' ||
			value == this._name
		) {
			return;
		}

		this._name = value;
	}

	to(): UserPayload {
		return {
			...(this._user ? { name: this._user } : {})
		};
	}
}
```

{% permalink %}

### Zod integration

{% /permalink %}

Pretty cool huh? We can make it even better by integrating the
[zod](https://zod.dev) package to that code.

```ts
import z from 'zod';

class User {
	private static kPlaceHolderName = 'NOT_FOUND';

	private constructor(private _name?: string) {
		super();
		if (this._name == User.kPlaceHolderName) {
			this._name = undefined;
		}
	}

	// We introduce user's schema here
	static schema = z.object({
		name: z
			.string()
			.min(1)
			.refine((val) => val != User.kPlaceHolderName, {
				message: 'User cannot have the placeholder as name'
			})
	});

	static promote(userPayload: UserPayload): User {
		return User.parse(userPayload);
	}

	static parse(raw: unknown): User {
		const parsed = User.schema.safeParse(raw);
		if (!parsed.success)
			throw new Error(`
        Invalid Argument ${raw}, parsed.error.format()`);

		return new User(parsed.name);
	}

	get name(): string {
		return name ?? User.kPlaceHolderName;
	}

	set name(value: string) {
		// Use the schema in the setter validation
		if (
			value == User.kPlaceHolderName ||
			value == this._name ||
			!User.schema.shape.name.safeParsed(value).sucess
		) {
			return;
		}

		this._name = value;
	}

	to(): UserPayload {
		return {
			...(this._user ? { name: this._user } : {})
		};
	}
}
```

Now that's the thing, we can now just focus on the business logic itself
without much worrying about the abnormal data, invariant, etc.
Everything inside that class must passed all the guards 👍, no more
headache.

By the way, you can see that I introduce 2 methods to create an instance
of `User`. These are `promote` and `parse`, it will sure come in handy
if we want manually create one from the `UserPayload` or generally just
want to passed the data you got from the `fetch` function.

With that in place, we avoid passing props without any info. In my
opinion. This is a bad practice, making it impossible to know what's
inside of that prop by casually looking at it.

Of course, the class must follow the identity law so that we can keep
peace of mind that these work correctly without worrying much. For this
`User` class, it would be:

`User.parse(user.to()) = User.promote(user.to()) = user` [^1]

It takes some time to define all this stuff upfront. Trust me, it's
worth it, no cap. It saves me a ton of time in debugging and just
zeroing in on the business logic side of the function without worrying
much about the type problems/ invariant. Takes me 4 months to
actually figure this all out after some trials and errors.

Anyway, in the future, I might feel there are some better ways of doing
these things, I'll revisit this and update this article. For now, I work
for me and I'm pretty happy with it.

That's it for now folks.

Stay awesome!

[^1]: `user` is an instance of `User` class
