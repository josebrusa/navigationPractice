import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

export const BottomMaterialNavigation = () => {


    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}>
            <Tab.Screen name="StackNavigator" component={StackNavigator} />
            <Tab.Screen name="profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}