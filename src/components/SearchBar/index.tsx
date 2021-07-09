import React, { FC, useRef } from 'react';

import { SearchContainer, SearchText, TouchableWithoutFeedback } from './style';
import Icon from 'react-native-vector-icons/Fontisto';

interface ISearchBar {
    onChange: any;
    value: string;
}

const SearchBar: FC<ISearchBar> = ({ onChange, value }) => {
    const inputEl = useRef<any>();
    const onClick = () => {
        inputEl.current.focus();
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <SearchContainer >
                <Icon name='search' size={15} color='grey' />
                <SearchText
                    ref={inputEl}
                    placeholder='Procurar'
                    onChangeText={onChange}
                    defaultValue={value}
                />
            </SearchContainer>
        </TouchableWithoutFeedback>
    );
}

export default SearchBar;
