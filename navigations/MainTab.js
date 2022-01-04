import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LiveStack from './livestream_stack/LiveStreamStackNavigation';
import NewsStack from './news_mediaflix_stack/NewsMediaflixStackNavigation';
import Vod from './vod_stack/VodStackNavigation';
import Playlist from './playlist_stack/PlaylistYoutubStackNavigation';
import MoreOptions from './more_options_stack/MoreOptionsStackNavigation';
import {DEFAULT_CONFIG_DEVICE} from '../config/tenant_config/develop';
import {
  screenOptions,
  screenOptionsIcons,
} from '../src/lib/methods/screenOpitonsIcons';

const Tabs = createBottomTabNavigator();

const MainTab = ({...props}) => {
  const {configDevices} = props;
  // console.log('Props MainTab');
  // console.log(configDevices.appConfigSections[0]);
  const appConfig =
    configDevices == null || Object.keys(configDevices).length == 0
      ? DEFAULT_CONFIG_DEVICE
      : configDevices;

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={'news_tab_item'}
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOptionsIcons(route, color),
        })}>
        <Tabs.Screen
          name="liveStream_tab_item"
          component={LiveStack}
          options={{
            headerShown: false,
            title: 'Tv en Vivo',
            tabBarItemStyle: {
              display: appConfig.appConfigSections[0].live_stream
                ? 'flex'
                : 'none',
            },
          }}
        />
        <Tabs.Screen
          name="news_tab_item"
          component={NewsStack}
          options={{
            headerShown: false,
            title: 'Noticias',
            tabBarItemStyle: {
              display: appConfig.appConfigSections[0].news ? 'flex' : 'none',
            },
          }}
        />
        <Tabs.Screen
          name="vod_tab_item"
          component={Vod}
          options={{
            headerShown: false,
            title: 'On demand',
            tabBarItemStyle: {
              display: appConfig.appConfigSections[0].vod ? 'flex' : 'none',
            },
          }}
        />
        <Tabs.Screen
          name="Playlist_View"
          component={Playlist}
          options={{
            headerShown: false,
            title: 'Playlist',
            tabBarItemStyle: {
              display: appConfig.appConfigSections[0].youtube ? 'flex' : 'none',
            },
          }}
        />
        <Tabs.Screen
          name="More_Options"
          component={MoreOptions}
          options={{
            headerShown: false,
            title: 'Más+',
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default MainTab;
