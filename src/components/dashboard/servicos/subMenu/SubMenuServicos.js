import "./SubMenuServicos.css";

import React from "react";

const SubMenuServicos = () => {
  return (
    <>
        <div className="wrap-submenu">
            <ul className="submenu">
                <li><button>Ativos</button></li>
                <li><button>Adicionar</button></li>
                <li><button>Excluir</button></li>
            </ul>

        </div>
    </>
  );
};

export default SubMenuServicos;