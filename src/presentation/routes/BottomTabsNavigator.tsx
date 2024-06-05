import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';

import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator

            sceneContainerStyle={{
                backgroundColor: globalColors.background,

            }}
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: 'transparent'
                }
            }}

        >
            <Tab.Screen
                name="Inbox"
                options={{
                    tabBarIcon: ({ color }) => (

                        <IonIcon color={color} name='file-tray-full-outline' />
                    )
                }}
                component={Tab1Screen}
            />

            <Tab.Screen
                name="UpDate"
                options={{
                    tabBarIcon: ({ color }) => (

                        <IonIcon color={color} name='flash-outline' />
                    )
                }} component={TopTabsNavigator}
            />

            <Tab.Screen
                name="Inicio"
                options={{
                    tabBarIcon: ({ color }) => (

                        <IonIcon color={color} name='home-outline' />
                    )
                }} component={StackNavigator}
            />
        </Tab.Navigator>
    );
}