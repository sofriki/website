<script lang="ts">
	import logo from '$lib/assets/friki_transparent.png';
	import LinkCard from '$lib/components/LinkCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>FRiKi - Povezave</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<img src={logo} alt="FRiKi Logo" width="200" />
	<br />
	{#each data.data as link}
		<LinkCard {link} />
		<div class="h-2" />
	{/each}
</div>
