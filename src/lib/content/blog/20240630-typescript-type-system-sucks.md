---
created: '2024-06-30'
date: '2024-07-07'
title: 'Typescript and its shenanigan'
excerpt: |
  There's a reason why everybody hate Typescript
layout: blog
tags:
  - Web development
---

{% overview %}
For the past few months, I've worked with a large typescript mono
repository code base. For me, who's only ever used pure JavaScript for
web development.

It's a good chance to get my hands dirty with real-world enterprise code.
After messing it around for some time, I have to say, I do get why folks
are so grumpy about Typescripts. In the post, I'll show you some quirks
around Typescript and how I overcame them. The truth is
{% /overview %}

{% permalink %}

# Typescript type system sucks

{% /permalink %}

Yup, you heard that right. It's the biggest beef I got with Typescript
till now? The whole point of Typescript itself is the type inference and
type safety. But in reality, it's a false dilemma.

{% permalink %}

## The problem with type

{% /permalink %}

Let's say we have a function that supposedly takes a number as an
argument, for example.

```ts
let test = 0;
```

But is it always the same type?

Yes, you can pull a fast one on the Typescript compiler with this `as`
assertion keyword. It seems whacked to me that Typescript gives us a
tool to bypass the whole type system on purpose which we can easily
access.

That example might seem trivial, but it does prove that the type system
is not sound in Typescript. In the real world, we encounter them all the
time - type conversion. Specifically, We have to deal with data from all
over the place - databases, APIs, you name it. We might know the general
shape of the data but you can't be sure the value it can hold. It can be
anything from string to number to who knows what

That's where the thing with `as` gets really frustrating. When you use
the `as` keyword, it should do the proper type casting instead of
blindly trusting the type we gave it. The behavior I assumed was that it
would shut the whole thing down and throw the error instead of trucking
along like nothing's wrong, even if the data is completely messed up.
This can lead to errors down the line if we access that value after
doing some computation. This would be a nightmare if that code block is
critical. let me tell you, this kind of thing is hardly caught in the
unit tests, because it is not a bug, it's your wrong perspective about
the worldview. Let's put it like that.

So how do we actually catch these errors? The first thing that pops into
your head is probably a try-catch block. But where do we put it?

Around the function call
Inside the function
After doing the type assertion with `as`

If we want to take it to another level and have more grain control, we
also have to define our own `Exception` types. That can be a real drag
and cumbersome task considering the syntax and how many places we have
to put them in the function. It would make the function body
significantly longer and heavily decrease code readability.

Alright, maybe the way we handle catching these types of errors is a bit
somewhat over the top, we can narrow them down in the function body
with the usage of `assertion functions`. That concept came out way back
in the typescript 3.7.

We can also use _type guards_ for that as well if you think the
assertion functions are too much work
(Eg: Primitives, Array, Public Instance Types, etc.).

FYI, it's also called negative space programming.

I do suggest using the assertion functions when you're dealing with the
composite type (Eg: Records, Private Instance Types.).

It seems like a decent way of solving that issue.
But It's just too imperative, and for each custom type we throw at it,
we have to write a function in this format and set it up with the same
old type validation. Besides, for the case of composite type
(Eg: Record), We can easily violate the invariant by setting the
properties with the invalid value. Is there any way we can streamline
that process?

Well, to control how we set the values inside the record,
we can actually use `Class` or `Proxy` for that.

Personally, I gravitate towards the class ones, mostly because of the
syntax. But hey, either one works. It's your call, go with whatever
feels right.

Using the getter and setters in `Class` we can Internally maintain the
invariant and guarantee extra things so that every method should be
fine to access the inner properties without worrying much about the
types. That also helps to enforce the Soc principles which
I'm greatly appreciated.

And to further get more out of these `Class`, we can actually implement
these `static` methods to help with constructing those without manually
passing the positional arguments to it. BTW passing props without any
info is a bad practice, making it impossible to know what's inside of
that prop by casually looking at it.

We can use `zod` package for that type validation.

Of course, the class must follow the interchange law so that we can keep
peace of mind that these work correctly without worrying much

It takes some time to define all this stuff upfront. Trust me, it's
worth it, no cap. It saves me a ton of time in debugging and just
zeroing in on the business logic side of the function without worrying
much about the type problems/ invariant. It takes me 4 months to
actually figure this all out after some trials and errors.

Anyway, in the future, I might feel there are some better ways of doing
these things, I'll revisit this and update this article. For now, I work
for me and I'm pretty happy with it.

That's it for now folks.

Stay awesome!
