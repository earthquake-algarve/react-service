import React from 'react'
import './SubMenuCompras.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import Gerenciamento from '../gerenciamento/Gerenciamento';
import SearchBar from '../../searchbar/SearchBar';
//import Review from '../review/Review';
//import HistoricoDeCompras from '../historico/HistoricoDeCompras';
import DashboardCard from '../../dashboardCard/DashboardCard';

export default function SubMenuCompras() {
  return (
		<Tabs
			defaultActiveKey='gerenciamento'
			className='mb-3 tab-servicos '
			/* tem a variant pills */ variant='tabs'
		>
			<Tab
				eventKey='gerenciamento'
				title='Gerenciamento'
				className='tab-gerenciamento'
			>
				<SearchBar />
{/* 				<Gerenciamento /> */}
				<DashboardCard
					tour='Praia de Jeri'
					preco='35'
					disponibilidade='Disponibilidade'
					dias='seg - sex'
					horarios='Data'
					horas='10/10/2022 18:00'
					showButton={true}
					buttonText='Editar'
				/>
			</Tab>
			<Tab
				eventKey='review'
				title='Review'
			>
				<SearchBar />
{/* 				<Review /> */}
				<DashboardCard
					tour='Praia de Jeri'
					preco='10/10/2022 10:30'
					showButton={true}
					buttonText='Review'
				/>
			</Tab>
			<Tab
				eventKey='historico'
				title='Histórico de Compras'
			>
				<SearchBar />
{/* 				<HistoricoDeCompras /> */}
				<DashboardCard
					tour='Praia de Jeri'
					preco='35'
					disponibilidade='Disponibilidade'
					dias='seg - sex'
					horarios='Data'
					horas='10/10/2022 18:00'
					showButton={true}
					buttonText='Editar'
				/>
				<DashboardCard
					tour='Praia de Jeri'
					preco='35'
					disponibilidade='Disponibilidade'
					dias='seg - sex'
					horarios='Data'
					horas='1/10/2022 18:00'
				/>
			</Tab>
		</Tabs>
  );
}
