<script lang="ts">
	import Carousel from './Carousel.svelte';
	import type {
		DividerComponent,
		ImageComponent,
		SpacerComponent,
		TextComponent,
		TitleComponent,
		UOComponent
	} from '$lib/api/types';
	import { ComponentTypes } from '$lib/api/types';
	import Uo from './UO.svelte';

	export let sections: (
		| TitleComponent
		| TextComponent
		| ImageComponent
		| DividerComponent
		| SpacerComponent
		| UOComponent
	)[];
</script>

<div class="flex flex-col mx-48 my-8 max-[900px]:mx-8">
	{#each sections as section}
		{#if section.__component === ComponentTypes.Title}
			<h1 class="text-4xl font-bold">{section.title}</h1>
			<br />
		{:else if section.__component === ComponentTypes.TextSection}
			{#if section.title != null}
				<h2 class="text-2xl font-bold">{section.title}</h2>
			{/if}
			<p>{@html section.content}</p>
		{:else if section.__component === ComponentTypes.Divider}
			<div class="divider" />
		{:else if section.__component === ComponentTypes.ImageSection}
			<Carousel images={section.images.data} />
		{:else if section.__component === ComponentTypes.Spacer}
			<br /><br />
		{:else if section.__component === ComponentTypes.UO}
			<Uo uoReps={section.uos.data} />
		{/if}
	{/each}
</div>
