import React from 'react'
import Base from './base'
import styled from 'react-emotion'
import { withProps } from 'recompose'
import { Flex } from 'grid-emotion'

const Footer = withProps({ direction: 'row', width: 1, p: 2, align: 'center', justify: 'center', is: 'footer' })(styled(Flex)`

`)


export default () => <Footer>
Contact Us · Disclaimer 
</Footer>