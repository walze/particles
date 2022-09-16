<script lang="ts">
  import getRenderer, { ticker } from './canvas/render'
  import { onDestroy, onMount } from 'svelte'

  let view: HTMLCanvasElement
  let renderer: ReturnType<typeof getRenderer> | undefined

  onMount(() => {
    renderer = getRenderer(view)
  })

  onDestroy(() => {
    renderer?.destroy()
  })
</script>

<svelte:window on:load={() => ticker.start()} />

<canvas
  width={window.innerWidth}
  height={window.innerHeight}
  bind:this={view}
/>
