import React from 'react'
import Editor from 'blocks-ui'
import {Button} from 'react-native-web'
import * as DEFAULT_BLOCKS from '@blocks/react'
import { ControlType, applyPropertyControls } from 'property-controls'

// create custom React Native button component
const ReactButton = ({title, ...props}) => <Button title={title} {...props}/>

// add props we want to allow user to customise
applyPropertyControls(ReactButton, {
  title: {
    title: 'Title',
    type: ControlType.String,
    required: true
  },
  color: {
    type: ControlType.Enum,
    title: 'Color',
    options: ['red', 'green', 'blue', 'purple'],
    optionTitles: ['Red', 'Green', 'Blue', 'Purple']
  }

})

// this is needed for the "preview" in the right-hand Components bar
ReactButton.usage =`
  <ReactButton title='Hello' />
`

// extend blocks to include new component
const newBlocks = {...DEFAULT_BLOCKS, ReactButton}

// The default blocks shown
const JSX = `
import React from 'react'
import { HeaderBasic } from '@blocks/react'

export default () => (
  <Blocks.Root>
    <ReactButton title='Press Me'/>
    <HeaderBasic>
      <HeaderBasic.Logo to="/">Hello</HeaderBasic.Logo>
    </HeaderBasic>
  </Blocks.Root>
)
`

export default () => <Editor src={JSX} blocks={newBlocks}/>