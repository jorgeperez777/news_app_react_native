import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VodMediaflix from '../../src/screens/vod_mediaflix/VodMediaflix';
const Stack = createNativeStackNavigator();

const VodStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Vod"
        component={VodMediaflix}
        options={{title: 'Live Stream'}}
      />
    </Stack.Navigator>
  );
};

export default VodStackNavigation;
