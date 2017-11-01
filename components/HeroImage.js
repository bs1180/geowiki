import React from "react";
import styled from "react-emotion";
import { Flex } from 'grid-emotion'
import { withProps } from 'recompose'

const HeroImage = withProps({
  align: 'flex-end',
  justify: 'flex-end'
})(styled(Flex)`
  background-image: url("/static/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
`)

export default HeroImage;
