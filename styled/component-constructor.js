import css from './css'
import compile from './compile'
import updater, { cache } from './updater'

const componentConstructor = ({ tag = 'div', classes = [], componentAttrs = {} }) => {

  const getAttrs = props => {
    const attrs = typeof componentAttrs === 'function'
      ? componentAttrs(props)
      : {}

    if (typeof componentAttrs === 'object') {
      for (const key in componentAttrs) {
        attrs[key] = typeof componentAttrs[key] === 'function'
          ? componentAttrs[key](props)
          : componentAttrs[key]
      }
    }

    return { ...props, ...attrs }
  }

  const renderComponent = processCSS => (...args) => {
    const props = args[0] || {}
    const children = props.children || args[1] || []
    const ComponentTag = props.as || tag
    delete props.children
    return (
      <ComponentTag class={processCSS(props)} {...getAttrs(props)}>
        {children}
      </ComponentTag>
    )
  }

  return (strings, ...values) => {
    if (strings.length === 1 && values.length === 0) {
      const [ className, style ] = css(strings[0], classes)
      return renderComponent(() =>
        cache.has(className)
          ? className
          : updater(className, style)
      )
    }

    return renderComponent((props) => {
      const [ className, style ] = css(compile(strings, values, props))
      return cache.has(className)
        ? className
        : updater(className, style)
    })
  }
}

export default componentConstructor