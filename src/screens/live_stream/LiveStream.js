import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeadersMainViewLiveStream} from '../../lib/components/HeadersMainView';

const LiveStream = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeadersMainViewLiveStream
        title="Tv en Vivo"
        colorBgStatusBar={'#fff'}
        barStyle={'dark-content'}
        colorBgHeader={'#fff'}
        colorTitle={'#000'}
      />
      <Text>LiveStream</Text>
    </View>
  );
};

export default LiveStream;

const styles = StyleSheet.create({});
