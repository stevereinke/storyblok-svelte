<script>
  import { storyblokEditable } from "@storyblok/svelte";

  export let blok;
</script>

<h3 use:storyblokEditable={blok} class="py-8 mb-6 text-5xl font-bold text-center">
    { blok.headline }
</h3>
