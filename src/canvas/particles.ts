import { splitEvery } from 'ramda'
import { randomInt } from '../helpers/random'
import { Particle, ParticleContainer } from '../Particle'
import { aspect } from '../config'

const [width, height] = aspect
const n = 100_000
console.info('Rendering', n, 'particles')

const r = (d: number) => randomInt(1, d)

export const stage = new ParticleContainer(n)
export const particles = Array.from({ length: n }, () => {
  const p = new Particle(r(width), r(height))

  return p
})

for (const p of splitEvery(100, particles)) stage.addChild(...p)
