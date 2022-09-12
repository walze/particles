import './app.css'
import App from './App.svelte'
import assert from 'assert'

const target = document.querySelector('#app')
assert(target, 'No #app element found')

const app = new App({
  target: target,
})

export default app
