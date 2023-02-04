import React, { useCallback, useEffect, useState } from 'react';

import { SearchBar } from '../common/SearchBar'
import { getPokemon } from '../services/api';
import { useDispatch } from 'react-redux';
import { setLoader } from '../store';

export const SearchPokemon = ({ setPokemon, setIsError }: any) => {
        const [pokemonName, setPokemonName] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const [isLoading, setIsLoading] = useState(false);

        type Pokemon = {
                [id: string]: any;
            }
        
            const tempPokemon: Pokemon = {
                id: null
            }

        const [pokemonData, setPokemonData] = useState(tempPokemon);

        const dispatch = useDispatch();

        const setIsErrorCallback = useCallback(setIsError, [setIsError]);
        const setPokemonCallback = useCallback(setPokemon, [setPokemon]);

        useEffect(() => {
                setIsErrorCallback(errorMessage ? true : false);
        }, [errorMessage, setIsErrorCallback]);

        useEffect(() => {
                setPokemonCallback(pokemonData);
        }, [pokemonData, setPokemonCallback]);

        useEffect(() => {
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

                <SearchBar searchBarStyles="font-kreon text-4xl lg:text-6xl" placeholder="&#xF002; Search Pokemon"
                        errorMessage={errorMessage}
                        className=""
                        sideLegend={pokemonData?.id ? `#${pokemonData?.id}` : ''}
                        setSearchResult={(result: React.SetStateAction<string>) => { setPokemonName(result) }} />

        </div>
}
