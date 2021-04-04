import React from "react";
import { FaSearch } from "react-icons/fa";

import { Container, Input } from "./styles";
import colors from "../../@styles/colors";

function InputSearch() {
  return (
    <Container>
      <FaSearch color={colors.fontColorDefault} />
      <Input placeholder="Search" />
    </Container>
  );
}

export default InputSearch;
