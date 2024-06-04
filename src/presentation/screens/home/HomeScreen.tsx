import { View } from 'react-native';
import { PrimaryBtn } from '../../components/shared/PrimaryBtn';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import type { RootStackParams } from '../../routes/StackNavigator';


export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>()
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



