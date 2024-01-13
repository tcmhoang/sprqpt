<script>
	import Gnup from '$lib/icons/Gnup.svelte';
	import Terminal from '$lib/icons/Terminal.svelte';

	const gpg_md5 = 'f10aa4c5c18b8bda4ead64f1b8e8bff3'.toUpperCase();
	const ssh_sha256 =
		'ee6e28d659105cf2befecce76386682726aa6d7170af059b3d35033e26acad2e'.toUpperCase();
</script>

<footer class="w-content">
	<div>
		<a href="/keys/conradhoang.ssh.pub" title="SSH - {ssh_sha256}">
			<Terminal />
		</a>
		<a href="/keys/conradhoang.gpg.pub" title="GPG - {gpg_md5}">
			<Gnup />
		</a>
	</div>

	<small>tcmhoang © 2024</small>

	<div class="hidden" aria-hidden="true" itemtype="http://schema.org/Person">
		<span itemprop="gender">Male</span>
		<span itemprop="email">conrad@sprqpt.com</span>
		<span itemprop="givenName">Tuan</span>
		<span itemprop="familyName">Hoang</span>
		<span itemprop="name">Tuan Minh Hoang</span>
		<span itemprop="additionalName">Conrad Hoang</span>
		<span itemprop="jobTitle">Software Engineer</span>
		<span itemprop="nationality">VN</span>
	</div>
</footer>

<style lang="scss">
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 1rem;
		a {
			color: var(--pink);
			border-radius: 0.375rem;
			display: grid;
			place-items: center;
			width: 2.5rem;
			height: 2.5rem;
			padding: 0.25rem;

			&:hover {
				background: var(--surface);
			}
		}
	}
	footer {
		color: var(--text);
		padding: 2rem 0;
		max-width: 100%;
		margin: 0 auto;
		font-size: var(--step--1);
		display: grid;
		place-items: center;
		row-gap: 0.5rem;
	}

	small {
		color: var(--sub-text);
		font-size: var(--step--1);
	}
</style>
