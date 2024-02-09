<script>
  import { page } from '$app/stores'
  import { Nav } from '$lib'
</script>

<Nav />

<div class="screen flex flex-justify-center flex-items-center">
  <div class="text-center">
    <h1 class="text-b text-[4rem]">{$page.status}</h1>
    <h2>{$page.error.message}</h2>
  </div>
</div>
