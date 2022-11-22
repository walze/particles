import { randomInt } from '../helpers/random'
import { Particle, ParticleContainer, update } from '../Particle'
import { aspect } from '../config'

const [width, height] = aspect
export const PARTICLE_NUMBER = 250_000
console.info('Rendering', PARTICLE_NUMBER, 'particles')

export const stage = new ParticleContainer(
  PARTICLE_NUMBER,
  {
    vertices: false,
    alpha: false,
    position: true,
    rotation: false,
    scale: false,
    uvs: false,
  },
  PARTICLE_NUMBER,
  false,
)

const r = (d: number) => randomInt(1, d)

export const createParticles = () => {
  for (let i = 0; i < PARTICLE_NUMBER; i++) {
    const p = new Particle(r(width), r(height))

    update(p)

    stage.addChild(p)
  }
}
