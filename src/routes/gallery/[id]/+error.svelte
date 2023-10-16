<script lang="ts">
	import { goto } from '$app/navigation';

	const rickroll = () => goto('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
</script>

<div class="flex flex-col items-center mx-48 my-8 max-[900px]:mx-8">
	<h1 class="text-4xl font-bold">404</h1>
	<p>Ta stran ne obstaja</p>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<p on:click={rickroll}>Prijavi napako</p>
</div>
