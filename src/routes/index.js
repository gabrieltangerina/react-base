import React from "react";
import { Switch } from "react-router-dom";
import { toast } from "react-toastify";

import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import ErrorPage from "../pages/Erro";

export default function Routes() {
  toast.success("Concluido com sucesso");
  toast.error("Email não cadastrado");

  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={ErrorPage} />
    </Switch>
  );
}
