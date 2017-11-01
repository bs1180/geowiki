import React from "react";
import styled from "react-emotion";
import * as Icons from "./Icons";
import { Flex, Box } from 'grid-emotion'
import { withProps } from 'recompose'

const Sidebar = withProps({
  width: [150, 1],
  direction: 'row',
  justify: 'center',
  m: 'auto'
})(styled(Flex)`
  background-color: #8B5D33;
  position: relative;
  z-index:20
  &:after {
    background: inherit;
    bottom: 0;
    content: "";
    display: block;
    height: 50px;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-10deg);
    transform-origin: 100%;
    z-index: -1;
  }
`)

export default () => (
  <Sidebar>
    <Icons.Twitter mx={1} />
    <Icons.Facebook mx={1} />
  </Sidebar>
);
