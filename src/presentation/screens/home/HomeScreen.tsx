import { Pressable, Text, View } from 'react-native';
import { PrimaryBtn } from '../../components/shared/PrimaryBtn';
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import type { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';


export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
    //                 <HamburguerMenu />
    //             </Pressable>

    //         )
    //     })
    // }, [])


    return (
        <View style={globalStyles.container}>
            <HamburguerMenu />
            <PrimaryBtn
                onPress={() => navigation.navigate('Products')}
                label='Productos' />
            <PrimaryBtn
                onPress={() => navigation.navigate('Settings')}
                label='Ajustes' />
        </View>
    );
}



