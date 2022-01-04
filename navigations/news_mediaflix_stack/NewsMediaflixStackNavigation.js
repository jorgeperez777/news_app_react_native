import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsMediaflix from '../../src/screens/news_mediaflix/NewsMediaflix';
import ShowNewsMediaflix from '../../src/screens/news_mediaflix/ShowNewsMediaflix';

const Stack = createNativeStackNavigator();

const NewsMediaflixStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsMedia"
        component={NewsMediaflix}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowNews"
        component={ShowNewsMediaflix}
        options={{title: 'Detalles'}}
      />
    </Stack.Navigator>
  );
};

export default NewsMediaflixStackNavigation;
