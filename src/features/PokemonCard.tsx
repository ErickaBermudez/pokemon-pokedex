import React from "react";
import { pokemonColors } from '../utils/pokemonColors';
import { newShade } from "../utils/newShade";

export const PokemonCard = ({ pokemon }: any) => {
    return (<div className="w-full">

        {
        pokemon?.id && 
        <div className="-mt-5">
            {
                pokemon?.types.map((type:any) => {
                    let pokemonType = String(type.type.name);
                    let typeColor = pokemonColors[pokemonType];
                    let shade = newShade(typeColor, 50);
                    return (
                        <span key={pokemonType}
                        className="p-1 px-3 rounded-md text-sm mr-2" style={{backgroundColor: shade}}>{type.type.name}</span>
                    )
                })
            }
            <div className="flex justify-center items-center mt-24">
                <div className="bg-white w-full h-screen" style={{borderRadius: '60px'}}>
                <div className="flex justify-center">
                    <img src={pokemon?.sprites?.front_default} className="w-96 h-96 -mt-36 -mb-5" alt="Pokemon" />

                   
                </div>
                <p className="font-kulim-park p-5">
                        <span className="font-bold">Base experience</span> =====&gt; {pokemon?.base_experience}
                        <br></br>
                        <span className="font-bold">Height</span> =====&gt; {pokemon?.height}
                    </p>
                </div>
            </div>
        </div>

        }
    </div>)
}