import assert from 'assert'
import { ParticleContainer, Sprite, Texture } from 'pixi.js'
import { splitEvery } from 'ramda'
import { randomInt } from '../helpers/random'
import { aspect } from './render'

const canvas = new OffscreenCanvas(
  1,
  1,
) as unknown as HTMLCanvasElement
const ctx = canvas.getContext('2d')
assert(ctx)
ctx.fillStyle = '#FFF'
ctx.fillRect(0, 0, 1, 1)

const WhiteTexture = Texture.from(canvas)
const [width, height] = aspect
const n = width * width
console.info('Rendering', n, 'particles')

export const makeParticle = () => {
  const p = Sprite.from(WhiteTexture)
  p.x = randomInt(1, width)
  p.y = randomInt(1, height)

  return p
}

export const particles = Array(n)
  .fill(undefined)
  .map(makeParticle)

export const stage = new ParticleContainer(n)
splitEvery(n / 10, particles).forEach((batch) => {
  stage.addChild(...batch)
})
