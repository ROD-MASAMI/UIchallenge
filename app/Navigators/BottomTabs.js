import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import Schedule from '../Screens/Schedule';
import Like from '../Screens/Like';
import Search from '../Screens/Search';

import {Colors} from '../Config';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: Colors.Secondary,
          tabBarInactiveTintColor: Colors.Gray,
          tabBarStyle: {
            backgroundColor: Colors.Primary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 60,
          },
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <Icon1
                name="home"
                size={30}
                color={focused ? Colors.Secondary : Colors.Gray}
              />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <Icon2
                name="search"
                size={30}
                color={focused ? Colors.Secondary : Colors.Gray}
              />
            ),
          }}
        />
        <Tab.Screen
          name="like"
          component={Like}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <Icon2
                name="heart"
                size={30}
                color={focused ? Colors.Secondary : Colors.Gray}
              />
            ),
          }}
        />
        <Tab.Screen
          name="schedule"
          component={Schedule}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <Icon3
                name="calendar-text-outline"
                size={30}
                color={focused ? Colors.Secondary : Colors.Gray}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
