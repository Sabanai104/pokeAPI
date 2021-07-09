import React from 'react';
import * as Progress from 'react-native-progress';
import { SecondLoadingContainer } from './style';

const SecondLoading = () => {
    return (
        <SecondLoadingContainer >
                <Progress.CircleSnail size={70} thickness={4} />
        </SecondLoadingContainer>
    )
}

export default SecondLoading;
