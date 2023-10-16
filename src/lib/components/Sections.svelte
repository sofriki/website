<script lang="ts">
	import Carousel from './Carousel.svelte';
	import type {
		AboutUsDividerComponent,
		AboutUsImageComponent,
		AboutUsSpacerComponent,
		AboutUsTextComponent,
		AboutUsTitleComponent
	} from '$lib/api/types';

	import { AboutUsComponentTypes } from '$lib/api/types';

	export let sections: (
		| AboutUsTitleComponent
		| AboutUsTextComponent
		| AboutUsImageComponent
		| AboutUsDividerComponent
		| AboutUsSpacerComponent
	)[];
</script>

<div class="flex flex-col mx-48 my-8 max-[900px]:mx-8">
	{#each sections as section}
		{#if section.__component === AboutUsComponentTypes.Title}
			<h1 class="text-4xl font-bold">{section.title}</h1>
			<br />
		{:else if section.__component === AboutUsComponentTypes.TextSection}
			{#if section.title != null}
				<h2 class="text-2xl font-bold">{section.title}</h2>
			{/if}
			<p>{@html section.content}</p>
		{:else if section.__component === AboutUsComponentTypes.Divider}
			<div class="divider" />
		{:else if section.__component === AboutUsComponentTypes.ImageSection}
			<Carousel images={section.images.data} />
		{:else if section.__component === AboutUsComponentTypes.Spacer}
			<br /><br />
		{/if}
	{/each}
</div>
