<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Gallery } from '$lib/api/types';

	const openGallery = (id: number) => goto(`/gallery/${id}`);

	export let gallery: Gallery;
</script>

<div class="card w-96 h-64 bg-base-100 shadow-xl image-full">
	<figure>
		<img
			class="w-96 h-64 object-cover"
			src={gallery.attributes.cover.data.attributes.url}
			alt="Gallery cover"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{gallery.attributes.title}</h2>
		<p>{@html gallery.attributes.description}</p>
		<div class="card-actions justify-end">
			<button on:click={() => openGallery(gallery.id)} class="btn btn-primary"
				>Odpri galerijo</button
			>
		</div>
	</div>
</div>
