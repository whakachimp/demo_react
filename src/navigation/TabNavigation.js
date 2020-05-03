import React from 'react';
import Home from '../page/Home';
import Cars from '../page/Cars';
import User from '../page/UserAccount';
import Counter from '../page/Counter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default (props) =>{
    return(
        
        <Tab.Navigator initialRouteName="Home" headerMode="none">
            <Tab.Screen name="Home" component={Home} options={{title:"Home Page"}}></Tab.Screen>
            <Tab.Screen name="Cars" component={Cars}></Tab.Screen>
            <Tab.Screen name="User" component={User}></Tab.Screen>
            <Tab.Screen name="Counter" component={Counter}></Tab.Screen>
        </Tab.Navigator>
    )
}