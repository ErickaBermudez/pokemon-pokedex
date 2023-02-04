import axios from "axios";

const baseURL = 'https://pokeapi.co/api/v2';
/**
 * 
 * @param pokemonName The pokemon name in lowercase letters
 * @returns 
 */
export const getPokemon = async (pokemonName: string) => {
    let notFoundMessage = "Oops, are you sure that Pokemon exists?"
    try {
        /**
         * If value is a number, our API point can still look for the 
         * pokemon with that ID. For now, just focus on Pokemon name. 
         */
        const intValue = parseInt(pokemonName, 10);
        if(!isNaN(intValue) && typeof intValue === "number") return Promise.reject(notFoundMessage);
        
        let url = `${baseURL}/pokemon/${pokemonName}`;
        const response = await axios.get(url)
        if(response?.data){
            return Promise.resolve(response.data);
        }
        else return Promise.reject(notFoundMessage);
    } catch (err: any) {
        if(err.response.status === 404){
            return Promise.reject(notFoundMessage)
        }
        return Promise.reject("Oops! There has been an error, try later!")
    }
};