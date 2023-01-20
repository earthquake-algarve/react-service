import React from "react";
import "./SubMenuServicos.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SearchBar from "../../searchbar/SearchBar";
import Ativos from "../ativos/Ativos";
import InsertRecord from "../../../../pages/insertRecord/InsertRecord";
import Excluir from "../excluir/Excluir";


const SubMenuServicos = () => {
  return (
		<>
			<div className='wrap-submenu'>
				{/*             <ul className="submenu">
                <li><button>Ativos</button></li>
                <li><button>Adicionar</button></li>
                <li><button>Excluir</button></li>
            </ul> */}
				<Tabs defaultActiveKey='ativos' className="mb-3 tab-servicos" /* tem a variante tabs(default) */variant="pills">
					<Tab
						eventKey='ativos'
						title='Ativos'
					>
						<SearchBar />
						<Ativos />
					</Tab>
					<Tab
						eventKey='adicionar'
						title='Adicionar'
					>
						<InsertRecord />
					</Tab>
					<Tab
						eventKey='excluir'
						title='Excluir'
					>
						<SearchBar />
            <Excluir />
					</Tab>
				</Tabs>
			</div>
		</>
  );
};

export default SubMenuServicos;