import { Observable } from 'rxjs'
import { writable } from 'svelte/store'

export const useObservable = <T>(
  o: Observable<T>,
  f: (v: T | null) => (() => void) | void,
) => {
  const wt = writable<T | null>(null)
  const s = o.subscribe(wt.set)
  let cleanup: (() => void) | void

  const unsub = wt.subscribe((v) => (cleanup = f(v)))

  return () => {
    unsub()
    cleanup?.()
    s.unsubscribe()
  }
}
