import {Platform} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_CONFIG_DEVICE} from '../src/lib/queries/config_device_querie';

export const getConfigDevicesMediaflix = async () => {
  const variableQuery = {
    filter: {
      type_device: Platform.OS === 'android' ? 'ANDROID' : 'IOS',
    },
  };
  try {
    const {error, data} = await useQuery(GET_CONFIG_DEVICE, {
      variables: variableQuery,
    });
    // console.log(data);
    if (data != null) {
      if (error) {
        return null;
      } else {
        return data;
      }
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
