import api from './api';

export const getPokemons = async () => {
    try {
        const res = await api.get('pokemon?offset=0&limit=151');
        
        return res.data.results;
    } catch (error) {
        return false;
    }
}

export const getPokemonData = async (pokemonName: string) => {
    try {
        const res = await api.get(`pokemon/${pokemonName}`);
        return res.data;
    } catch (error) {
        return false;
    }
}

export const getPokemonDataNumber = async (id: number) => {
    try {
        const res = await api.get(`pokemon/${id}`);
        return res.data;
    } catch (error) {
        return false;
    }
}
