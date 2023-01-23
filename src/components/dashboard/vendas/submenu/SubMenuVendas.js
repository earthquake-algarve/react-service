import React from 'react'
import './SubMenuVendas.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SearchBar from '../../searchbar/SearchBar';
//import HistoricoDeVendas from '../historico/HistoricoDeVendas';
import DashboardCard from '../../dashboardCard/DashboardCard';
import { EyeIcon } from '../../../../Icons';

export default function SubMenuVendas() {
  return (
		<Tabs
			defaultActiveKey='historico'
			className='mb-3 tab-vendas '
			/* tem a variant pills */ variant='tabs'
		>
			<Tab
				eventKey='historico'
				title='Histórico de Vendas'
			>
				<SearchBar />
{/* 				<HistoricoDeVendas /> */}
				<DashboardCard
					tour='Praia de Jeri'
					preco='35'
					disponibilidade='Disponibilidade'
					dias='seg - sex'
					horarios='Data'
					horas='10/10/2022 18:00'
					showIcons={true}
					eyeIcon={<EyeIcon />}
				/>
			</Tab>
			<Tab
				eventKey='financeiro'
				title='Financeiro'
			>
				{/* <SearchBar /> */}
				{/* <Review /> */}
			</Tab>
		</Tabs>
  );
}
