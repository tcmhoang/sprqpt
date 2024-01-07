<script>
	import { base } from '$app/paths';
	const gpg_md5 = 'f10aa4c5c18b8bda4ead64f1b8e8bff3'.toUpperCase();
	const ssh_sha256 =
		'ee6e28d659105cf2befecce76386682726aa6d7170af059b3d35033e26acad2e'.toUpperCase();
</script>

<footer class="w-content">
	<div>
		<a href="{base}/keys/conradhoang.ssh.pub">
			<abbr title="SHA256:{ssh_sha256}">{ssh_sha256.substring(0, 6)}&hellip;</abbr>
			(SSH)
		</a>
		<br />
		<a href="{base}/keys/conradhoang.gpg.pub">
			<abbr title="MD5:{gpg_md5}">{gpg_md5.substring(0, 6)}&hellip;</abbr>
			(GPG)
		</a>
	</div>

	<p>Vectors and icons by <a href="https://www.svgrepo.com" target="_blank">SVG Repo</a></p>

	<small>tcmhoang © 2024</small>

	<div class="hidden" aria-hidden="true" itemtype="http://schema.org/Person">
		<span itemprop="gender">Male</span>
		<span itemprop="email">tcmhoang@outlook.com</span>
		<span itemprop="givenName">Tuan</span>
		<span itemprop="familyName">Hoang</span>
		<span itemprop="name">Tuan Minh Hoang</span>
		<span itemprop="additionalName">Conrad Hoang</span>
		<span itemprop="jobTitle">Software Engineer</span>
		<span itemprop="nationality">VN</span>
	</div>
</footer>

<style>
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
		font-size: var(--step--2);
	}
</style>
