<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<div class="flex flex-col justify-between min-h-screen">
	<Navbar />
	<slot />
	<Footer />
</div>
