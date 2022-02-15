import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const screenOptionsIcons = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'liveStream_tab_item':
      iconName = 'live-tv';
      break;
    case 'news_tab_item':
      iconName = 'language';
      break;
    case 'vod_tab_item':
      iconName = 'play-circle-fill';
      break;
    case 'Playlist_View':
      iconName = 'playlist-play';
      break;
    case 'More_Options':
      iconName = 'menu';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={30} />;
};
