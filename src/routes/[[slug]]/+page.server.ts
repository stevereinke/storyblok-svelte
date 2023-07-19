import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/svelte";
import { error } from '@sveltejs/kit';

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

export async function load(context) {
  const slug = context.params.slug

  storyblokInit({
    accessToken: token,
    use: [apiPlugin],
    components: components
  })
  let storyblokApi = await getStoryblokApi();

  const apiSlug = slug ? slug : "home"
  const apiPath = "cdn/stories/" + apiSlug
  console.log(apiPath)
  try {
    const { data } = await storyblokApi.get(apiPath, {
      version: "draft"
    })

    return { story: data.story }
  } catch(e) {
    throw error(404, "Not found")
  }
}
