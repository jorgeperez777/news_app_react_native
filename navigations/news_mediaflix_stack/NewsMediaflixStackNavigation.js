import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsMediaflix from '../../src/screens/news_mediaflix/NewsMediaflix';
import ShowNewsMediaflix from '../../src/screens/news_mediaflix/ShowNewsMediaflix';
import NewWithSlugSource from '../../src/screens/news_mediaflix/sources_mediaflix/NewWithSlugSource';

const Stack = createNativeStackNavigator();
const NewsMediaflixStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name="NewsMedia"
        component={NewsMediaflix}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowNews"
        component={ShowNewsMediaflix}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowSourceNewList"
        component={NewWithSlugSource}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NewsMediaflixStackNavigation;
