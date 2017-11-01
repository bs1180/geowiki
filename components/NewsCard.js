import React from 'react'
import Base from './base'
import styled from 'react-emotion'

const Card = styled(Base)`
border: 1px solid #ced4da;
border-right: 2px solid #8B5D33;
border-radius: 4px;
`

Card.defaultProps = {
  bg: 'white',
  mb: 2,
  p: 2
}

export default ({ headline, body, date, link }) => (<Card>
  <a href={link} css={`margin: 0; color:  #8B5D33; font-weight: bold;`}>{ headline }</a>
  <p>{ body }</p>
  <small>{ date }</small>
  <a href={link} css={`margin: 0; color:  #8B5D33; font-weight: bold;`}>Read more »</a>
</Card>)
