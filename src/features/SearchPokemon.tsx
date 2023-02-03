import React, { useEffect, useState } from 'react';

import { SearchBar } from '../common/SearchBar'
import { getPokemon } from '../services/api';
import { useDispatch } from 'react-redux';
import { setLoader } from '../store';

export const SearchPokemon = ({setPokemon, setIsError}: any) => {
        const [pokemonName, setPokemonName] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const [isLoading, setIsLoading] = useState(false);
        const [pokemonData, setPokemonData] = useState({});

        const dispatch = useDispatch();

        useEffect(() => {
                setIsError(errorMessage? true : false)
        }, [errorMessage]);

        useEffect(()=> {
                setPokemon(pokemonData);
        }, [pokemonData]);

        useEffect(()=> {
                dispatch(setLoader(isLoading));
        }, [dispatch, isLoading]);

        const getPokemonData = async (pokemonName: string) => {
                try {
                        setIsLoading(true);
                        let lowerCasePk = pokemonName.toLowerCase();
                        const resPokemonData = await getPokemon(lowerCasePk);
                        setErrorMessage("");
                        setPokemonData(resPokemonData);
                } catch (error: any) {
                        setErrorMessage(error);
                } finally {
                        setIsLoading(false);
                }
        }
        useEffect(() => {
                getPokemonData(pokemonName)
        }, [pokemonName])

        return <div className='flex justify-center w-full'>

                <SearchBar searchBarStyles="font-kreon text-6xl" placeholder="&#xF002; Search Pokemon"
                        errorMessage={errorMessage}
                        className=""
                        setSearchResult={(result: React.SetStateAction<string>) => { setPokemonName(result) }} />

        </div>
}
