<script>
	import DefaultHeader from './DefaultHeader.svelte';

	/** @type string */
	export let date;

	/** @type string */
	export let created;

	/** @type string */
	export let title;

	/** @type string */
	export let excerpt;

	/** @type string | undefined */
	export let author;
</script>

<DefaultHeader author={author ?? 'Conrad Hoang'} {excerpt} {date} {title} {created} />

<div>
	<slot />
</div>

<style>
	div {
		padding: 0 1rem;
	}
</style>
