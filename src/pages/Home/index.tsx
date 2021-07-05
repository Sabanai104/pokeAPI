import React from 'react';
import { Text } from 'react-native';

import {
    Background,
    MainContainer,
    HeaderView,
    ImageTitleContainer,
    Image,
    Title,
    FilterContainer,
    FilterText,
    FilterImage
} from './style';

const Home = () => {
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
                    <FilterContainer>
                        <FilterText>#</FilterText>
                        <FilterImage source={require('../../assets/Vector.png')} />
                    </FilterContainer>
                </HeaderView>
            </MainContainer>
        </Background>
    )
}

export default Home;