import React from "react";
import styled from "react-emotion";
import { Box } from "grid-emotion";
import { withProps } from "recompose";

const Card = withProps({
  p: 2,
  mb: 2,
  align: "flex-end",
  direction: "column"
})(styled(Box)`
  border: 1px solid #ced4da;
  border-right: 2px solid #0c3182;
  background-color: #f5f8fa;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    transform: translateX(3px);
    transition: transform 0.3s;
  }
  > h4 {
    margin: 0;
    color: #0c3182;
  }
  > p {
    margin-bottom: 0;
  }
`);

export default ({ name, description }) => (
  <Card>
    <h4>{name}</h4>
    <p>{description}</p>
  </Card>
);
