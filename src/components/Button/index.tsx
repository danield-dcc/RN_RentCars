import React from "react";

import { Container, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
  //   onPress: () => void;
}

export function Button({ title, color, ...props }: Props) {
  return (
    <Container color={color} {...props}>
      <Title>{title}</Title>
    </Container>
  );
}
