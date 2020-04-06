import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }`;
