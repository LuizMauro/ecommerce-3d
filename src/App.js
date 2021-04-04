import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./@styles/Global";
import Header from "./components/header";
import PageDetails from "./pages/ProductDetails";
import Image from "./assets/svg-1.svg";

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Exclusive Access",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",
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
