import { css } from 'styled-components'
import defaultBreakpoints from './defaultBreakpoints'

const createMedia = ({
  breakpoints = defaultBreakpoints
}) => {
  // use px in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/

  const minCSS = (px, ...args) => css`
  @media (min-width: ${px}px) {
    ${css(...args)}
  }
`
  const maxCss = (px, ...args) => css`
  @media (max-width: ${px}px) {
    ${css(...args)}
  }
`

  const betweenCss = (min, max, ...args) => css`
  @media (min-width: ${min}px) and (max-width: ${max}px) {
    ${css(...args)}
  }
`

  const from = function (fromPx) {
    const fromFn = (...args) => minCSS(fromPx, ...args)
    fromFn.to = (toPx) => (...css) => betweenCss(fromPx, toPx, ...css)
    return fromFn
  }
  const to = function (px) {
    return (...args) => maxCss(px, ...args)
  }

  Object.keys(breakpoints).forEach((key) => {
    const { min, max } = breakpoints[key]

    const fromFn = (...args) => minCSS(min, ...args)
    fromFn.to = {}
    Object.keys(breakpoints).forEach((toKey) => {
      fromFn.to[toKey] = (...css) => betweenCss(min, breakpoints[toKey].max, ...css)
    })
    from[key] = fromFn
    to[key] = (...args) => maxCss(max, ...args)
  })

  // iterate through the sizes and create a media template
  const media = ['above', 'below', 'only'].reduce((media, key) => {
    media[key] = Object.keys(breakpoints).reduce((accumulator, label) => {
      const { min, max } = breakpoints[label]
      switch (key) {
        case 'above':
          accumulator[label] = (...args) => minCSS(max + 1, ...args)
          return accumulator

        case 'only':
          accumulator[label] = (...args) => betweenCss(min, max, ...args)
          return accumulator

        case 'below':
          accumulator[label] = (...args) => maxCss(min - 1, ...args)
          return accumulator

        default:
          return accumulator
      }
    }, {})
    return media
  }, {})

  media.from = from
  media.to = to
  return media
}

export default createMedia
