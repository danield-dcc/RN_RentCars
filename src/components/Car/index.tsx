import React from "react";
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";
import GasolineSvg from "../../assets/gasoline.svg";
import { RectButtonProps } from "react-native-gesture-handler";
import { CarDTO } from "../../dtos/CarDTO";

// interface CarData {
//   brand: string;
//   name: string;
//   rent: {
//     period: string;
//     price: number;
//   };
//   thumbnail: string;
// }

//extends para pegar as propriedade de Botão
interface Props extends RectButtonProps {
  data: CarDTO;
}

//essas propriedades são passadas através do ...props
export function Car({ data, ...props }: Props) {
  return (
    <Container {...props}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        resizeMode="contain"
        source={{
          uri: data.thumbnail,
        }}
      ></CarImage>
    </Container>
  );
}
