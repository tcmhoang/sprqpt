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
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		--marker: var(--mauve);
		--heading-color: var(--yellow);
	}
	small {
		display: flex;
		justify-content: center;
	}
</style>
