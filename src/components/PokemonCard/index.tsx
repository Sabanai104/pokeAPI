import React, { FC } from 'react'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
} from 'react-navigation';

import {Text} from 'react-native'

import {cardColor} from '../../utils/CommonsMethods';

import {
    PokemonCardStyle,
    TextIndice,
    PokemonImg,
    PokemonTextContainer,
    Touchable
} from './style';
import { useEffect } from 'react';

interface IPokemonCard {
    item: {
        name: string,
        url: string,
        types: [{
            type: {
                name: string
            }
        }]
    },
    index: number,
    validateText: Function,
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const PokemonCard: FC<IPokemonCard> = ({ item, index, validateText, navigation }) => {
    return (
        <Touchable onPress={() => navigation.navigate('details', {
            index: index,
            item: item
        })}>
            <PokemonCardStyle style={{
                borderColor: cardColor(item.types[0].type.name)
            }} >
                <TextIndice style={{
                    color: cardColor(item.types[0].type.name)
                }}>
                    {
                        validateText(index)
                    }
                </TextIndice>
                <PokemonImg
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
                    }}
                />
                <PokemonTextContainer style={{
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    backgroundColor: cardColor(item.types[0].type.name)
                }}>
                    <Text style={{
                            color: 'white',
                            textTransform: 'capitalize',
                            textAlign: 'center'
                    }} >
                        {item.name}
                    </Text>
                </PokemonTextContainer>
            </PokemonCardStyle>
        </Touchable>
    );
}

export default PokemonCard;