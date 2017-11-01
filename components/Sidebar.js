import React from "react";
import styled from "react-emotion";
import * as Icons from "./Icons";
import { Flex, Box } from 'grid-emotion'

const Sidebar = styled(Box)`
  flex-basis: 150px;
  margin-left: 20px;
  width: 150px;
  background-color: #91785d;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    position: absolute;
    content: " ";
    display: block;
    background: inherit;
    content: "";
    display: block;
    height: 10%;
    width: 150px;
    left: 20px;
    right: 0;
    transform: skewY(-10deg);
    transform-origin: -100%;
    z-index: -1;
  }
`;

export default () => (
  <Sidebar>
    <Icons.Twitter />
  </Sidebar>
);
