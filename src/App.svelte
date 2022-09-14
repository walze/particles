<script lang="ts">
  import { animationFrames } from 'rxjs'

  import { stage } from './canvas/particles'
  import { renderer } from './canvas/render'
  import { useObservable } from './helpers/useObservable'
  import { onDestroy } from 'svelte'

  let view: HTMLCanvasElement

  const unsub = useObservable(animationFrames()).subscribe(
    () => {
      const { render } = renderer(view)

      render(stage)
    },
  )

  onDestroy(unsub)
</script>

<canvas
  width={window.innerWidth}
  height={window.innerHeight}
  bind:this={view}
/>
