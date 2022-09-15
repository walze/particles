import assert from 'assert'
import {
  Sprite,
  ParticleContainer as PC,
  Texture,
} from 'pixi.js'
import { aspect } from './canvas/render'

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
const mass = 7.34767309e7
const gravity = (b1: [number, number], b2: [number, number]) => {
  const [x1, y1] = b1
  const [x2, y2] = b2

  const dx = x2 - x1
  const dy = y2 - y1

  const d = Math.sqrt(dx ** 2 + dy ** 2)

  const g = G * (mass / d ** 2)

  const ax = g * dx
  const ay = g * dy

  return [ax, ay] as [number, number]
}

export const update = (p: Particle) => {
  const [nvx, nvy] = gravity(p.coords, [width / 2, height / 2])
  p.vs = [p.vx + nvx, p.vy + nvy]

  if (p.x + p.vx <= 0 || p.x + p.vx >= width) p.vx *= -1
  if (p.y + p.vy <= 0 || p.y + p.vy >= height) p.vy *= -1

  const mx = p.x * p.vx
  const my = p.y * p.vy

  p.setTransform(p.x + mx, p.y + my)
}

// i hate this
export class Particle extends Sprite {
  vs: [vx: number, vy: number] = [0.001, 0]

  get vx() {
    return this.vs[0]
  }

  set vx(vx: number) {
    this.vs[0] = vx
  }

  get vy() {
    return this.vs[1]
  }

  set vy(vy: number) {
    this.vs[1] = vy
  }

  get coords() {
    return [this.x, this.y] as [number, number]
  }

  override name = `${this.x}${this.y}`

  constructor(x: number, y: number) {
    super(WhiteTexture)

    this.x = x
    this.y = y
  }
}

export class ParticleContainer extends PC {
  override children: Particle[] = []
}
