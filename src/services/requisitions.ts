import api from './api';

export const getPokemons = async () => {
    try {
        const { data } = await api.get('pokemon?offset=0&limit=151');
        return data.results;
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonData = async (pokemonName: string) => {
    try {
        const { data } = await api.get(`pokemon/${pokemonName}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonDataNumber = async (id: number) => {
    try {
        const { data } = await api.get(`pokemon/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}
