import { RouteProp, StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { useEffect } from 'react';
import { PrimaryBtn } from '../../components/shared/PrimaryBtn';



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
                flex: 1,
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                textAlign: 'center'
            }}>{params.id} - {params.name}</Text>
            <PrimaryBtn
                onPress={() => navigation.dispatch(StackActions.popToTop())}
                label={'Inicio'}
            />
        </View>
    );
}


