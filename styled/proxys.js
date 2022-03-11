export const onCall = fn => {
  return new Proxy(() => {},  {
    apply: (_, __, args) => fn(...args)
  })
}

export default (fn, handler = () => {}) => new Proxy(function() { }, {
  get: (_, key) => handler(fn, key.toLowerCase()),
  apply: (_, __, args) => fn(...args)
})