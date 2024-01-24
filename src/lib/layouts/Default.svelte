<script>
	import DefaultHeader from './DefaultHeader.svelte';

	/** @type string */
	export let excerpt;

	/** @type string */
	export let title;

	/** @type string */
	export let created;

	/** @type string */
	export let date;

	/** @type string | undefined */
	export let author;
</script>

<DefaultHeader author={author ?? 'Conrad Hoang'} {excerpt} {date} {title} {created} />

<div>
	<slot />

	<small>
		Updated on {new Date(date).toDateString()}
	</small>
</div>

<style>
	div {
		padding: 0 1rem;
	}
</style>
