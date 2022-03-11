export const cache = new Set([])

/**
 * @type {HTMLStyleElement}
 */
export const styleSheetTag = (() => {
  if (document.querySelector('style#styled-components'))
    return document.querySelector('style#styled-components')

  const styleSheetTag = document.createElement('style')
  styleSheetTag.id = 'styled-components'
  document.head.appendChild(styleSheetTag)
  return styleSheetTag
})()

/**
 * 
 * @param {String} css 
 * @param {Boolean} before 
 */
export const inject = (css, before) => {
  const style = before 
    ? `${css} ${styleSheetTag.innerText}`
    : `${styleSheetTag.innerText} ${css}`
  
  styleSheetTag.innerText = style
}

/**
 * 
 */
export default (className, style) => {
  cache.add(className)
  inject(style, false)
  return className
}