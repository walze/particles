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
      for (const p of stage.children) {
        const mx = randomInt(-1, 1)
        const my = randomInt(-1, 1)
        p.setTransform(p.x + mx, p.y + my)
      }

      const { render } = renderer(view)

      render(stage)
    },
  )

  onDestroy(unsub)
</script>

<canvas bind:this={view} />
