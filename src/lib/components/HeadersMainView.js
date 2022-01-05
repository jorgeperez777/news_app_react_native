import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HeadersMainViewNews = props => {
  const {title, colorBgStatusBar, barStyle, colorBgHeader, colorTitle} = props;
  return (
    <>
      <StatusBar backgroundColor={colorBgStatusBar} barStyle={barStyle} />
      <View
        style={{
          padding: 10,
          backgroundColor: colorBgHeader,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, color: colorTitle, fontWeight: 'bold'}}>
          {title}
        </Text>
        <View>
          <TouchableNativeFeedback
            onPress={() => {}}
            background={TouchableNativeFeedback.Ripple('', true)}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="search"
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

export const HeadersMainViewLiveStream = props => {
  const {title, colorBgStatusBar, barStyle, colorBgHeader, colorTitle} = props;
  return (
    <>
      <StatusBar backgroundColor={colorBgStatusBar} barStyle={barStyle} />
      <View style={{padding: 15, backgroundColor: colorBgHeader}}>
        <Text style={{fontSize: 20, color: colorTitle, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
    </>
  );
};

export const HeadersMainViewVodPrograms = props => {
  const {title, colorBgStatusBar, barStyle, colorBgHeader, colorTitle} = props;
  return (
    <>
      <StatusBar backgroundColor={colorBgStatusBar} barStyle={barStyle} />
      <View style={{padding: 15, backgroundColor: colorBgHeader}}>
        <Text style={{fontSize: 20, color: colorTitle, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
    </>
  );
};
export const HeadersMainViewNewsVodMoreContent = props => {
  const {title, colorBgStatusBar, barStyle, colorBgHeader, colorTitle} = props;
  return (
    <>
      <StatusBar backgroundColor={colorBgStatusBar} barStyle={barStyle} />
      <View style={{padding: 15, backgroundColor: colorBgHeader}}>
        <Text style={{fontSize: 20, color: colorTitle, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
    </>
  );
};

export const HeadersMainViewNewsPlaylist = () => {
  const {title, colorBgStatusBar, barStyle, colorBgHeader, colorTitle} = props;
  return (
    <>
      <StatusBar backgroundColor={colorBgStatusBar} barStyle={barStyle} />
      <View style={{padding: 15, backgroundColor: colorBgHeader}}>
        <Text style={{fontSize: 20, color: colorTitle, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconsStyles: {
    padding: 5,
  },
});
