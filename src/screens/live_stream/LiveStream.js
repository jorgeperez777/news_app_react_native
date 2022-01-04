import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SingleHeader from '../../lib/components/SingleHeader';

const LiveStream = () => {
  return (
    <View>
      <SingleHeader title="Tv en Vivo"colorBgStatusBar={'#fff'}barStyle={'dark-content'}colorBgHeader={'#fff'}colorTitle={'#000'}/>
      <Text>LiveStream</Text>
    </View>
  );
};

export default LiveStream;

const styles = StyleSheet.create({});
