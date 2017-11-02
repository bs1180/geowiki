import React from "react";
import styled from "react-emotion";
import * as Icons from "./Icons";
import { Flex, Box } from 'grid-emotion'
import { withProps } from 'recompose'

const Sidebar = withProps({
  width: [250, 1],
  direction: 'row',
  justify: 'center',
  mx: 'auto',
  mt: [0, "-30"],
  py: [1, 3]
})(styled(Flex)`
  background-color: #8B5D33;
  position: relative;
  z-index:20;
  transform: skewY(-10deg);
  > div {
    transform: skewY(10deg);
  }
`)

export default () => (
  <Sidebar>
    <div>
      <Icons.Twitter mx={1} />
      <Icons.Facebook mx={1} />
    </div>
  </Sidebar>
);
