import { Observable } from 'rxjs'
import { onDestroy } from 'svelte'
import { writable } from 'svelte/store'

export const useObservable = <T>(o: Observable<T>) => {
  const wt = writable<T | null>(null)
  const s = o.subscribe(wt.set)

  onDestroy(() => s.unsubscribe())

  return wt
}
