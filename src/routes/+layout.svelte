<script>
  import { onMount } from 'svelte'

  import { browser } from '$app/environment'
  import '@unocss/reset/sanitize/sanitize.css'
  import '@unocss/reset/sanitize/assets.css'
  import 'uno.css'
  import '$lib/aero.css'

  let loaded = false

  if (browser) {
    history.scrollRestoration = 'manual'
  }

  onMount(() => {
    requestAnimationFrame(() => {
      scrollTo({ top: 0, behavior: 'instant' })
      loaded = true
    })
  })
</script>

<div class="ofade-400 {loaded ? 'opacity-100' : 'opacity-0'}">
  <slot />
</div>
