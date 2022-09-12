import assert from 'assert'
import { ParticleContainer, Sprite, Texture } from 'pixi.js'
import { splitEvery } from 'ramda'
import { randomInt } from '../helpers/random'

const canvas = new OffscreenCanvas(
  1,
  1,
) as unknown as HTMLCanvasElement
const ctx = canvas.getContext('2d')
assert(ctx)
ctx.fillStyle = '#FFF'
ctx.fillRect(0, 0, 1, 1)

const WhiteTexture = Texture.from(canvas)

const n = 10000

export const makeParticle = () => {
  const p = new Sprite(WhiteTexture)
  p.x = randomInt(1, window.innerWidth)
  p.y = randomInt(1, window.innerHeight)

  return p
}

export const particles = Array(n)
  .fill(undefined)
  .map(makeParticle)

export const stage = new ParticleContainer(n)
splitEvery(10000, particles).forEach((batch) => {
  stage.addChild(...batch)
})
