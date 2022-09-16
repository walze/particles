<script lang="ts">
  import { stage } from './canvas/particles'
  import { renderer } from './canvas/render'
  import { update } from './Particle'
  import { onDestroy } from 'svelte'

  let view: HTMLCanvasElement

  const f = () => {
    const { render } = renderer(view)

    for (const p of stage.children) update(p)

    render(stage)

    requestAnimationFrame(f)
  }

  const id = requestAnimationFrame(f)

  onDestroy(() => {
    cancelAnimationFrame(id)
  })
</script>

<canvas
  width={window.innerWidth}
  height={window.innerHeight}
  bind:this={view}
/>
