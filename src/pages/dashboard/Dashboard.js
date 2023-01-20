import './Dashboard.css'
import React from 'react'
import DashboardHeader from '../../components/dashboard//header/DashboardHeader'
import SubMenuServicos from '../../components/dashboard/servicos/subMenu/SubMenuServicos'
import SearchBar from '../../components/dashboard/searchbar/SearchBar'

export default function Dashboard() {


  return (
    <>
        <DashboardHeader />
        <SubMenuServicos />
        <SearchBar />
        
    </>
  )
}
