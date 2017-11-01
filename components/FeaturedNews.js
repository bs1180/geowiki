// Call to action promotes a single activity
import React from "react";
import styled, { keyframes } from "react-emotion";
import { space } from "styled-system";
import { withProps } from "recompose";
import { Box } from "grid-emotion";
import { Card } from './NewsCard'

const FeaturedCard = withProps({ m: 3, w: 350 })(styled(Card)`
  background-color: #DFD2C7;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  border: none;
  border-right: 2px solid #8B5D33;
`)
// f5f2f0
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

// const LatestNews = withProps({ align: "flex-start", p: 1, m: 3, w: '300' })(styled(Box)`
//   border-radius: 4px;
//   background-color: #F5F2F0;
//   background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
//   border-left: 2px solid #8b5d33;
//   > h3 {
//     margin: 0;
//   }
// `);

export default ({ headline, body, link }) => (
  <FeaturedCard>
    <a href={link}>{ headline }</a>
    <p>{ body }</p>
    <a href={link} css={`text-align: right`}>Read more »</a>
  </FeaturedCard>
);
