import styled from "styled-components";
import colors from "../../@styles/colors";

export const Container = styled.div`
  display: flex;
  border: 1.5px solid ${colors.borderColor};
  border-radius: 10px;
  width: 200px;
  height: 40px;
  padding: 2px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.input`
  width: 150px;
  height: 100%;
  border: none;
`;
