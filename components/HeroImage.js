import React from "react";
import styled from "react-emotion";
import { Flex } from 'grid-emotion'
import { withProps } from 'recompose'

const HeroImage = (styled(Flex)`
  background-image: url("/static/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
`)

const ConstrainedWidth = withProps({
  align: 'flex-end',
  justify: 'flex-end'
})(styled(Flex)`
width: 100%;
max-width: 1200px;
margin: 0 auto;
position: relative;
`);

export default ({ children }) => (<HeroImage>
  <ConstrainedWidth>
    { children }
  </ConstrainedWidth>
</HeroImage>)
