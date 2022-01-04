import React from 'react';
import {GET_CONFIG_DEVICE} from '../../queries/config_device_querie';
import {useQuery} from '@apollo/client';
import {Platform, View, ActivityIndicator} from 'react-native';
import Home from './Home';

const ConfigHome = () => {
  const variableQuery = {
    filter: {
      type_device: Platform.OS === 'android' ? 'ANDROID' : 'IOS',
    },
  };
  const {loading, data} = useQuery(GET_CONFIG_DEVICE, {
    variables: variableQuery,
  });
  //   console.log(data);

  return loading ? <LoadingView /> : <Home dataResponse={data} />;
};

const LoadingView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const ErrorView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>!Ups ha ocurrido un error, intente más tarde.</Text>
    </View>
  );
};

export default ConfigHome;
