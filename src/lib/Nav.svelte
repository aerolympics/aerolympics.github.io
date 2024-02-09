<script>
  import { createResizeObserver, useClickOutside } from '@grail-ui/svelte'
  import { fade, fly, slide } from 'svelte/transition'

  import { browser } from '$app/environment'
  import { dark } from '$lib/stores.js'

  export let sticky = false

  let menu = false
  let isMd = true
  let ignore = []
  let { useResizeObserver, entries } = createResizeObserver()
  $: x0 = $entries[0]?.contentRect.width * (menu * 2 - 1)
  $: x1 = $entries[1]?.contentRect.width
  $: y2 = $entries[2]?.contentRect.height

  if (browser) {
    let m = matchMedia(`(min-width: 768px)`)
    isMd = m.matches
    m.addEventListener('change', e => {
      isMd = e.matches
    })
  }
</script>

{#if menu && !isMd}
  <div class="fixed inset-0 screen bg-black opacity-69" transition:fade />
{/if}

<nav
  class="{sticky
    ? 'sticky'
    : 'fixed'} inset-x-0 top-0 flex flex-(items-center) b-(x-0 t-0 grays-100 solid) bg-grays-white p-3 dark:(b-grays-900 bg-black) lg:px-13 md:(px-8 py-1)"
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

  <button
    bind:this={ignore[0]}
    class="grid ml-auto b-none p-1 text-8 md:hidden bg-transparent! text-fg"
    aria-label="{menu ? 'Close' : 'Open'} nav menu"
    on:click={() => {
      menu = !menu
    }}
  >
    {#key menu}
      <div
        class="{menu ? 'i-ion-close' : 'i-ion-menu'} grid-item"
        use:useResizeObserver
        in:fly={{ x: x0 }}
        out:fly={{ x: -x0 }}
      />
    {/key}
  </button>

  {#if menu || isMd}
    <ul
      class="flex gap-3 lt-md:(absolute top-100% m-0 ml--3 w-full flex-col b-b-3 b-b-grays-100 b-b-solid bg-bg px-6 pb-8 pt-3 text-right dark:b-b-grays-900) md:(ml-auto gap-8 flex-items-center)"
      use:useClickOutside={{
        handler() {
          menu = false
        },
        ignore,
      }}
      transition:slide
    >
      <!-- TODO: change routes -->
      <li><a href="/">Product</a></li>
      <li><a href="/">News</a></li>
      <li><a href="/">Contact</a></li>

      <li class="flex flex-items-center lt-md:ml-auto">
        <button
          id="dark"
          class="primary grid overflow-hidden p-1"
          aria-label="{$dark ? 'Dark' : 'Light'} mode"
          on:click={() => {
            $dark = !$dark
          }}
        >
          {#key $dark}
            <div
              class="{$dark ? 'i-ion-moon' : 'i-ion-sunny'} grid-item"
              use:useResizeObserver
              in:fly={{ x: x1 }}
              out:fly={{ x: -x1 }}
            />
          {/key}
        </button>
        <label
          class="inline-grid ml-3 cursor-pointer font-600 md:hidden"
          for="dark"
        >
          {#key $dark}
            <span
              class="grid-item"
              use:useResizeObserver
              in:fly={{ y: -y2 }}
              out:fly={{ y: y2 }}
            >
              {$dark ? 'Dark' : 'Light'} Mode
            </span>
          {/key}
        </label>
      </li>
    </ul>
  {/if}
</nav>

<style>
  a {
    --at-apply: decoration-none font-600 text-fg;
  }

  .grid-item {
    grid-area: 1/1/2/2;
  }
</style>
