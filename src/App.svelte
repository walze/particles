<script lang="ts">
  import { animationFrames } from 'rxjs'

  import { onMount } from 'svelte'
  import { stage } from './canvas/particles'
  import { randomInt } from './helpers/random'
  import { renderer } from './canvas/render'

  animationFrames().subscribe(() => {
    for (const p of stage.children) {
      p.setTransform(
        p.x + randomInt(-1, 1),
        p.y + randomInt(-1, 1),
      )
    }
  })

  let view: HTMLCanvasElement

  onMount(() => {
    const { render } = renderer(view)

    animationFrames().subscribe(() => {
      render(stage)
    })
  })
</script>

<canvas bind:this={view} />
