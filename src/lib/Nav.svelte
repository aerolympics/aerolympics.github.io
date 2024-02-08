<script>
  import { dark } from '$lib/stores.js'
</script>

<nav
  class="fixed inset-x-0 top-0 flex flex-items-center b-(x-0 t-0 grays-100 solid) bg-grays-white px-13 py-1 dark:(b-grays-900 bg-black)"
>
  <h1 class="m-(0 t-1) h-8">
    <a class="h-full" href="/">
      <img
        class="block h-full"
        alt="Aerolympics"
        src="/logo_{$dark ? 'dark' : 'light'}.svg"
      />
    </a>
  </h1>
  <ul class="ml-auto flex gap-8">
    <li><a href="/product">Product</a></li>
    <li><a href="/news">News</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<style>
  a {
    --at-apply: decoration-none font-600;
  }
</style>
