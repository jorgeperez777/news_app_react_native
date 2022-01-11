import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

const ContainerSource = props => {
  const {item, onPress} = props;
  return (
    <View
      style={{backgroundColor: '#fff', paddingHorizontal: 2, paddingBottom: 5}}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)')}
        onPress={onPress}>
        <View style={{backgroundColor: '#EEEEEE'}}>
          <Text style={{padding: 10, color: 'black'}}>{item.name}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ContainerSource;

const styles = StyleSheet.create({});
