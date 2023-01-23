import React from "react";
import "./SubMenuServicos.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SearchBar from "../../searchbar/SearchBar";
//import Ativos from "../ativos/Ativos";
import InsertRecord from "../../../../pages/insertRecord/InsertRecord";
//import Excluir from "../excluir/Excluir";
import DashboardCard from "../../dashboardCard/DashboardCard";
import { BinIcon, EyeIcon } from "../../../../Icons";


const SubMenuServicos = () => {
  return (
		<>
			<div className='wrap-submenu'>
				{/*             <ul className="submenu">
                <li><button>Ativos</button></li>
                <li><button>Adicionar</button></li>
                <li><button>Excluir</button></li>
            </ul> */}
				<Tabs
					defaultActiveKey='ativos'
					className='mb-3 tab-servicos '
					/* tem a variant pills */ variant='tabs'
				>
					<Tab
						eventKey='ativos'
						title='Ativos'
						className='tab-ativos'
					>
						<SearchBar />
{/* 						<Ativos /> */}
						<DashboardCard
							tour='Praia de Jeri'
							preco='35'
							disponibilidade='Disponibilidade'
							dias='seg - sex'
							horarios='Horários'
							horas='09:00 - 18:00'
							meetingPoint='Meeting Point'
							locationGoogle='https://goo.gl/maps/3rbDRBdKtGYfWD4F7'
							showIcons={true}
							eyeIcon={<EyeIcon />}
							binIcon={<BinIcon />}
							showButton={true}
							buttonText='Editar'
						/>
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
{/* 						<Excluir /> */}
						<DashboardCard
							tour='Praia de Jeri'
							preco='35'
							disponibilidade='Disponibilidade'
							dias='seg - sex'
							horarios='Horários'
							horas='09:00 - 18:00'
							meetingPoint='Meeting Point'
							locationGoogle='https://goo.gl/maps/3rbDRBdKtGYfWD4F7'
							binIcon={<BinIcon />}
							showButton={true}
							buttonText='Excluir'
						/>
					</Tab>
				</Tabs>
			</div>
		</>
  );
};

export default SubMenuServicos;