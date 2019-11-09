import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import media from './index'

storiesOf('media', module)
  .addDecorator(centered)
  .add('only example usage (Red on MD)', () => {
    const Example = styled.div`
      width: 100px;
      height: 100px;
      background-color: #009900;
      ${media.only.md`
          background-color: red;
      `}
    `
    return <Example />
  })
  .add('above example usage (Red above MD)', () => {
    const Example = styled.div`
      width: 100px;
      height: 100px;
      background-color: #009900;
      ${media.above.md`
          background-color: red;
      `}
    `
    return <Example />
  })
  .add('below example usage (Red below MD)', () => {
    const Example = styled.div`
      width: 100px;
      height: 100px;
      background-color: #009900;
      ${media.below.md`
          background-color: red;
      `}
    `
    return <Example />
  })
  .add('from number of px (Red from 600)', () => {
    const Example = styled.div`
      width: 100px;
      height: 100px;
      background-color: #009900;
      ${media.from(600)`
          background-color: red;
      `}
    `
    return <Example />
  })
  .add('Red from MD (Red from MD upwards)', () => {
    const Example = styled.div`
      width: 100px;
      height: 100px;
      background-color: #009900;
      ${media.from.md`
          background-color: red;
      `}
    `
    return <Example />
  })
  .add('to number of px (Red until 600)', () => {
    const Example = styled.div`
      width: 100px;
      height: 100px;
      background-color: #009900;
      ${media.to(600)`
          background-color: red;
      `}
    `
    return <Example />
  })
  .add('to MD (Red until and including MD)', () => {
    const Example = styled.div`
      width: 100px;
      height: 100px;
      background-color: #009900;
      ${media.to.md`
          background-color: red;
      `}
    `
    return <Example />
  })
  .add('between (Red between SM and MD inclusive)', () => {
    const Example = styled.div`
      width: 100px;
      height: 100px;
      background-color: #009900;
      ${media.from.sm.to.md`
          background-color: red;
      `}
    `
    return <Example />
  })
  .add('between (Red between 500 and 800 px)', () => {
    const Example = styled.div`
      width: 100px;
      height: 100px;
      background-color: #009900;
      ${media.from(500).to(800)`
          background-color: red;
      `}
    `
    return <Example />
  })
