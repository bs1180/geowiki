import React from 'react'
import Base from './base'
import styled from 'react-emotion'



const Card = styled(Base)`
border: 1px solid #ced4da;
border-right: 2px solid #8B5D33;
transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
border-radius: 3px;
cursor: pointer;
position: relative;
overflow: hidden;
background-image: url(static/fotoquest-cropped.jpg);
background-position: left top;
background-repeat: no-repeat;
background-size: contain;
position: relative;
&:hover {
  transform: translateX(3px);
  transition: transform 0.3s;
}
> h4 {
  margin: 0;

}
> p {
  margin: 0;
}
`

Card.defaultProps = {
  p: 2,
  pl: 100,
  mb: 2,
  bg: '#fff'
}

export default ({ name, description }) => (
  <Card>
    <h4>{ name }</h4>
    <p>{ description }</p>
  </Card>
)