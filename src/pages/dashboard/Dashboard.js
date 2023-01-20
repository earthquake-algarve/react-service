import './Dashboard.css'
import React from 'react'
import DashboardHeader from '../../components/dashboard//header/DashboardHeader'
import SubMenuServicos from '../../components/dashboard/servicos/subMenu/SubMenuServicos'
/* import SearchBar from '../../components/dashboard/searchbar/SearchBar'
import Ativos from '../../components/dashboard/servicos/ativos/Ativos'
import InsertRecord  from '../../pages/insertRecord/InsertRecord'
import Excluir from '../../components/dashboard/servicos/excluir/Excluir' */

export default function Dashboard() {


  return (
    <>
        <DashboardHeader />
        <SubMenuServicos />
{/*         <SearchBar />
        <Ativos />
        <InsertRecord />
        <Excluir /> */}
        
    </>
  )
}
