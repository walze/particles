<script lang="ts">
  import {
    animationFrames,
    Observable,
    Subscription,
  } from 'rxjs'

  import { onDestroy, onMount } from 'svelte'
  import { stage } from './canvas/particles'
  import { randomInt } from './helpers/random'
  import { renderer } from './canvas/render'
  import { writable } from 'svelte/store'

  let view: HTMLCanvasElement

  const useObservable = <T, _>(o: Observable<T>) => {
    let sub: Subscription
    const store = writable<T | null>(null)

    onMount(() => (sub = o.subscribe(store.set)))

    onDestroy(() => sub.unsubscribe())

    return store
  }

  const frames = useObservable(animationFrames())

  $: {
    if ($frames)
      for (const p of stage.children)
        p.setTransform(
          p.x + randomInt(-1, 1),
          p.y + randomInt(-1, 1),
        )
  }

  $: {
    if ($frames) {
      const { render } = renderer(view)

      render(stage)
    }
  }
</script>

<canvas bind:this={view} />
