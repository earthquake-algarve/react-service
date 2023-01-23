import React from 'react';
import SearchBar from '../searchbar/SearchBar';
import './Favoritos.css';
import { EyeIcon, BinIcon } from '../../../Icons';
import DashboardCard from '../dashboardCard/DashboardCard';

export default function Favoritos() {
	return (
		<>
			<SearchBar />

			<DashboardCard
				tour='Praia de Jeri'
				preco='35'
				localizacao="Localização"
				city="Jericoacara"
				showIcons={true}
				eyeIcon={<EyeIcon />}
				binIcon={<BinIcon />}
				showButton={true}
				buttonText='Comprar'
			/>
		</>
	);
}
