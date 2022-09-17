import { renderer, render, start } from './canvas/app'
import { createParticles } from './canvas/particles'

import './cfd/vector'

const { body } = document

const { view } = renderer
createParticles()
render()

body.appendChild(view)

window.onload = start.bind(null, 0)
// window.onclick = start.bind(null, 0)
