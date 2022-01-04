import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoreOptions from '../../src/screens/more_options/MoreOptions';
const Stack = createNativeStackNavigator();

const MoreOptionsStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoreOption"
        component={MoreOptions}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MoreOptionsStackNavigation;
