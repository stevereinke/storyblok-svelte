<script>
	import { onMount } from "svelte"
  import { getStoryblokApi, useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte"

	export let data
	export let story = data.story
	console.log(story)

	onMount(async () => {
    useStoryblokBridge(story.id, (newStory) => (story = newStory))
  })
</script>

<svelte:head>
	<title>Storyblok-Svelte-Dummy-App</title>
	<meta name="description" content="Storyblok-Svelte-Dummy-App" />
</svelte:head>

{#if story}
		<StoryblokComponent blok={story.content} />
{/if}

<style>
</style>
