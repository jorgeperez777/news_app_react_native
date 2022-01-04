import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LiveStream from '../../src/screens/live_stream/LiveStream';
const Stack = createNativeStackNavigator();

const LiveStreamStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="live"
        component={LiveStream}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LiveStreamStackNavigation;
