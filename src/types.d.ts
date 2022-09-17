import 'svelte'
import 'vite/client'

declare global {
  export type Vector = readonly [x: number, y: number]

  export interface Window {
    loop: {
      elapsed: number
      delta: number
      previous: number
    }
  }
}

declare module '*.svelte' {
  export { SvelteComponentTyped } from 'svelte'
}
