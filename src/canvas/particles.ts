import { splitEvery } from 'ramda'
import { randomInt } from '../helpers/random'
import { Particle, ParticleContainer } from '../Particle'
import { aspect } from './render'

const [width, height] = aspect
const n = 100000
console.info('Rendering', n, 'particles')

export const stage = new ParticleContainer(n)
export const particles = Array.from({ length: n }, () => {
  const p = new Particle(
    randomInt(1, width),
    randomInt(1, height),
  )

  return p
})

for (const p of splitEvery(100, particles)) stage.addChild(...p)
