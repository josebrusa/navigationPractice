import { View } from 'react-native';
import { PrimaryBtn } from '../../components/shared/PrimaryBtn';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';


export const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={globalStyles.container}>
            <PrimaryBtn
                onPress={() => navigation.navigate('Products' as never)}
                label='Productos' />
            <PrimaryBtn
                onPress={() => navigation.navigate('Settings' as never)}
                label='Ajustes' />
        </View>
    );
}



