import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./@styles/Global";
import Header from "./components/header";
import PageDetails from "./pages/ProductDetails";
import Image from "./assets/svg-1.svg";

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Luiz Rocha",
  headline: "Tênis Addydas Ultimashow",
  description:
    "Saia para correr ou caminhar com o Tênis Addydas Ultimashow! É confeccionado em material que proporciona circulação de ar e frescor para os pés durante duas atividades.",
  buttonLabel: "Get Started",
  imgStart: "",
  img: Image,
  alt: "Credit Card",
};

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <PageDetails {...homeObjOne} />
    </Router>
  );
}

export default App;
