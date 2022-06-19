import React from "react";

import { Container, Title } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  title: string;
}

export function ConfirmButton({ title, ...props }: Props) {
  return (
    <Container {...props}>
      <Title>{title}</Title>
    </Container>
  );
}
