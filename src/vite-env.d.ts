import 'svelte'
import 'vite/client'

declare global {
  export interface Window {
    loop: {
      elapsed: number
      delta: number
      previous: number
    }
  }
}

declare module '*.svelte' {
  import { SvelteComponentTyped } from 'svelte'

  export default class extends SvelteComponentTyped {}
}
