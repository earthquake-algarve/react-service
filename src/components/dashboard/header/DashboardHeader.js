import React/* , {useState} */ from "react";
import "./DashboardHeader.css";
//import MeuPerfil from "../meuPerfil/MeuPerfil";

export default function DashboardHeader() {

/*     const [meuPerfilOpen, setMeuPerfilOpen] = useState(false);

    const handleClick = () => {
      setMeuPerfilOpen(!meuPerfilOpen);
    }; */


  return (
    <ul className="options">
      <li>
        <button>Serviços</button>
      </li>
      <li>
        <button>Compras</button>
      </li>
      <li>
        <button>Vendas</button>
      </li>
      <li>
        <button>Favoritos</button>
      </li>
      <li>
        <button  /* onClick={handleClick} */>Meu perfil</button>
        {/* {meuPerfilOpen ? <MeuPerfil /> : ""} */}
      </li>
    </ul>
  );
}
