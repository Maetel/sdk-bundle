import React from "react";
import styled from "@emotion/styled";

function Hi() {
  return <Container>Hi from Nested component</Container>;
}

const Container = styled.div`
  background-color: #ccc;
  color: #333;
`;

export default Hi;
