<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  onMount(async () => {
    const { ticker } = await import('./canvas/app')

    ticker.start()
  })

  onDestroy(() => {})
</script>

<canvas width={window.innerWidth} height={window.innerHeight} />
