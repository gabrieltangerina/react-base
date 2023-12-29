import styled, { createGlobalStyle } from "styled-components";
import { primaryColorDark, primaryColor, detailsColor } from "../config/colors";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background-color: ${primaryColorDark};
  }

  html, body, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background-color: ${detailsColor};
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background: ${primaryColor};
  margin: 30px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
