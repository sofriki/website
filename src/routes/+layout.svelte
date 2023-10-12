<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex flex-col justify-between min-h-screen">
	<div>
		<Banner content={data} />
		<Navbar />
	</div>
	<slot />
	<Footer />
</div>
