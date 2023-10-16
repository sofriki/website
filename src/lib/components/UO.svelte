<script lang="ts">
	import type { UORep } from '$lib/api/types';
	import Person from './Person.svelte';

	export let uoReps: UORep[];
</script>

<div class="grid grid-cols-3 gap-10 max-[900px]:grid-cols-2">
	{#each uoReps as person}
		<Person {person} />
	{/each}
</div>
