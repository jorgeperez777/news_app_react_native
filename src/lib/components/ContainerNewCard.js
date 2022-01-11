import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {parseDateNews} from '../methods/formatDate';
import HTMLView from 'react-native-htmlview';
import {shareNote} from '../commons';
import {BASE_NOTE_URL_SHARE} from '../../../config/tenant_config/develop';

const ContainerNewCard = props => {
  const {item, onPress} = props;
  let url_image =
    item.media.images.length == 0 ? null : item.media.images[0].url;
  let hasVideo = item.media.videos.length > 0 ? true : false;
  // console.log(item.source.slug);
  let urlShared =
    item.source.slug == null
      ? null
      : `${BASE_NOTE_URL_SHARE}${item.source.slug}/${item.slug_name}`;
  return (
    <TouchableNativeFeedback
      style={styles.buttonContainer}
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)')}>
      <View>
        <View>
          <ImageBackground
            style={styles.imageStyle}
            source={{
              uri: url_image,
            }}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)')}
              onPress={
                hasVideo
                  ? () => {
                      console.log('Go view youtube');
                    }
                  : onPress
              }>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.6)',
                  minWidth: '100%',
                  minHeight: 250,
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: hasVideo ? null : 'none',
                }}>
                <Icon name="play-circle-outline" size={60} color="white" />
              </View>
            </TouchableNativeFeedback>
          </ImageBackground>
        </View>
        <Text style={styles.titleStyle} numberOfLines={3} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.dateNewStyle}>
          {parseDateNews(item.publishDate)}
        </Text>
        {/* <View style={styles.bodyStyle}>
          <HTMLView
            value={`<div>${item.body.replace(/(\r\n|\n|\r)/gm, '')}</div>`}
            renderNode={renderNode}
            stylesheet={htmlStyleSheet}
          />
        </View> */}
        <View style={styles.rowSourceShared}>
          <Text style={styles.sourceStyle}>{item.sourceName}</Text>
          <View style={{padding: 10}}>
            {urlShared && (
              <ButtonCustom
                iconName="share"
                onPress={() => {
                  shareNote(urlShared, item.title);
                }}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

function renderNode(node, index) {
  if (node.class == 'p') {
    console.log(node);
    return (
      <View key={index}>
        <Text numberOfLines={2}>{node}</Text>
      </View>
    );
  }
}

const ButtonCustom = props => {
  const {onPress, iconName} = props;

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', true)}
      onPress={onPress}>
      <View>
        <Icon name={iconName} size={25} color="black" />
      </View>
    </TouchableNativeFeedback>
  );
};

export default ContainerNewCard;

const htmlStyleSheet = StyleSheet.create({
  p: {
    color: 'black',
    fontSize: 10,
  },
  b: {
    color: 'black',
    fontSize: 10,
  },
});

const styles = StyleSheet.create({
  buttonContainer: {
    // backgroundColor: "#DDDDDD",
    // padding: 0
  },
  imageStyle: {
    minWidth: '100%',
    minHeight: 250,
    paddingHorizontal: 0,
    backgroundColor: '#aaa',
  },
  titleStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    overflow: 'hidden',
  },
  sourceStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'black',
    overflow: 'hidden',
  },
  dateNewStyle: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'black',
    overflow: 'hidden',
  },
  rowSourceShared: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    paddingRight: 10,
  },
  bodyStyle: {
    padding: 10,
  },
});
