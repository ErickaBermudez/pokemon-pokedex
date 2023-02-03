import React, { useEffect } from "react";

export const PokemonCard = ({pokemon}: any) => {
    return (<>

        {
            pokemon?.id && <div className="">
            <img src={pokemon?.sprites?.front_default}/>
        </div>
            
        }
    </>)
}