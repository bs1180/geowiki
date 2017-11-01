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

export default ({ headline, body, link }) => (
  <FeaturedCard>
    <a href={link}>{ headline }</a>
    <p>{ body }</p>
    <a href={link} css={`text-align: right`}>Read more »</a>
  </FeaturedCard>
);
