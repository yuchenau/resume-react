import React from "react";
import styled from "styled-components";

export default function Portrait(props) {
  const Title = styled.p`
    font-size: 8.5px;
    text-align: center;
    margin: 0;
  `;

  return (
    <div>
      <Title>Yuchen Ye</Title>
      <Title>Front-end Developer, UI Designer</Title>
    </div>
  );
}
