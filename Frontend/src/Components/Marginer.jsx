import React from "react";
import styled from "styled-components";

// Horizontal margin styled component
const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ $margin }) =>
    typeof $margin === "string" ? $margin : `${$margin}px`};
`;

// Vertical margin styled component
const VerticalMargin = styled.span`
  display: flex;
  height: ${({ $margin }) =>
    typeof $margin === "string" ? $margin : `${$margin}px`};
`;

// Main Marginer function component
function Marginer({ direction = "horizontal", margin }) {
  if (direction === "horizontal") {
    return <HorizontalMargin $margin={margin} />;
  }
  return <VerticalMargin $margin={margin} />;
}

export { Marginer };
