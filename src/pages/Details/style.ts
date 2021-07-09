import styled from 'styled-components/native';


export const Background = styled.View`
    justify-content: space-between;
    align-items: center;
    background-color: #F7F7F7;
    width: 100%;
    height: 100%;
`;

export const PokeballImg = styled.Image`
    position: absolute;
    top: 2%;
    right: 3%;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-top: 25px;
`;
export const ArrowNameContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const NameText = styled.Text`
    font-size: 25px;
    text-transform: capitalize;
    font-weight: bold;
    color: white;
    margin-left: 15px;
    font-family: 'Poppins';
`;

export const IndiceText = styled.Text`
    font-size: 14px;
    text-transform: capitalize;
    font-weight: bold;
    color: white;
    font-family: 'Poppins';
`;

export const ArrowLeft = styled.TouchableOpacity`
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 8%;
`
export const ArrowRight = styled.TouchableOpacity`
    position: absolute;
    z-index: 1;
    top: 25%;
    right: 5%;
`

export const PokemonImage = styled.Image`
    width: 57%;
    height: 30%;
    top: 11%;
    position: absolute;
    z-index: 1;
`;

export const InfoBackgroundContainer = styled.View`
    width: 98%;
    height: 69%;
    background: white;
    justify-content: flex-end;
    margin-bottom: 4px;
    border-radius: 15px;
`
export const InfoContainer = styled.View`
    width: 100%;
    height: 86%;
    align-items: center;
`;

export const TypeContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    height: 30px;
`;

export const Type = styled.View`
    background: #74CB48;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 15px;
    border-radius: 15px;
`;

export const AboutContainer = styled.View`
    align-items: center;
    width: 100%;
    margin-top: 16px;
`;

export const AbouContentContainer = styled.View`
margin-top: 10px;
    width: 80%;
    height: 80px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const WeightHeightContainer = styled.View`
    align-items: center;
    justify-content: center;
    padding-right: 24px;
    border-right-width: 1px;
    border-style: solid;
    border-color: #E0E0E0;
`;

export const WeightHeightIcon = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StatusContainer = styled.View`
    align-items: center;
    width: 100%;
    height: 67%;
`;

export const StatusInfoContainer = styled.View`
    flex-direction: row;
    margin-top: 7px;
    width: 95%;
    height: 90%;
`;

export const StatusNameContainer = styled.View`
    height: 50%;
    justify-content: space-evenly;
    align-items: flex-end;
    padding-right: 10px;
`;

export const StatusNumberContainer = styled.View`
    height: 50%;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 10px;
    border-left-width: 1px;
    border-style: solid;
    border-color: #E0E0E0;
`

export const StatusBarContainer = styled.View`
    align-items: center;
    height: 50%;
    justify-content:space-around;
    padding-left: 15px;
`;


