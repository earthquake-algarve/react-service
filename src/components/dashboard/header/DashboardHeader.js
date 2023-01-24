import React/* , {useState} */ from "react";
import "./DashboardHeader.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SubMenuServicos from "../servicos/subMenu/SubMenuServicos";
import SubMenuVendas from "../vendas/submenu/SubMenuVendas";
import Favoritos from '../favoritos/Favoritos'
import MeuPerfil from "../meuPerfil/MeuPerfil";
import SubMenuCompras from "../compras/submenu/SubMenuCompras";

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
			className='mb-3 main-tabs'
			/* tem a variant pills */ variant='pills'
		>
			<Tab
				eventKey='servicos'
				title='Serviços'
			>
				<SubMenuServicos />

			</Tab>
			<Tab
				eventKey='compras'
				title='Compras'
			>
				<SubMenuCompras />
			</Tab>
			<Tab
				eventKey='vendas'
				title='Vendas'
			>
				<SubMenuVendas />
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
