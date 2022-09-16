import { renderer, ticker, render } from './canvas/app'
import { createParticles } from './canvas/particles'

const { body } = document

const { view } = renderer
createParticles()
render()

body.appendChild(view)

window.onload = () => ticker.start()
