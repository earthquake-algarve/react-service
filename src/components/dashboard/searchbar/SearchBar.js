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

            <select defaultValue="categoria" className='buscar-categoria'>
              <option value="categoria" disabled >
                Categoria
              </option>
              <option value="barcos">Barcos</option>
              <option value="surf">Surf</option>
              <option value="kayak">Kayak</option>
              <option value="trilhas">Trilhas</option>
              <option value="citytour">City Tour</option>
            </select>

          </div>
        </div>
      </>
    );
}

export default SearchBar;
