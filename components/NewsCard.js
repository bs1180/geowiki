import React from 'react'
import Base from './base'
import styled from 'react-emotion'

const Card = styled(Base)`
`

Card.defaultProps = {
  bg: 'white'
}

export default ({ headline, body, date, link }) => (<Card>
  <h4>{ headline }</h4>
  <p>{ body }</p>
  <small>{ date }</small>
  <a href={link}>Read more</a>
</Card>)
