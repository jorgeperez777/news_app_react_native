import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ShowNewHeader = ({...props}) => {
  const {
    title,
    colorBgStatusBar,
    barStyle,
    colorBgHeader,
    colorTitle,
    navigation,
    onPressAdd,
    onPressRemove,
  } = props;

  return (
    <>
      <StatusBar backgroundColor={colorBgStatusBar} barStyle={barStyle} />
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: colorBgHeader,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.goBack();
            }}
            background={TouchableNativeFeedback.Ripple('', true)}>
            <View>
              <Icon
                name="arrow-back-ios"
                size={20}
                color="black"
                style={styles.iconsStyles}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: colorTitle,
            fontWeight: 'bold',
            justifyContent: 'center',
          }}>
          {title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{paddingHorizontal: 10}}>
            <TouchableNativeFeedback
              onPress={onPressRemove}
              background={TouchableNativeFeedback.Ripple('', true)}>
              <View>
                <Icon
                  name="remove"
                  size={20}
                  color="black"
                  style={styles.iconsStyles}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
          <TouchableNativeFeedback
            onPress={onPressAdd}
            background={TouchableNativeFeedback.Ripple('', true)}>
            <View>
              <Icon
                name="add"
                size={20}
                color="black"
                style={styles.iconsStyles}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconsStyles: {
    padding: 5,
  },
});