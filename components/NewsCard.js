import React from 'react'
import { Box, Flex } from 'grid-emotion'
import styled from 'react-emotion'
import { withProps } from 'recompose'
import { format } from 'date-fns'

export const Card = withProps({
  p: 2,
  direction: 'column'
})(styled(Flex)`
background: white;
border: 1px solid #ced4da;
border-right: 2px solid #8B5D33;
border-radius: 4px;
 a {
  text-decoration: none;
  margin: 0; color:  #8B5D33; font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
}
`)

const Date = styled('time')`
  font-size: 0.8rem;
  color: gray;
`

export default ({ headline, body, date, link }) => (<Card mb={3}>
  <a href={link}>{ headline }</a>
  <p>{ body }</p>
  <Flex>
    <Date>{ format(date, 'Do MMM YYYY') }</Date>
    <Box is="span" flex="1 1 0" />
    <a href={link}>Read more »</a>
  </Flex>
</Card>)
