import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Text } from 'react-native';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';

const Tab = createMaterialBottomTabNavigator();

export const BottomMaterialNavigation = () => {


    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#494fad"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}>
            <Tab.Screen name="Tab1" options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab1</Text>) }} component={Tab1Screen} />
            <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab2</Text>) }} component={Tab2Screen} />
            <Tab.Screen name="Tab3" options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab3</Text>) }} component={Tab3Screen} />
        </Tab.Navigator>
    );
}