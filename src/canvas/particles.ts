import { randomInt } from '../helpers/random'
import { Particle, ParticleContainer } from '../Particle'
import { aspect } from '../config'
import { splitEvery } from 'ramda'

const [width, height] = aspect
const n = 250_000
console.info('Rendering', n, 'particles')

const r = (d: number) => randomInt(1, d)

export const stage = new ParticleContainer(n)
export const particles = Array.from(
  { length: n },
  () => new Particle(r(width), r(height)),
)

const split = splitEvery(100, particles)

for (let i = 0; i < split.length; i++) {
  const p = split[i]

  p && stage.addChild(...p)
}
