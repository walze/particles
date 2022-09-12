<script lang="ts">
  import { animationFrames } from 'rxjs'

  import { onMount } from 'svelte'
  import { Renderer } from 'pixi.js'
  import { stage } from './canvas/particles'
  import { randomInt } from './helpers/random'

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
    const renderer = new Renderer({
      view,
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x111111,
      powerPreference: 'high-performance',
      useContextAlpha: false,
      antialias: false,
    })

    animationFrames().subscribe(() => {
      renderer.render(stage)
    })
  })
</script>

<canvas bind:this={view} />
