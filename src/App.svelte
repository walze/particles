<script lang="ts">
  import { animationFrames } from 'rxjs'

  import { stage } from './canvas/particles'
  import { randomInt } from './helpers/random'
  import { renderer } from './canvas/render'
  import { useObservable } from './helpers/useObservable'
  import { onDestroy } from 'svelte'

  let view: HTMLCanvasElement

  const unsub = useObservable(animationFrames()).subscribe(
    () => {
      for (const p of stage.children)
        p.setTransform(
          p.x + randomInt(-1, 1),
          p.y + randomInt(-1, 1),
        )

      const { render } = renderer(view)

      render(stage)
    },
  )

  onDestroy(unsub)
</script>

<canvas bind:this={view} />
