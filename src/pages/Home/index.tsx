import React, { useState, useEffect, FC } from 'react';
import { getPokemonData, getPokemons } from '../../services/requisitions';

import {
    Background,
    MainContainer,
    HeaderView,
    ImageTitleContainer,
    Image,
    Title,
    FilterContainer,
    FilterImage,
    FlatList
} from './style';

import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
} from 'react-navigation';
import SearchBar from '../../components/SearchBar';
import PokemonCard from '../../components/PokemonCard';

import { validateText } from '../../utils/CommonsMethods';

import { TouchableWithoutFeedback, Text } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import Loading from '../../components/Loading';

interface IHome {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const Home: FC<IHome> = ({ navigation }) => {
    const [text, setText] = useState('');
    const [pokemonsData, setPokemonsData] = useState<any>();
    const [searchPokemon, setSearchPokemon] = useState<any>();
    const [loaded, setLoaded] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const searchInput = (text: string) => {
        setText(text);
        const filtered = pokemonsData.filter((el: any) => {
            return el.name === text.toLowerCase()
        });
        if (filtered[0] != undefined) {
            setSearchPokemon(filtered);
            setLoaded(true);
        } else {
            setLoaded(false);
        }
    }

    const requisitions = async () => {
        const res = await getPokemons();
        await loadingPokemon(res);
    }

    const loadingPokemon = async (data: { map: (arg0: (pokemon: { name: string; }) => Promise<any>) => readonly [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]; }) => {
        const _pokemon = await Promise.all(data.map(async (pokemon: { name: string; }) => {
            let pokemonSave = await getPokemonData(pokemon.name);
            return pokemonSave;
        }));
        setPokemonsData(_pokemon);
    }

    const sortAlphabeticsPokemons = async (data: [any]) => {
        console.log('pressed')
        setIsLoading(true);
        setSorted(true);
        await data.sort(function (a, b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    const sortNumericsPokemons = (data: [any]) => {
        console.log('pressado')
        setIsLoading(true);
        setSorted(false);
        data.sort(function (a, b) {
            return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    useEffect(() => {
        requisitions();
    }, []);

    return (
        <Background >
            <MainContainer>
                <HeaderView>
                    <ImageTitleContainer>
                        <Image
                            source={require('../../assets/Pokeball.png')}
                        />
                        <Title>Pokédex</Title>
                    </ImageTitleContainer>

                    <TouchableWithoutFeedback onPress={() => !sorted ? sortAlphabeticsPokemons(pokemonsData) : sortNumericsPokemons(pokemonsData)}>
                        <FilterContainer>
                            {
                                !sorted ? (
                                    <>
                                        <FontAwesomeIcons name='hashtag' size={14} color='black' />
                                        <FilterImage source={require('../../assets/Vector.png')} />
                                    </>
                                ) : (
                                    <MaterialIcons name='sort-alphabetical-ascending' size={20} color='black' />
                                )
                            }
                        </FilterContainer>
                    </TouchableWithoutFeedback>
                </HeaderView>

                <SearchBar
                    onChange={(text: string) => searchInput(text)}
                    value={text}
                />


                {
                    isLoading ? <Loading color='grass' /> : (
                        <FlatList
                            data={!loaded ? pokemonsData : searchPokemon}
                            keyExtractor={(item: any) => item.id}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            numColumns={3}
                            renderItem={({ item, index }: any) => {
                                return (
                                    <PokemonCard key={item.id} item={item} index={item.id} validateText={validateText} navigation={navigation} />
                                )
                            }}
                        />
                    )
                }

            </MainContainer>
        </Background>
    )
}

export default Home;
