import React, { useState } from 'react';

import { SearchBar } from '../common/SearchBar'

export const SearchPokemon = () => {
        const [pokemonName, setPokemonName] = useState("");
        const [errorMessage, setErrorMessage] = useState("");

        return <>
                <SearchBar searchBarStyles="font-kreon text-5xl" placeholder="Search Pokemon" 
                errorMessage={errorMessage}
                className=""
                setSearchResult={(result: React.SetStateAction<string>) => {setPokemonName(result)}} />
        </>
}
