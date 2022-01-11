import axios from 'axios';
import {TENANT, URLAPI} from '../../api_client/config_client';
import {Share, Alert} from 'react-native';

export const axiosRequest = (query, variables) => {
  return axios({
    url: URLAPI,
    method: 'post',
    headers: {'Content-Type': 'application/json', 'current-tenant': TENANT},
    data: {
      query: query,
      variables: variables,
    },
  });
};

export const shareNote = async (url, title) => {
  try {
    const result = await Share.share({
      message: url,
      title: title,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        console.log({actionResultSharedActivity: result});
      } else {
        // shared
        console.log({actionResultShared: result});
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
      console.log({actionResultDismissed: result});
    }
  } catch (error) {
    alert(error.message);
  }
};
