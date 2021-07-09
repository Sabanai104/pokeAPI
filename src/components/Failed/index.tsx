import React from 'react';
import {View, Text} from 'react-native';

const Failed = () => {
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>
                Erro ao conectar com a API
            </Text>
        </View>
    );
}

export default Failed;
