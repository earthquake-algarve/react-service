import React from "react";
import "./DashboardHeader.css";

export default function DashboardHeader() {
  return (
    
    <ul className="options">
      <li><a href="/servicos">Serviços</a></li>
      <li><a href="/compras">Compras</a></li>
      <li><a href="/vendas">Vendas</a></li>
      <li><a href="/favoritos">Favoritos</a></li>
      <li><a href="/meuPerfil">Meu perfil</a></li>
    </ul>
  );
}
