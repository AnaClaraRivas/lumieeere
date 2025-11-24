import React from "react";
import Header from "./Header";
import HeaderADM from "../componentsAdm/HeaderADM";
import { pegarSessao } from "../auth";

export default function HeaderAuto() {
  const usuario = pegarSessao();

  if (usuario?.tipo_usuario === "Administrador") {
    return <HeaderADM />;
  }

  return <Header />;
}
