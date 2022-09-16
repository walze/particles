<script lang="ts">
  import { animationFrames } from 'rxjs'

  import { renderer } from './canvas/render'
  import { useObservable } from './helpers/useObservable'
  import { onDestroy, onMount } from 'svelte'

  let view: HTMLCanvasElement
  let unsub = () => {}

  onMount(() => {
    const { frame } = renderer(view)

    unsub = useObservable(animationFrames(), (p) => {
      if (!p) return

      frame(p.timestamp)
    })
  })

  onDestroy(unsub)
</script>

<canvas
  width={window.innerWidth}
  height={window.innerHeight}
  bind:this={view}
/>
