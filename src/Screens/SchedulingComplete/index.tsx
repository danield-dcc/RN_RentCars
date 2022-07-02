import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
  WrapperLogo,
} from "./styles";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { useNavigation } from "@react-navigation/native";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<any>();

  function handleConfirm() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      {/* Status bar mostar a barrra de status superior no celular */}
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <WrapperLogo>
        <LogoSvg width={width} />
      </WrapperLogo>

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado</Title>
        <Message>
          Agora você só precisa ir{"\n"}
          até a concessionária da RENTX{"\n"}
          pegar o seu automóvel.
        </Message>

        {/* <ConfirmButton /> */}
        <Footer>
          <ConfirmButton title="OK" onPress={handleConfirm} />
        </Footer>
      </Content>
    </Container>
  );
}
