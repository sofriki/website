<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="bottom-0 footer footer-center p-10 bg-base-200 text-base-content rounded">
	<div class="flex flex-row items-center justify-center w-full">
		<nav>
			<div class="flex flex-col gap-1">
				<p>Email: <a href="mailto:info@friki.si" class="link link-hover">info@friki.si</a></p>
				<p>Tel.: <a href="tel:+38640416417" class="link link-hover">+386 40 416 417</a></p>
			</div>
		</nav>
		<div class="mx-12" />
		<nav class="flex flex-col gap-1">
			<a href="https://www.facebook.com/frikipage" class="link link-hover">Facebook</a>
			<a href="https://www.instagram.com/sofri_friki" class="link link-hover">Instagram</a>
			<a href="https://l.friki.si" class="link link-hover">Links</a>
		</nav>
	</div>
	<aside>
		<p>
			Copyright © {year} - Made with ❤️ by
			<a href="https://aikenahac.com" class="text-[#d9000f]">Aiken</a>
		</p>
	</aside>
</footer>
