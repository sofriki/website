<script lang="ts">
	import type { Banner } from '$lib/api/types';

	export let content: Banner | null;
</script>

{#if content !== null && content.data !== null && content.data.attributes.content !== null}
	<div class="navbar bg-primary">{@html content.data.attributes.content}</div>
{/if}
