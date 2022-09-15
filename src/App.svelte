<script lang="ts">
  import { animationFrames } from 'rxjs'

  import { stage } from './canvas/particles'
  import { renderer } from './canvas/render'
  import { useObservable } from './helpers/useObservable'
  import { onDestroy } from 'svelte'
  import { update } from './Particle'

  let view: HTMLCanvasElement

  const unsub = useObservable(animationFrames(), () => {
    const { render, renderer: r } = renderer(view)

    for (const p of stage.children) update(p)

    render(stage)

    return () => r.destroy()
  })

  onDestroy(unsub)
</script>

<canvas
  width={window.innerWidth}
  height={window.innerHeight}
  bind:this={view}
/>
