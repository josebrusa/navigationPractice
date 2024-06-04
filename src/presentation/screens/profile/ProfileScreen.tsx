import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PrimaryBtn } from "../../components/shared/PrimaryBtn";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {


    const { top } = useSafeAreaInsets()
    const navigator = useNavigation()
    return (
        <View style={{
            flex: 1,
            marginTop: top + 10,
            paddingHorizontal: 20
        }}>
            <Text style={{ marginBottom: 10 }}>ProfileScreen</Text>

            <PrimaryBtn onPress={() => navigator.dispatch(DrawerActions.toggleDrawer)} label="Abrir Menu"
            />
        </View>
    );
};

