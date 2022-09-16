import { Observable } from 'rxjs'
import { writable } from 'svelte/store'

export const useObservable = <T>(
  o: Observable<T>,
  f: (v: T | null) => (() => void) | void,
) => {
  const wt = writable<T | null>(null)
  const s = o.subscribe(wt.set)
  const subscribe = (v: T | null) => (cleanup = f(v))
  let cleanup: (() => void) | void

  const unsub = wt.subscribe(subscribe)

  const cleanupAll = () => {
    unsub()
    cleanup?.()
    s.unsubscribe()
  }

  return cleanupAll
}
