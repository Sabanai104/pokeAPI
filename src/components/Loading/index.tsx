import React from 'react';
import * as Progress from 'react-native-progress';
import { LoadingContainer } from './style';
import {cardColor} from '../../utils/CommonsMethods';

const Loading = ({color}: {color: string}) => {
    return (
        <LoadingContainer >
                <Progress.CircleSnail size={90} thickness={4} color={cardColor(color)} />
        </LoadingContainer>
    )
}

export default Loading;
