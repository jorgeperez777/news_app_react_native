import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

const ActivityIndicatorGlobal = () => {
  return (
    <View style={styles.loaderStyle}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default ActivityIndicatorGlobal;

const styles = StyleSheet.create({
  loaderStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
