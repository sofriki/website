<script lang="ts">
	import { getImageUrl } from '$lib/api/utils';
	import type { PageData } from './$types';

	const openModal = (image: string) => {
		const modal = document.getElementById('image_modal') as any;
		modal.showModal();

		modalImage = image;
	};

	export let data: PageData;

	let modalImage: string = data.attributes.images.data[0].attributes.url;
</script>

<div class="flex flex-col mx-48 my-8 max-[900px]:mx-8">
	<h1 class="text-4xl font-bold">{data.attributes.title}</h1>
	<p>{@html data.attributes.description}</p>

	<br />

	<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		{#each data.attributes.images.data as image}
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					on:click={() => openModal(image.attributes.url)}
					class="h-auto max-w-full rounded-lg cursor-pointer"
					src={getImageUrl(image.attributes.url)}
					alt="Gallery item"
				/>
			</div>
		{/each}
	</div>

	<dialog id="image_modal" class="modal">
		<div class="flex flex-col items-center justify-items-center modal-box w-11/12 max-w-5xl">
			<img class="rounded-lg" src={getImageUrl(modalImage)} alt="Opened item" />
		</div>
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</div>
