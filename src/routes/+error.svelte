<script>
  import { page } from '$app/stores'
  import { Nav } from '$lib'
</script>

<svelte:head>
  <title>{$page.error.message} | Aerolympics</title>
</svelte:head>

<Nav />

<div class="screen flex flex-justify-center flex-items-center">
  <div class="text-center">
    <h1 class="text-[4rem] text-b">{$page.status}</h1>
    <h2>{$page.error.message}</h2>
  </div>
</div>
