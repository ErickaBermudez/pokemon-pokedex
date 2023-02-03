import React, { useEffect, useState } from 'react';

import { SearchBar } from '../common/SearchBar'
import { getPokemon } from '../services/api';

export const SearchPokemon = () => {
        const [pokemonName, setPokemonName] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const [isLoading, setIsLoading] = useState(false);
        const [pokemonData, setPokemonData] = useState({});

        const getPokemonData = async (pokemonName: string) => {
                try {
                        setIsLoading(true);
                        let lowerCasePk = pokemonName.toLowerCase();
                        const resPokemonData = await getPokemon(lowerCasePk);
                        setErrorMessage("");
                        setPokemonData(resPokemonData);
                } catch(error:any) {
                        setErrorMessage(error);
                } finally {
                        setIsLoading(false);
                }
        }
        useEffect(() => {
                getPokemonData(pokemonName)
        }, [pokemonName])

        return <>
                <SearchBar searchBarStyles="font-kreon text-5xl" placeholder="Search Pokemon"
                        errorMessage={errorMessage}
                        className=""
                        setSearchResult={(result: React.SetStateAction<string>) => { setPokemonName(result) }} />
        </>
}
