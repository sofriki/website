<script lang="ts">
	import logo from '$lib/assets/friki_transparent.png';
	import Link from '$lib/components/Link.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col items-center justify-center">
	<img src={logo} alt="FRiKi Logo" width="200" />
	<br />
	{#each data.data as link}
		<Link {link} />
		<div class="h-2" />
	{/each}
</div>
