import React from 'react'
import './SubMenuCompras.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Gerenciamento from '../gerenciamento/Gerenciamento';
import SearchBar from '../../searchbar/SearchBar';
import Review from '../review/Review';
import HistoricoDeCompras from '../historico/HistoricoDeCompras';

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
				<Gerenciamento />
			</Tab>
			<Tab
				eventKey='review'
				title='Review'
			>
				<SearchBar />
				<Review />
			</Tab>
			<Tab
				eventKey='historico'
				title='Histórico de Compras'
			>
				<SearchBar />
				<HistoricoDeCompras />
			</Tab>
		</Tabs>
  );
}
