import { uuid } from '@sciter'
import generateComponentId from './hash'
import { compile, serialize, stringify } from './stylis/stylis'

/**
 * 
 * @param {String} style 
 * @returns 
 */
export const getCSS = css =>
  serialize(compile(css), stringify)


/**
 * @param {String} style
 */
export default (css, classes = []) => {
  const temp  = `temp-${uuid()}`
  const style = getCSS(`.${temp}{${css}}`)
  const name  = generateComponentId(style)
  return [
    [ ...classes, name ].join(' '),
    style.replaceAll(temp, name)
  ]
}