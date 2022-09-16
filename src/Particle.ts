import assert from 'assert'
import {
  Sprite,
  ParticleContainer as PC,
  Texture,
} from 'pixi.js'
import { aspect } from './config'

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

const gravity = (c1: [number, number], c2: [number, number]) => {
  const [x1, y1] = c1
  const [x2, y2] = c2

  const dx = x2 - x1
  const dy = y2 - y1

  const d = Math.sqrt(dx ** 2 + dy ** 2)

  const a = (G * mass) / d ** 2

  const ux = dx / d
  const uy = dy / d

  const ax = ux * a
  const ay = uy * a

  mass *= 1 + G

  return [ax, ay, [dx, dy]] as [number, number, [number, number]]
}

const center = [width / 2, height / 2] as [number, number]

export const update = (p: Particle) => {
  const [nvx, nvy, dv] = gravity(p.coords, center)
  p.vx += nvx
  p.vy += nvy

  const close = Math.sqrt(dv[0] ** 2 + dv[1] ** 2) <= 50
  if (close) {
    mass *= 1.000001

    p.vx = 0
    p.vy = 0
    p.position.set(-100000, -100000)
  }

  p.position.set(p.x + p.vx, p.y + p.vy)
}

export class Particle extends Sprite {
  vx = -1
  vy = -1

  override name = `${this.x}${this.y}`

  get coords() {
    return [this.x, this.y] as [number, number]
  }

  constructor(x: number, y: number) {
    super(WhiteTexture)

    this.x = x
    this.y = y
  }
}

export class ParticleContainer extends PC {
  override children: Particle[] = []
}
