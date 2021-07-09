import React from 'react';
import * as Progress from 'react-native-progress';
import { View } from 'react-native';
import { LoadingContainer } from './style';
import {cardColor} from '../../utils/CommonsMethods';

const Loading = ({color}: {color: string}) => {
    return (
        <LoadingContainer >
                <Progress.CircleSnail size={120} thickness={6} color={cardColor(color)} />
        </LoadingContainer>
    )
}

export default Loading;
