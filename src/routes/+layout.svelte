<script>
  import { browser } from '$app/environment'
  import { dark } from '$lib/stores.js'
  import '@unocss/reset/sanitize/sanitize.css'
  import '@unocss/reset/sanitize/assets.css'
  import 'uno.css'
  import '$lib/aero.css'

  let loaded = false

  $: {
    if (browser) {
      localStorage.setItem('theme', +$dark)
      document.documentElement.classList[$dark ? 'add' : 'remove']('dark')
    }
  }

  if (browser) {
    history.scrollRestoration = 'manual'

    $dark =
      +localStorage.theme ||
      (!('theme' in localStorage) &&
        matchMedia('(prefers-color-scheme: dark)').matches)

    requestAnimationFrame(() => {
      scrollTo({ top: 0, behavior: 'instant' })
      loaded = true
    })
  }
</script>

<main class="{loaded ? 'opacity-100' : 'opacity-0'} ofade-400">
  <slot />
</main>
