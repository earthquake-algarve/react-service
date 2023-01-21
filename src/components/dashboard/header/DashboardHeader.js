import React/* , {useState} */ from "react";
import "./DashboardHeader.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SubMenuServicos from "../servicos/subMenu/SubMenuServicos";
import Compras from '../compras/Compras'
import Vendas from "../vendas/Vendas";
import Favoritos from '../favoritos/Favoritos'
import MeuPerfil from "../meuPerfil/MeuPerfil";

export default function DashboardHeader() {

  return (
		/*     <ul className="options">
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
        <button>Meu perfil</button>
      </li>
    </ul> */

		<Tabs
			defaultActiveKey='servicos'
			className='mb-3 tab-servicos '
			/* tem a variant pills */ variant='tabs'
		>
			<Tab
				eventKey='servicos'
				title='Serviços'
				className='tab-ativos'
			>
				<SubMenuServicos />

			</Tab>
			<Tab
				eventKey='compras'
				title='Compras'
			>
				<Compras />
			</Tab>
			<Tab
				eventKey='vendas'
				title='Vendas'
			>
				<Vendas />
			</Tab>
			<Tab
				eventKey='favoritos'
				title='Favoritos'
			>
				<Favoritos />
			</Tab>
			<Tab
				eventKey='meuperfil'
				title='Meu Perfil'
			>
				<MeuPerfil />
			</Tab>
		</Tabs>
  );
}
