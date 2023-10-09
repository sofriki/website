<script lang="ts">
	export let images: string[];
</script>

<!-- <div class="carousel w-full rounded-md">
	{#each images as image, i}
		<div id="slide{i}" class="carousel-item relative w-full">
			<img src={image} class="w-full object-cover" alt="Gallery content" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				{#if i != 0}
					<a href="#slide{i - 1}" class="btn btn-circle">❮</a>
				{:else}
					<div />
				{/if}
				{#if i != images.length - 1}
					<a href="#slide{i + 1}" class="btn btn-circle">❯</a>
				{/if}
			</div>
		</div>
	{/each}
</div> -->

<div class="carousel rounded-box h-96">
	{#each images as image}
		<div class="carousel-item">
			<img src={image} alt="Gallery content" />
		</div>
	{/each}
</div>
