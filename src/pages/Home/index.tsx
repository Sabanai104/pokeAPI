import React, { useState, useEffect, FC } from 'react';
import { getPokemonData, getPokemons } from '../../services/requisitions';
import { validateText, translateText } from '../../utils/CommonsMethods';
import { TouchableOpacity, View } from 'react-native';

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



import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import Loading from '../../components/SecondLoading';
import Failed from '../../components/Failed';
import { Item } from 'semantic-ui-react';

interface IHome {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface IPokemonsData {
    name: string,
    id: number,
    types: [
        {
            type: {
                name: string
            }
        },
        {
            type: {
                name: string
            }
        }
    ]
    abilities: [
        {
            ability: {
                name: string
            }
        }
    ]
}

const Home: FC<IHome> = ({ navigation }) => {
    const [text, setText] = useState('');
    const [failed, setFailed] = useState(true);
    const [pokemonsData, setPokemonsData] = useState<IPokemonsData[]>([] as IPokemonsData[] || Boolean);
    const [searchPokemon, setSearchPokemon] = useState<IPokemonsData[]>([] as IPokemonsData[] || Boolean);
    const [loaded, setLoaded] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const searchInput = (text: string) => {
        setText(text);
        if (text.toLowerCase() === 'melhores' || text.toLowerCase() === 'melhores pokemons') {
            const filtered = pokemonsData.filter((el: IPokemonsData) => {
                return el.name === 'squirtle'
                    || el.name === 'mewtwo'
                    || el.name === 'charizard'
                    || el.name === 'jigglypuff'
                    || el.name === 'gengar'
                    || el.name === 'pikachu'
                    || el.name === 'gyarados'
                    || el.name === 'articuno'
                    || el.name === 'moltres'
                    || el.name === 'snorlax'
                    || el.name === 'mew'
                    || el.name === 'dragonite'
                    || el.name === 'machop'
                    || el.name === 'abra'
                    || el.name === 'hitmonchan'
            });
            if (filtered[0] != undefined) {
                setSearchPokemon(filtered);
                setLoaded(true);
            } else {
                setLoaded(false);
            }
            return;
        }

        const filtered = pokemonsData.filter((el: IPokemonsData) => {
            return el.name === text.toLowerCase()
                || el.types.some(data => data.type.name === text.toLowerCase())
                || el.types.some(data => data.type.name === translateText(text))
                || el.abilities.some(data => data.ability.name === text.toLowerCase())
        });
        if (filtered[0] != undefined) {
            setSearchPokemon(filtered);
            setLoaded(true);
        } else {
            setLoaded(false);
        }
    }

    const requisitions = async () => {
        setIsLoading(true);
        const res = await getPokemons();
        if (res == false) {
            setFailed(res);
            setIsLoading(false);
            return;
        }
        await loadingPokemon(res);
        setIsLoading(false);
    }

    const loadingPokemon = async (data: IPokemonsData[]) => {
        const _pokemon = await Promise.all(data.map(async (pokemon: { name: string; }) => {
            let pokemonSave = await getPokemonData(pokemon.name);
            if (pokemonSave == false) {
                setFailed(false);
                return;
            }
            return pokemonSave;
        }));
        setPokemonsData(_pokemon);
    }

    const sortAlphabeticsPokemons = async (data: IPokemonsData[]) => {
        setIsLoading(true);
        setSorted(true);
        data.sort(function (a, b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    const sortNumericsPokemons = (data: IPokemonsData[]) => {
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
                {
                    !failed ? (
                        <Failed />
                    ) : (
                        <>
                            <HeaderView>
                                <ImageTitleContainer>
                                    <Image
                                        source={require('../../assets/Pokeball.png')}
                                    />
                                    <Title>Pokédex</Title>
                                </ImageTitleContainer>

                                <TouchableOpacity
                                    onPress={() => !sorted ? sortAlphabeticsPokemons(pokemonsData as IPokemonsData[]) : sortNumericsPokemons(pokemonsData as IPokemonsData[])}
                                    style={{
                                        width: 40,
                                        height: '100%',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center'
                                    }}
                                >
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
                                </TouchableOpacity>
                            </HeaderView>

                            <SearchBar
                                onChange={(text: string) => searchInput(text)}
                                value={text}
                                erase={setText}
                                resetLoad={setLoaded}
                            />

                            {
                                isLoading == true ? <Loading /> : (
                                    <FlatList
                                        data={!loaded ? pokemonsData : searchPokemon}
                                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                                        numColumns={3}
                                        renderItem={({ item, index }: any) => {
                                            return (
                                                index + 1 === searchPokemon.length && loaded ? (
                                                    <>
                                                        <PokemonCard key={item.id} item={item} index={item.id} validateText={validateText} navigation={navigation} />
                                                        <View style={{ width: '31.34%', height: 140 }} />
                                                    </>
                                                ) : (

                                                    <PokemonCard key={item.id} item={item} index={item.id} validateText={validateText} navigation={navigation} />
                                                )
                                            )
                                        }}
                                    />
                                )
                            }
                        </>
                    )
                }
            </MainContainer>
        </Background>
    )
}

export default Home;
