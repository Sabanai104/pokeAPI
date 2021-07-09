import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react';

import { SearchContainer, SearchText, TouchableWithoutFeedback, SearchContainer2 } from './style';
import Icon from 'react-native-vector-icons/Fontisto';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';

interface ISearchBar {
    onChange: any;
    value: string;
    erase: Dispatch<SetStateAction<string>>;
    resetLoad: Dispatch<SetStateAction<boolean>>;
}

const SearchBar: FC<ISearchBar> = ({ onChange, value, erase,resetLoad }) => {
    const [isClicked, setIsClicked] = useState(false)
    const inputEl = useRef<TextInput>(null);
    const onClick = () => {
        inputEl?.current?.focus();
        setIsClicked(true);
    }
    return (
        <TouchableWithoutFeedback onPressIn={onClick} >

            <SearchContainer primary={isClicked} >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10
                }}>
                    <Icon name='search' size={15} color='grey' />
                    <SearchText
                        ref={inputEl}
                        placeholder='Procurar'
                        onChangeText={onChange}
                        defaultValue={value}
                        onPressIn={onClick}
                        primary={isClicked}
                    />
                </View>
                {
                    isClicked ? (
                        <TouchableOpacity onPress={() => {
                            setIsClicked(!isClicked);
                            erase('');
                            resetLoad(false);
                        }}>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    color: '#666666'
                                }}
                            >X</Text>
                        </TouchableOpacity>
                    ) : null
                }
            </SearchContainer>

            {/* <SearchContainer2>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10
                        }}>
                            <Icon name='search' size={15} color='grey' />
                            <SearchText
                                ref={inputEl}
                                placeholder='Procurar'
                                onChangeText={onChange}
                                defaultValue={value}
                            />
                        </View>

                        <TouchableOpacity>
                            <Text
                                style={{
                                    marginRight: 10,
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    color: '#666666'
                                }}
                            >X</Text>
                        </TouchableOpacity>
                    </SearchContainer2> */}

        </TouchableWithoutFeedback>
    );
}

export default SearchBar;
