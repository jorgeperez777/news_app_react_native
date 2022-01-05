import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {parseDateNews} from '../methods/formatDate';

const ContainerNewCard = props => {
  const {item, onPress} = props;
  let url_image =
    item.media.images.length == 0 ? null : item.media.images[0].url;
  return (
    <TouchableNativeFeedback style={styles.buttonContainer} onPress={onPress}>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: url_image,
          }}
        />
        <Text style={styles.titleStyle} numberOfLines={3} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.dateNewStyle}>
          {parseDateNews(item.publishDate)}
        </Text>
        <View style={styles.rowSourceShared}>
          <Text style={styles.sourceStyle}>{item.sourceName}</Text>
          <Icon
            name="share"
            size={25}
            color="black"
            style={styles.iconStyle}
            onPress={() => {}}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ContainerNewCard;

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
});
