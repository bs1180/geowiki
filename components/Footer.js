import React from "react";
import styled from "react-emotion";
import { withProps } from "recompose";
import { Flex } from "grid-emotion";

const Footer = withProps({
  direction: "row",
  width: 1,
  p: 2,
  align: "center",
  justify: "center",
  is: "footer"
})(styled(Flex)`
  > a {
    margin-left: 5px;
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`);

export default () => (
  <Footer>
    Contact Us · Disclaimer · <a href="https://github.com/bs1180/geowiki">Source code</a>
  </Footer>
);
