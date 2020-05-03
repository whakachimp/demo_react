import React from 'react';
import Counter from '../page/Counter';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from '../navigation/TabNavigation';


const Stack = createStackNavigator()
export default (props) =>{
    return(

        <Stack.Navigator initialRouteName="TabNavigation" headerMode="none">
            <Stack.Screen name="TabNavigation" component={TabNavigation}></Stack.Screen>
            <Stack.Screen name="Counter" component={Counter}></Stack.Screen>
        </Stack.Navigator>
    )
}