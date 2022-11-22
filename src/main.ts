import { start } from './canvas/app'
import { createParticles } from './canvas/particles'

createParticles()

window.onload = start.bind(null, 0)
