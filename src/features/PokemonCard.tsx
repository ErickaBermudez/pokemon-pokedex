import React, { useEffect, useState } from "react";
import { pokemonColors } from '../utils/pokemonColors';
import { newShade } from "../utils/newShade";

export const PokemonCard = ({ pokemon }: any) => {
    return (<div className="w-full">

        {
        pokemon?.id && 
        <div className="">
            {
                pokemon?.types.map((type:any) => {
                    let pokemonType = String(type.type.name);
                    let typeColor = pokemonColors[pokemonType];
                    let shade = newShade(typeColor, 50);
                    return (
                        <span className="p-1 px-3 rounded-md text-sm mr-2" style={{backgroundColor: shade}}>{type.type.name}</span>
                    )
                })
            }
            <img src={pokemon?.sprites?.front_default} className="w-72 h-72" />
        </div>

        }
    </div>)
}