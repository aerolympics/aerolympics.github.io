<script>
  import { Nav } from '$lib'
  import { dark } from '$lib/stores.js'
</script>

<svelte:head>
  <title>Aerolympics</title>
</svelte:head>

<Nav />

<div class="screen flex items-center justify-center">
  <div class="max-w-[65ch] w-full">
    <h1>Testing Testing 123</h1>
    <h2>Testing Testing 123</h2>
    <h3>Testing Testing 123</h3>
    <p>
      <strong>Sample text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </p>
    <p><a href="https://google.com" target="_blank">Link</a></p>
    <div class="flex flex-wrap gap-4">
      <button>Click me</button>
      <button class="primary">Click me</button>
      <button class="secondary">Click me</button>
      <button class="accent">Click me</button>
    </div>
  </div>
</div>
