import {
  Sprite,
  ParticleContainer as PC,
  Texture,
} from 'pixi.js'
import { isInBounds } from './canvas/app'
import vector from './cfd/vector'
import { aspect } from './config'
import assert from './helpers/assert'

const [width, height] = aspect

const canvas = new OffscreenCanvas(
  1,
  1,
) as unknown as HTMLCanvasElement

const ctx = canvas.getContext('2d')
assert(ctx)
ctx.fillStyle = '#FFF'
ctx.fillRect(0, 0, 1, 1)

const WhiteTexture = Texture.from(canvas)

const G = 6.6743015e-11
let mass = 7.34767309e13

const distance = (
  [x1, y1]: [number, number],
  [x2, y2]: [number, number],
) => {
  const dx = x2 - x1
  const dy = y2 - y1

  return {
    dx,
    dy,
    d: Math.sqrt(dx ** 2 + dy ** 2),
  }
}

export const gravity = (
  c1: [number, number],
  c2: [number, number],
) => {
  const { dx, dy, d } = distance(c1, c2)

  const a = (G * mass) / d ** 2

  const ux = dx / d
  const uy = dy / d

  const ax = ux * a
  const ay = uy * a

  mass *= 1 + G * 100

  return [ax, ay, [dx, dy]] as [number, number, [number, number]]
}

export const center = [width / 2, height / 2] as [number, number]

const nv = (p: Particle) => {
  return vector(p)
  // return [0, 0] as const
}

export const update = (p: Particle): Particle | undefined => {
  if (isInBounds(p)) {
    const [nvx, nvy] = nv(p)
    p.vx += nvx
    p.vy += nvy
  } else {
    p.vx *= -1
    p.vy *= -1
  }

  p.position.set(p.x + p.vx, p.y + p.vy)

  return p
}

export class Particle extends Sprite {
  vx = 0
  vy = 0

  override name = `${this.x}${this.y}`

  get coords() {
    return [this.x, this.y] as [number, number]
  }

  update = () => update(this)

  constructor(x: number, y: number) {
    super(WhiteTexture)

    this.x = x
    this.y = y
  }
}

export class ParticleContainer extends PC {
  override children: Particle[] = []
}
