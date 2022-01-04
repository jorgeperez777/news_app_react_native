import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaylistYoutube from '../../src/screens/playlist_youtube/PlaylistYoutube';
const Stack = createNativeStackNavigator();
const PlaylistYoutubStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Playlist"
        component={PlaylistYoutube}
        options={{title: 'Live Stream'}}
      />
    </Stack.Navigator>
  );
};

export default PlaylistYoutubStackNavigation;
