import React from "react";
import styled from "react-emotion";
import { responsiveStyle } from "styled-system";

const height = responsiveStyle("height");

const HeroImage = styled("div")`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background-image: url("/static/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ${height};
`;

export default HeroImage;
