import compile from './compile'
import { getCSS } from './css'
import { inject } from './updater'

/**
 * @param {String} strings
 */
export default (strings, ...values) => () => {
  inject(getCSS(compile(strings, values, {})), true)
  return []
}