import 'svelte'
import 'vite/client'

declare module '*.svelte' {
  import { SvelteComponentTyped } from 'svelte'

  export default class extends SvelteComponentTyped {}
}
