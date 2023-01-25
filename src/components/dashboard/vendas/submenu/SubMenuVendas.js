import React from 'react'
import './SubMenuVendas.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SearchBar from '../../searchbar/SearchBar';
//import HistoricoDeVendas from '../historico/HistoricoDeVendas';
import DashboardCard from '../../dashboardCard/DashboardCard';
import { EyeIcon } from '../../../../Icons';
import TotalVendas from '../totalVendas/TotalVendas';

export default function SubMenuVendas() {
  return (
		<div className='wrap-submenu'>
			<Tabs
				defaultActiveKey='historico'
				className='mb-3 main-tabs'
				/* tem a variant pills */ variant='tabs'
			>
				<Tab
					eventKey='historico'
					title='Histórico de Vendas'
				>
					<SearchBar />
					{/* 				<HistoricoDeVendas /> */}
					<TotalVendas totalVendas='219' />
					<DashboardCard
						tour='Praia de Jeri'
						preco='35'
						localizacao='Localização'
						city='Jericoacara'
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
		</div>
  );
}
