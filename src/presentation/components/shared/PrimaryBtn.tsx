import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
    onPress: () => void;
    label: string;
}


export const PrimaryBtn = ({ label, onPress }: Props) => {

    return (
        <Pressable
            onPress={() => onPress()}
            style={globalStyles.primaryBtn}>
            <Text style={globalStyles.btnText}>
                {label}
            </Text>
        </Pressable>
    );
}


