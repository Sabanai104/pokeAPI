import styled from 'styled-components/native';

export const TouchableWithoutFeedback = styled.TouchableNativeFeedback`
    width: 100%;
`

export const SearchContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 45px;
    margin-top: 10px;
    border-radius: 15px;
    border: 2px solid #E0E0E0;
`;

export const SearchImage = styled.Image`
    width: 20px;
    height: 20px;
`;

export const SearchText = styled.TextInput`
    max-width: 80%;
    height: 45px;
    font-size: 15px;
    color: #666666;
    margin-left: 15px;
`;