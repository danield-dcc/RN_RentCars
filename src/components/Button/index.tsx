import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  //   onPress: () => void;
}

export function Button({ title, color, ...props }: Props) {
  const theme = useTheme();

  return (
    <Container color={color ? color : theme.colors.main} {...props}>
      <Title>{title}</Title>
    </Container>
  );
}
