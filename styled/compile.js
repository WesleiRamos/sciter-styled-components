import { isComponent, getComponentTagAndClasses } from './component-utils'

/**
 * @param {String[]} strings
 * @param {String[]} values
 * @param {Object}   props
 * @param {String}
 */
export default (strings, values, props) => strings.reduce((previous, current, i) => {
  let value = values[i]
  
  if (typeof value === 'function') {
    value = value(props)

    if (isComponent(value)) {
      value = getComponentTagAndClasses(value).classes
        .map(className => `.${className}`)
        .join('')
    }
  }
  
  return `${previous}${current}${value || ''}`
}, '')