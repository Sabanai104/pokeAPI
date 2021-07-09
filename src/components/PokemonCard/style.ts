import styled from 'styled-components/native';

export const Touchable = styled.TouchableWithoutFeedback`
    width: 100%;
    height: 100%;
    border: 0;
    margin: 0;
    padding: 0;
`

export const PokemonCardStyle = styled.View`
    justify-content: space-between;
    width: 31.34%;
    height: 140px;
    border: 2.5px solid #74CB48;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
`;

export const TextIndice = styled.Text`
    width: 90%;
    color: black;
    text-align: right;
    font-size: 11px;
    margin-top: 3px;
`;

export const PokemonImg = styled.Image`
    width: 80px;
    height: 75px;
`;

export const PokemonTextContainer = styled.View`
    width: 102%;
    height: 20%;
    padding-top: 4px;
    margin-bottom: -1px;
    background-color:#74CB48;
`;


