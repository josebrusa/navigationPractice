import { View, Text } from "react-native";
import { globalStyles } from "../../theme/theme";
import { PrimaryBtn } from '../../components/shared/PrimaryBtn';
import { StackActions, useNavigation } from "@react-navigation/native";


export const SettingsScreen = () => {

    const navigator = useNavigation()
    return (
        <View style={globalStyles.container}>
            <Text>
                Ajustes
            </Text>
            <PrimaryBtn
                onPress={() => navigator.goBack()}
                label={'Regresar'}
            />
            <PrimaryBtn
                onPress={() => navigator.dispatch(StackActions.popToTop())}
                label={'Inicio'}
            />
        </View>
    );
};

