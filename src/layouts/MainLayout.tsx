// imports
import React, { useEffect, useState } from 'react';
import { SearchPokemon } from '../features/SearchPokemon';
import { PokemonCard } from '../features/PokemonCard';
import { pokemonColors } from '../utils/pokemonColors';
import { LoadingPage } from '../common/LoadingPage';
import { useSelector } from 'react-redux';

// variables
const pokeball = require('../assets/images/pokeball.png');
const backgroundColor = 'rgb(248 250 252)';

export const MainLayout = () => {

    // we initialize pokemon type so we can work with the id
    // since the api can bring count of all pokemons as an
    // object, and we want to sure it has one pokemon, not count

    type Pokemon = {
        [id: string]: any;
    }

    const tempPokemon: Pokemon = {
        id: null
    }

    const [pokemon, setPokemon] = useState(tempPokemon);
    const [isError, setIsError] = useState(false);
    const isLoading = useSelector((state: any) => state.isLoading);

    useEffect(() => {
        console.log(pokemon);
    }, [pokemon])

    return (
        <LoadingPage active={isLoading}>
            <div className={`w-full h-screen p-10`} style={{ backgroundColor: pokemon ? '' : backgroundColor }}>
                <div className='flex items-center'>
                    <img src={pokeball} alt="Pokeball" className='w-10 h-10 mr-3' />
                    <h1 className='font-kulim-park text-2xl'>Pokedex</h1>
                </div>

                {/** page content */}
                <div className='flex flex-col align-middle justify-start items-center'>
                {/** search bar */}
                <div className='flex items-center align-middle justify-center w-1/3'>
                    <SearchPokemon setPokemon={setPokemon} setIsError={setIsError} />
                </div>

                {/** pokemon card */}
                {!isError &&
                    <div className='flex items-center align-middle justify-center w-1/3'>
                        {pokemon.id
                            ? <PokemonCard pokemon={pokemon}></PokemonCard>
                            : <p>No pokemon yet, please submit a pokemon!</p>
                        }
                    </div>
                }
                </div>
            </div>
        </LoadingPage>
    )
}
