import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, BackHandler } from 'react-native';
import { getPokemonDataNumber } from '../../services/requisitions';

import ArrowIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';

import { validateText, validateSecondText, cardColor, transformDecimal } from '../../utils/CommonsMethods';
import Loading from '../../components/Loading';

import {
    Background,
    PokeballImg,
    HeaderContainer,
    ArrowNameContainer,
    NameText,
    IndiceText,
    PokemonImage,
    InfoBackgroundContainer,
    InfoContainer,
    TypeContainer,
    Type,
    AboutContainer,
    AbouContentContainer,
    WeightHeightContainer,
    WeightHeightIcon,
    StatusContainer,
    StatusInfoContainer,
    StatusNameContainer,
    StatusNumberContainer,
    StatusBarContainer,
    ArrowLeft,
    ArrowRight
} from './style';
import Failed from '../../components/Failed';

interface IPokemonsData {
    ability: {
        name: string
    };
    name: string,
    id: number,
    base_stat: number,
    types: [{
        type: {
            name: string
        }
    }]
}


const Details = ({ route, navigation }: any) => {
    const { index, item } = route.params;
    const [delayButton, setDelayButton] = useState(true);
    const [failed, setFailed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const nextPokemon = async (id: number) => {
        if (delayButton) {
            setDelayButton(!delayButton);
            setIsLoading(!isLoading);
            setTimeout(async () => {
                const pokemon = await getPokemonDataNumber(id);
                if (pokemon == false) {
                    setFailed(false);
                    return;
                }
                navigation.push('details', {
                    index: id,
                    item: pokemon
                });
            }, 500);
            setIsLoading(!isLoading);
        }
    }

    const previousPokemon = async (id: number) => {
        if (delayButton) {
            setDelayButton(!delayButton);

            setIsLoading(!isLoading);
            setTimeout(async () => {
                const pokemon = await getPokemonDataNumber(id);
                if (pokemon == false) {
                    setFailed(false);
                    return;
                }
                navigation.push('details', {
                    index: id,
                    item: pokemon
                });
            }, 500);
            setIsLoading(!isLoading);
        }
    }

    useEffect(() => {
        if (!delayButton) {
            const timeout = setTimeout(() => {
                setDelayButton(!delayButton);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [delayButton]);

    useEffect(() => {
        function handleBackButton() {
          navigation.navigate('home');
          return true;
        }
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    
        return () => backHandler.remove();
      }, [navigation]);

    return (
        <Background
            style={{
                backgroundColor: cardColor(item.types[0].type.name)
            }}
        >
            {
                !failed ? (
                    <Failed />
                ) : (
                    <>
                        {
                            isLoading ? (
                                <Loading color={item.types[0].type.name} />
                            ) : null
                        }
                        <PokeballImg source={require('../../assets/Pokeball2.png')} />
                        <HeaderContainer>
                            <ArrowNameContainer >
                                <TouchableOpacity style={{
                                    justifyContent: 'center',
                                    height: 40,
                                    width: 35
                                }} onPress={() => navigation.navigate('home')}>
                                    <ArrowIcon name='arrowleft' size={25} color='white' />
                                </TouchableOpacity>
                                <NameText>{item.name}</NameText>
                            </ArrowNameContainer>
                            <IndiceText>{validateText(index)}</IndiceText>
                        </HeaderContainer>

                        {
                            item.id !== 1 ? (
                                <ArrowLeft onPress={() => previousPokemon(item.id - 1)} >
                                    <MaterialIcons name='arrow-back-ios' size={30} color='white' />
                                </ArrowLeft>
                            ) : null
                        }
                        {
                            item.id !== 151 ? (
                                <ArrowRight onPress={() => nextPokemon(item.id + 1)}>
                                    <MaterialIcons name='arrow-forward-ios' size={30} color='white' />
                                </ArrowRight>
                            ) : null
                        }
                        <PokemonImage
                            source={{
                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
                            }} />

                        <InfoBackgroundContainer>
                            <InfoContainer>
                                <TypeContainer>
                                    {
                                        item.types.map((data: {
                                            type: { name: string };
                                        }, index: number) => {
                                            return (
                                                <Type
                                                    key={index}
                                                    style={{
                                                        backgroundColor: cardColor(data.type.name)
                                                    }}
                                                >
                                                    <Text style={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: 16,
                                                        textTransform: 'capitalize'
                                                    }} >{data.type.name}</Text>
                                                </Type>
                                            )
                                        })
                                    }
                                </TypeContainer>

                                <AboutContainer>
                                    <Text style={{
                                        textTransform: 'capitalize',
                                        color: cardColor(item.types[0].type.name),
                                        fontWeight: 'bold',
                                        fontSize: 19
                                    }} >
                                        Sobre
                                    </Text>
                                    <AbouContentContainer>
                                        <WeightHeightContainer>
                                            <WeightHeightIcon>
                                                <FontAwesomeIcon name='weight' size={25} color='#212121' />
                                                <Text
                                                    style={{
                                                        marginLeft: 8
                                                    }}
                                                >
                                                    {transformDecimal(item.weight)} kg
                                                </Text>
                                            </WeightHeightIcon>

                                            <Text
                                                style={{
                                                    marginTop: 8,
                                                    fontSize: 12,
                                                    color: "#666666"
                                                }}
                                            >
                                                Peso
                                            </Text>
                                        </WeightHeightContainer>

                                        <WeightHeightContainer>
                                            <WeightHeightIcon>
                                                <FontAwesomeIcon name='ruler-vertical' size={25} color='#212121' />
                                                <Text
                                                    style={{
                                                        marginLeft: 8,
                                                        color: '#212121'
                                                    }}
                                                >{transformDecimal(item.height)} m</Text>
                                            </WeightHeightIcon>
                                            <Text style={{
                                                marginTop: 8,
                                                fontSize: 12,
                                                color: "#666666"
                                            }}
                                            >Altura</Text>
                                        </WeightHeightContainer>
                                        <WeightHeightContainer style={{
                                            paddingRight: 0,
                                            borderRightWidth: 0

                                        }}>
                                            <WeightHeightIcon style={{
                                                flexDirection: 'column'
                                            }}>
                                                {
                                                    item.abilities.map((data: IPokemonsData, index: number) => {
                                                        return (
                                                            <Text key={index} style={{
                                                                fontSize: 12,
                                                                color: '#3f3d3d',
                                                                textTransform: 'capitalize'
                                                            }}>{data.ability.name}</Text>
                                                        )
                                                    })
                                                }
                                            </WeightHeightIcon>

                                            <Text style={{
                                                marginTop: 6,
                                                fontSize: 12,
                                                color: "#666666",
                                            }}
                                            >Habilidades</Text>
                                        </WeightHeightContainer>
                                    </AbouContentContainer>
                                </AboutContainer>

                                <StatusContainer>
                                    <Text
                                        style={{
                                            textTransform: 'capitalize',
                                            color: cardColor(item.types[0].type.name),
                                            fontWeight: 'bold',
                                            fontSize: 19,
                                            marginTop: 10
                                        }}
                                    >
                                        Status Base
                                    </Text>

                                    <StatusInfoContainer >
                                        <StatusNameContainer>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: 'bold',
                                                    color: cardColor(item.types[0].type.name)
                                                }}
                                            >HP</Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: 'bold',
                                                    color: cardColor(item.types[0].type.name)
                                                }}>ATK</Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: 'bold',
                                                    color: cardColor(item.types[0].type.name)
                                                }}>DEF</Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: 'bold',
                                                    color: cardColor(item.types[0].type.name)
                                                }}>SATK</Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: 'bold',
                                                    color: cardColor(item.types[0].type.name)
                                                }}>SDEF</Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: 'bold',
                                                    color: cardColor(item.types[0].type.name)
                                                }}>SPD</Text>
                                        </StatusNameContainer>

                                        <StatusNumberContainer >
                                            {
                                                item.stats.map((data: IPokemonsData, index: number) => {
                                                    return (
                                                        <Text
                                                            key={index}
                                                            style={{
                                                                fontSize: 15,
                                                                color: '#212121'
                                                            }}
                                                        >{validateSecondText(data.base_stat)}</Text>
                                                    )
                                                })
                                            }
                                        </StatusNumberContainer>

                                        <StatusBarContainer>
                                            {
                                                item.stats.map((data: IPokemonsData, index: number) => {
                                                    return (
                                                        <Progress.Bar
                                                            key={index}
                                                            progress={data.base_stat / 200}
                                                            height={7}
                                                            width={200}
                                                            borderRadius={7}
                                                            color={cardColor(item.types[0].type.name)}
                                                            style={{
                                                                marginTop: 5
                                                            }} />
                                                    )
                                                })
                                            }
                                        </StatusBarContainer>
                                    </StatusInfoContainer>
                                </StatusContainer>
                            </InfoContainer>
                        </InfoBackgroundContainer>
                    </>
                )
            }
        </Background >
    )
}

export default Details;
