import componentConstructor from './component-constructor'
import { isComponent, getComponentTagAndClasses } from './component-utils'

function createComponent(arg, componentAttrs = {}) {
  switch (typeof arg) {
    case 'string':
      return componentConstructor({ componentAttrs, tag: arg })

    case 'function':
      const component = arg()
      if (!isComponent(component))
        throw new Error('createComponent: The component returned from the function is not a valid component')

      return componentConstructor({ componentAttrs, ...getComponentTagAndClasses(component) })

    default:
      throw new Error('createComponent: The argument must be a string or a function')
  }
}

export default new Proxy(createComponent, {
  apply: (target, __, args) => target(...args),
  get: (target, tag) => target(tag.toLocaleLowerCase())
})