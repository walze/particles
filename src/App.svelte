<script lang="ts">
  import { animationFrames } from 'rxjs'

  import { stage } from './canvas/particles'
  import { renderer as getRenderer } from './canvas/render'
  import { useObservable } from './helpers/useObservable'
  import { onDestroy, onMount } from 'svelte'
  import { update } from './Particle'

  let view: HTMLCanvasElement
  let unsub = () => {}

  onMount(() => {
    const { render, renderer: r } = getRenderer(view)

    unsub = useObservable(animationFrames(), () => {
      for (const p of stage.children) update(p)

      render(stage)

      return () => r.destroy()
    })
  })

  onDestroy(unsub)
</script>

<canvas
  width={window.innerWidth}
  height={window.innerHeight}
  bind:this={view}
/>
