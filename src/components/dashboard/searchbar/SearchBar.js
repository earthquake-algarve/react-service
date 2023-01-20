import React from 'react';
import './SearchBar.css'
import { MagnifyingGlass } from '../../../Icons';

const SearchBar = () => {
    return (
      <>
        <div className="wrap-search">
          <div className="search-dashboard">
            <button type="submit" className="searchButton">
              <MagnifyingGlass />
            </button>

            <input
              type="text"
              className="buscar-titulo"
              placeholder="Pesquisar por título"
            />

            <select className='buscar-categoria'>
              <option value="default" disabled selected>
                Categoria
              </option>
              <option value="coffee">Barcos</option>
              <option value="coffee">Surf</option>
              <option value="tea">Kayak</option>
              <option value="milk">Trilhas</option>
              <option value="milk">City Tour</option>
            </select>

          </div>
        </div>
      </>
    );
}

export default SearchBar;
