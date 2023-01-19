import React from "react";
import "./MeuPerfil.css";

const data = {
  Nome: "Tony Stark",
  Email: "ironman@mail.com",
  Password: "#Capitaoame****",
  Nacionalidade: "Estadunidense",
  Fornecedor: "Sim",
};

export default function MeuPerfil() {
  return (
    <>
      <div  className="dados-cadastrais">
        {Object.entries(data).map(([key, value]) => {
          return (
            <div key={key} className={`dados-${key}`}>
              <span>{key}</span>
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
