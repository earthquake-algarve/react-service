import React from 'react'
import './SubMenuVendas.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SearchBar from '../../searchbar/SearchBar';
import HistoricoDeVendas from '../historico/HistoricoDeVendas';

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
				<HistoricoDeVendas />
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
