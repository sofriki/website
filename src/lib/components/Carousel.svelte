<script lang="ts">
	import type { StrapiImage } from '$lib/api/types';

	export let images: StrapiImage[];
</script>

<div class="carousel rounded-box h-96">
	{#each images as image}
		<div class="carousel-item">
			<img
				src={image.attributes.url}
				alt="Gallery content"
				class="max-[900px]:w-screen object-cover"
			/>
		</div>
	{/each}
</div>
