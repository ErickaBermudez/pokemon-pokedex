// imports
import React from 'react';
import { SearchPokemon } from '../features/SearchPokemon'
import { pokemonColors } from '../utils/pokemonColors';
import { LoadingPage } from '../common/LoadingPage';
import { useSelector } from 'react-redux';

// variables
const pokeball = require('../assets/images/pokeball.png');
const backgroundColor = 'rgb(248 250 252)';
var selectedPokemon: string | null;

export const MainLayout = () => {

    const isLoading = useSelector((state: any) => state.isLoading);

    return (
        <LoadingPage active={isLoading}>
            <div className={`w-full h-screen p-10`} style={{ backgroundColor: selectedPokemon ? selectedPokemon : backgroundColor }}>
                <div className='flex items-center'>
                    <img src={pokeball} alt="Pokeball" className='w-10 h-10 mr-3' />
                    <h1 className='font-kulim-park text-2xl'>Pokedex</h1>
                </div>


                {/** search bar */}
                <div className='flex items-center align-middle justify-center'>
                    <SearchPokemon />
                </div>
            </div>
        </LoadingPage>
    )
}
