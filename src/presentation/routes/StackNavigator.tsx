import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { HamburguerMenu } from '../components/shared/HamburguerMenu';


export type RootStackParams = {
    Home: undefined;
    Products: undefined;
    Product: { id: number, name: string };
    Settings: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <>
            <HamburguerMenu />
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                }

            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Products" component={ProductsScreen} />
                <Stack.Screen name="Product" component={ProductScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </>
    );
}