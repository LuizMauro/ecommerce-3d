import React, { useState } from "react";

import { Container, Button } from "../../@styles/Global";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImagePreview,
  CardPrice,
} from "./styles";

import Product3D from "../../components/Product3D";
import TenisAzulClaro from "../../assets/tenis-azul-claro-preview.jpeg";
import TenisPreto from "../../assets/tenis-preto-preview.jpeg";
import TenisRosa from "../../assets/tenis-rosa-preview.jpeg";
import tenisVerdeLimao from "../../assets/tenis-verde-limao-preview.jpeg";
import TenisVerdePiscina from "../../assets/tenis-verde-piscina-preview.jpeg";

const tenisColors = [
  {
    colors: {
      laces: { color: "#ffffff" },
      mesh: { color: "#ffffff" },
      caps: { color: "#ffffff" },
      inner: { color: "#ffffff" },
      sole: { color: "#000" },
      stripes: { color: "#000" },
      band: { color: "#000" },
      patch: { color: "#000" },
    },
  },

  {
    colors: {
      laces: { color: "#ffffff" },
      mesh: { color: "#ffffff" },
      caps: { color: "#ffffff" },
      inner: { color: "#ffffff" },
      sole: { color: "#52c1d7" },
      stripes: { color: "#52c1d7" },
      band: { color: "#52c1d7" },
      patch: { color: "#52c1d7" },
    },
  },
  {
    colors: {
      laces: { color: "#ffffff" },
      mesh: { color: "#ffffff" },
      caps: { color: "#ffffff" },
      inner: { color: "#ffffff" },
      sole: { color: "#e34c88" },
      stripes: { color: "#e34c88" },
      band: { color: "#e34c88" },
      patch: { color: "#e34c88" },
    },
  },
  {
    colors: {
      laces: { color: "#ffffff" },
      mesh: { color: "#ffffff" },
      caps: { color: "#ffffff" },
      inner: { color: "#ffffff" },
      sole: { color: "#62ff00" },
      stripes: { color: "#62ff00" },
      band: { color: "#62ff00" },
      patch: { color: "#62ff00" },
    },
  },

  {
    colors: {
      laces: { color: "#ffffff" },
      mesh: { color: "#ffffff" },
      caps: { color: "#ffffff" },
      inner: { color: "#ffffff" },
      sole: { color: "#00decb" },
      stripes: { color: "#00decb" },
      band: { color: "#00decb" },
      patch: { color: "#00decb" },
    },
  },
];

function Details({
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
}) {
  const [tenisSelected, setTenisSelected] = useState(0);

  const changeTenis = (index) => {
    setTenisSelected(index);
  };

  const checkActive = (index) => {
    return index === tenisSelected;
  };

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow>
            <InfoColumn style={{ flexWrap: "wrap" }}>
              <Product3D colors={tenisColors[tenisSelected]} />

              <InfoRow>
                <ImagePreview
                  onClick={() => changeTenis(0)}
                  active={checkActive(0)}
                  src={TenisPreto}
                />
                <ImagePreview
                  onClick={() => changeTenis(1)}
                  active={checkActive(1)}
                  src={TenisAzulClaro}
                />
                <ImagePreview
                  onClick={() => changeTenis(2)}
                  active={checkActive(2)}
                  src={TenisRosa}
                />
                <ImagePreview
                  onClick={() => changeTenis(3)}
                  active={checkActive(3)}
                  src={tenisVerdeLimao}
                />
                <ImagePreview
                  onClick={() => changeTenis(4)}
                  active={checkActive(4)}
                  src={TenisVerdePiscina}
                />
              </InfoRow>
            </InfoColumn>

            <InfoColumn style={{ padding: 20 }}>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>

                <TopLine lightTopLine={lightTopLine}>
                  <strong style={{ color: "#6d7179" }}>By</strong> {topLine}
                </TopLine>

                <InfoRow style={{ padding: 20 }}>
                  <CardPrice>
                    <TopLine style={{ margin: 0 }}>R$ 199,00</TopLine>
                  </CardPrice>

                  <Button style={{ margin: 10, background: "#36b476" }}>
                    Checkout
                  </Button>
                </InfoRow>

                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Details;
