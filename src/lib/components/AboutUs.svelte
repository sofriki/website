<script lang="ts">
	import Carousel from './Carousel.svelte';
	import type { AboutUsDivider, AboutUsImageSection, AboutUsTextSection } from '$lib/api/types';
	import { AboutUsComponentTypes } from '$lib/api/types';

	export let sections: (AboutUsTextSection | AboutUsImageSection | AboutUsDivider)[];
</script>

<div class="flex flex-col mx-48 my-8 max-[900px]:mx-8">
	<h1 class="text-4xl font-bold">O FRiKih</h1>
	<br />
	{#each sections as section}
		{#if section.__component === AboutUsComponentTypes.TextSection}
			{#if section.title != null}
				<h2 class="text-2xl font-bold">{section.title}</h2>
			{/if}
			<p>{@html section.content}</p>
		{:else if section.__component === AboutUsComponentTypes.Divider}
			<div class="divider" />
		{:else if section.__component === AboutUsComponentTypes.ImageSection}
			<Carousel images={section.images.data} />
		{/if}
	{/each}
</div>
