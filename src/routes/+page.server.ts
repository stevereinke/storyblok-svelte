import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/svelte";

import Feature from "$lib/components/Feature.svelte";
import Grid from "$lib/components/Grid.svelte";
import Page from "$lib/components/Page.svelte";
import Teaser from "$lib/components/Teaser.svelte";

import { STORYBLOK_TOKEN } from "$env/static/private"

const token = STORYBLOK_TOKEN

const components = {
  feature: Feature,
  grid: Grid,
  page: Page,
  teaser: Teaser
}

export async function load() {
  storyblokInit({
    accessToken: token,
    use: [apiPlugin],
    components: components
  })
  let storyblokApi = await getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft"
  })

  return { story: data.story }
}
