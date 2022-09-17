import { compose } from 'ramda'
import { aspect } from '../config'
import assert from '../helpers/assert'

const [w, h] = aspect

export const N = 3
export const size = N ** 2
export const vectorWidth = w / N
export const vectorHeight = h / N

export const vx: number[] = []
export const vy: number[] = []

for (let i = 0; i < N; i++) {
  vx.push(1)
  vy.push(1)
}

export const coordinate2Vector = ({
  x,
  y,
}: {
  x: number
  y: number
}): Vector => {
  const i = Math.floor(x / vectorWidth)
  const j = Math.floor(y / vectorHeight)

  return [i, j] as const
}

export const getvec = ([x, y]: Vector): Vector => {
  const vi = vx[x]
  const vj = vy[y]

  assert(typeof vi === 'number', 'Could not get vector' + x)
  assert(typeof vj === 'number', 'Could not get vector' + y)

  return [vi, vj] as const
}

export const setvec = ([x, y]: Vector, [u, v]: Vector) => {
  vx[x] = u
  vy[y] = v
}

const vector = compose(getvec, coordinate2Vector)

document.onclick = (e) => {
  const { clientX, clientY } = e

  console.log(vector({ x: clientX, y: clientY }))
}

export default vector
