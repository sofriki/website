<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import type { StrapiImage } from '$lib/api/types';

	const getImageUrl = (location: string) => PUBLIC_API_URL + location;

	export let images: StrapiImage[];
</script>

<div class="carousel rounded-box h-96">
	{#each images as image}
		<div class="carousel-item">
			<img src={getImageUrl(image.attributes.url)} alt="Gallery content" />
		</div>
	{/each}
</div>
