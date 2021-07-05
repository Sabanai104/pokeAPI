import styled from 'styled-components/native';

export const Background = styled.View`
    justify-content: center;
    align-items: center;
    background-color: #F7F7F7;
    width: 100%;
    height: 100%;
`;

export const MainContainer = styled.View`
    width: 92%;
    height: 100%;
`;

export const HeaderView = styled.View`
    flex-direction: row;
    width: 100%;
    height: 5%;
    margin-top: 24px;
    justify-content: space-between;
    align-items: center;
`;


export const ImageTitleContainer = styled.View`
     flex-direction: row;
     align-items: center;
`;

export const Image = styled.Image `
    width: 24px;
    height: 24px;
`;

export const Title = styled.Text`
    margin-left: 16px;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
`;

export const FilterContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FilterText = styled.Text`
    font-size: 14px;
    font-weight: 500;
`;

export const FilterImage = styled.Image`
    width: 10px;
    height: 19px;
`;