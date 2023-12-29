import React from "react";

import { Title } from "./styled";
import { Container } from "../../styles/GlobalStyles";

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Página de Login
        <small>Apenas um small</small>
      </Title>
      <p>Qualquer coisa aqui</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
