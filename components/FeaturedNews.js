// Call to action promotes a single activity
import React from "react";
import styled from "react-emotion";
import { space } from 'styled-system'

const LatestNews = styled("div")`
  background: #fff;
  border-left: 2px solid #8b5d33;
  display: flex;
  ${space};
  align-items: flex-start;
  > h2 {
    margin-left: 1rem;
    margin-top: 0;
  }
`;

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
