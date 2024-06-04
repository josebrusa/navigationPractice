import { Pressable, Text, View } from 'react-native';
import { PrimaryBtn } from '../../components/shared/PrimaryBtn';
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import type { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';


export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <Text>Menu</Text>
                </Pressable>
            )
        })
    }, [])
    return (
        <View style={globalStyles.container}>
            <PrimaryBtn
                onPress={() => navigation.navigate('Products')}
                label='Productos' />
            <PrimaryBtn
                onPress={() => navigation.navigate('Settings')}
                label='Ajustes' />
        </View>
    );
}



