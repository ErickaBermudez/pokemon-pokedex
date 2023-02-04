import React, { useState } from "react";
import { pokemonColors } from '../utils/pokemonColors';
import { newShade } from "../utils/newShade";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const PokemonCard = ({ pokemon }: any) => {

    const tabs = {
        STATS: 1,
        ABILITIES: 2,
        MOVES: 3
    };

    const [active, setActive] = useState(tabs.STATS);

    function noHyphen(str: string): string {
        return str.replace(/-/g, " ");
    }

    return (<div className="w-full">

        {
            pokemon?.id &&
            <div className="-mt-5">
                {
                    pokemon?.types.map((type: any) => {
                        let pokemonType = String(type.type.name);
                        let typeColor = pokemonColors[pokemonType];
                        let shade = newShade(typeColor, 50);
                        return (
                            <span key={pokemonType}
                                className="p-1 px-3 rounded-2xl text-md mr-2 capitalize font-kulim-park" style={{ backgroundColor: shade }}>{type.type.name}</span>
                        )
                    })
                }
                <div className="flex justify-center items-center mt-24">
                    <div className="bg-white w-full h-full xl:h-screen" style={{ borderRadius: '60px' }}>
                        <div className="flex justify-center">
                            <img src={pokemon?.sprites?.front_default} className="w-96 h-96 -mt-36 -mb-5" alt="Pokemon" />
                        </div>

                        {/** tabs to show the stats */}
                        <div className="text-lg font-semibold text-center w-full">
                            <ul className="flex justify-evenly">
                                <li className="mr-2">
                                    <button onClick={() => setActive(tabs.STATS)}
                                        className={`inline-block p-3 pt-0 ${active === tabs.STATS ? 'border-b-2' : ''}`}
                                        style={{ borderColor: pokemonColors[pokemon?.types[0].type.name] }}
                                    ><FontAwesomeIcon icon={faChartBar} /> Stats</button>
                                </li>

                                <li className="mr-2">
                                    <button onClick={() => setActive(tabs.ABILITIES)}
                                        className={`inline-block p-3 pt-0 ${active === tabs.ABILITIES ? 'border-b-2' : ''}`}
                                        style={{ borderColor: pokemonColors[pokemon?.types[0].type.name] }}
                                    ><FontAwesomeIcon icon={faBolt} />Abilities</button>
                                </li>

                                <li className="mr-2">
                                    <button onClick={() => setActive(tabs.MOVES)}
                                        className={`inline-block p-3 pt-0 ${active === tabs.MOVES ? 'border-b-2' : ''}`}
                                        style={{ borderColor: pokemonColors[pokemon?.types[0].type.name] }}
                                    ><FontAwesomeIcon icon={faStar} />Moves</button>
                                </li>

                            </ul>
                        </div>

                        {/** stats */
                            active === tabs.STATS &&
                            <div className="font-kulim-park p-5 text-center text-lg">
                                {
                                    pokemon?.stats.map((stat: any) => {
                                        return (
                                            <div className="grid grid-cols-2 mb-3">
                                                <div className="col-span-1 capitalize">{noHyphen(stat.stat?.name)}</div>
                                                <div className="col-span-1 text-gray-500">{stat.base_stat}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }

                        {/** abilities */
                            active === tabs.ABILITIES &&
                            <div className="font-kulim-park p-5 text-center text-lg">
                                {
                                    pokemon?.abilities.map((ability: any) => {
                                        let wikiUrl = 'https://pokemon.fandom.com/wiki/Special:Search?query=';
                                        return (
                                            <div className="grid grid-cols-1 mb-3">
                                                <a href={`${wikiUrl}${ability.ability?.name}`} target="_blank" rel="noreferrer"
                                                    className="col-span-1 capitalize hover:text-red-600">
                                                    <FontAwesomeIcon icon={faLink} /> {noHyphen(ability.ability?.name)}
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }

                        {/** moves */
                            active === tabs.MOVES &&
                            <div className="font-kulim-park text-center text-sm max-h-64 overflow-y-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-3 p-10">
                                    {
                                        pokemon?.moves.map((move: any) => {
                                            let wikiUrl = 'https://pokemon.fandom.com/wiki/Special:Search?query=';
                                            return (

                                                <div className="col-span-1 mb-3">
                                                    <a href={`${wikiUrl}${move.move?.name}`} target="_blank" rel="noreferrer"
                                                        className="capitalize hover:text-red-600">
                                                        <FontAwesomeIcon icon={faLink} /> {noHyphen(move.move?.name)}
                                                    </a>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }


                    </div>
                </div>
            </div>

        }
    </div>)
}