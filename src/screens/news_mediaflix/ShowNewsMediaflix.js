import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {axiosRequest} from '../../lib/commons';
import {ShowNewHeader} from '../../lib/components/SecundaryHeaders';
import {parseDateNews} from '../../lib/methods/formatDate';
import {GET_NEW_BY_ID} from '../../lib/queries/news_mediaflix_queries';
import HTMLView from 'react-native-htmlview';

const ShowNewsMediaflix = ({...props}) => {
  const {route, navigation} = props;
  const [newItem, setNewItemData] = useState(null);
  const [changeFontSize, setFontSizes] = useState(15);
  useEffect(() => {
    axiosRequest(GET_NEW_BY_ID, {id: route.params.id, ptype: 'youtube'}).then(
      result => {
        if (result.status == 200) {
          setNewItemData(result.data.data.getNewsItem);
        }
      },
    );
  }, []);

  if (!changeFontSize) {
    return null;
  }

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <ShowNewHeader
        navigation={navigation}
        title="Detalles"
        colorBgStatusBar={'#fff'}
        barStyle={'dark-content'}
        colorBgHeader={'#fff'}
        colorTitle={'#000'}
        onPressAdd={() => {
          if (changeFontSize < 40) {
            setFontSizes(changeFontSize + 10);
          }
        }}
        onPressRemove={() => {
          if (changeFontSize > 15) {
            setFontSizes(changeFontSize - 10);
          }
        }}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ShowContent item={newItem} changeFontSize={changeFontSize} />
      </ScrollView>
    </View>
  );
};

const ShowContent = props => {
  const {item, changeFontSize} = props;
  let url_image =
    item == null
      ? null
      : item.media.images.length == 0
      ? null
      : item.media.images[0].url;

  const htmlStyleSheet = StyleSheet.create({
    p: {
      color: 'black',
      fontSize: changeFontSize,
    },
    b: {
      color: 'black',
      fontSize: changeFontSize,
    },
  });

  return item == null ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator
        size="large"
        style={{flex: 1, alignContent: 'center'}}
      />
    </View>
  ) : (
    <View>
      <Image
        source={{
          uri: url_image,
        }}
        style={styles.imageStyle}
      />
      <Text style={styles.titleStyle}>{item.title}</Text>
      <Text style={styles.dateStyle}>{parseDateNews(item.publishDate)}</Text>
      <Text style={styles.sourceStyle}>{item.source.name}</Text>
      <View style={styles.bodyStyle}>
        <HTMLView
          value={`<div>${item.body.replace(/(\r\n|\n|\r)/gm, '')}</div>`}
          stylesheet={htmlStyleSheet}
        />
      </View>
    </View>
  );
};

export default ShowNewsMediaflix;

const styles = StyleSheet.create({
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
  },
  dateStyle: {
    paddingVertical: 5,
    paddingLeft: 10,
    color: 'black',
  },
  sourceStyle: {
    paddingBottom: 5,
    paddingLeft: 10,
  },
  bodyStyle: {
    padding: 10,
  },
});
