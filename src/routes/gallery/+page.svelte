<script lang="ts">
	import GalleryCard from '$lib/components/GalleryCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Galerija slik</title>
</svelte:head>

<div class="flex flex-col mx-48 my-8 max-[900px]:mx-8">
	<h1 class="text-4xl font-bold">Galerija slik</h1>
	<br />
	{#each data.data as gallery}
		<GalleryCard {gallery} />
	{/each}
</div>
