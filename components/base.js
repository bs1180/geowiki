import React from "react";
import styled from "react-emotion";
import { space, flex, responsiveStyle, color } from "styled-system";

const direction = responsiveStyle("flexDirection", "direction");
const display = responsiveStyle({
  prop: "d",
  cssProperty: "display"
});
const flexBasis = responsiveStyle("flexBasis");
const height = responsiveStyle("height");

export default styled("div")`
  ${direction} ${display} ${color} ${flex} ${flexBasis} ${space};
`;
