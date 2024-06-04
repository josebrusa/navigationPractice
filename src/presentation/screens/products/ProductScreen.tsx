import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { useEffect } from 'react';



export const ProductScreen = () => {

    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])
    return (
        <View style={globalStyles.container}>
            <Text>
                Producto Screen
            </Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                textAlign: 'center'
            }}>{params.id} - {params.name}</Text>
        </View>
    );
}


