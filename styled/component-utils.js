export const isComponent = component => {
  if (typeof component !== 'object')
    return false

  return Reactor.isNode(component) || (component.hasOwnProperty('type') && component.hasOwnProperty('props'))
}

/**
* @param {Object|Array} component
* @returns {[ String, String[] ]}
*/
export const getComponentTagAndClasses = component => {
  if (!isComponent(component))
    return { tag: 'div', classes: [] }

  if (Reactor.isNode(component))
    return { tag: component[0], classes: component[1].class.split(' ') }

  return { tag: component.type, classes: component.props.class.split(' ') }
}