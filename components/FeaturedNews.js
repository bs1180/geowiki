// Call to action promotes a single activity
import React from "react";
import styled, { keyframes } from "react-emotion";
import { space } from "styled-system";
import { withProps } from "recompose";
import { Box } from "grid-emotion";
// const bounce = keyframes`
// from {
//   transform: scale(1.01);
// }
// to {
//   transform: scale(0.99);
// }
// `

// &:hover {
//   animation: ${bounce} 0.2s infinite ease-in-out alternate;
// }

const LatestNews = withProps({ align: "flex-start " })(styled(Box)`
  background: #fff;
  align-items: flex-start;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  border-right: 2px solid #8b5d33;
  > h2 {
    margin-left: 1rem;
    margin-top: 0;
  }

`);

//  border: 1px solid #ced4da;

const NewsImage = styled("img")`
  border-radius: 999px;
  height: 40px;
  width: 40px;
`;

export default ({ label, description }) => (
  <LatestNews m={3} p={1}>
    <NewsImage src="/static/cover.jpg" />
    <h2>New book launched</h2>
    <p>IIASA s</p>
  </LatestNews>
);
