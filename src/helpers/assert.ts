class AssertionError extends Error {
  constructor(value: unknown, message?: string) {
    super(message, {
      cause: value,
    })

    this.name = 'AssertionError'

    // eslint-disable-next-line no-console
    console.error(message || 'Uncaught assertion', '=>', value)
  }
}

type Assert = <T>(value: T, message?: string) => asserts value

const assert: Assert = (value, text) => {
  if (!value) throw new AssertionError(value, text)
}

export default assert
