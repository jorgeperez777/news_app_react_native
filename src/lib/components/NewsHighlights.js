import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_NOTE_URL_SHARE} from '../../../config/tenant_config/develop';
import {shareNote} from '../commons';
import {parseDateNews} from '../methods/formatDate';

const NewsHighlights = props => {
  const {data, navigation} = props;

  const dimension = Dimensions.get('window');
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  //   console.log({data: data});
  const renderItem = ({item, index}) => {
    let url_image =
      item.media.images.length == 0 ? null : item.media.images[0].url;
    let hasVideo = item.media.videos.length > 0 ? true : false;
    let urlShared =
      item.source.slug == null
        ? null
        : `${BASE_NOTE_URL_SHARE}${item.source.slug}/${item.slug_name}`;
    return (
      <View>
        <TouchableNativeFeedback
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('ShowNews', {
              id: item.id,
            });
          }}
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
                      : () => {
                          navigation.navigate('ShowNews', {
                            id: item.id,
                          });
                        }
                  }>
                  <View
                    style={{
                      backgroundColor: 'rgba(0,0,0,.6)',
                      minWidth: '100%',
                      minHeight: 250,
                      alignItems: 'baseline',
                      justifyContent: 'flex-end',
                    }}>
                    <Text
                      style={styles.titleStyle}
                      numberOfLines={3}
                      ellipsizeMode="tail">
                      {item.title}
                    </Text>
                    <Text style={styles.dateNewStyle}>
                      {parseDateNews(item.publishDate)}
                    </Text>
                    <View style={styles.rowSourceShared}>
                      <View
                        style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                        <Text style={styles.sourceStyle}>
                          {item.source.name}
                        </Text>
                        {urlShared && (
                          <View style={{padding: 5}}>
                            <ButtonCustom
                              iconName="share"
                              onPress={() => {
                                shareNote(urlShared, item.title);
                              }}
                            />
                          </View>
                        )}
                      </View>
                      {hasVideo && (
                        <View style={{padding: 5}}>
                          <Icon
                            name="play-circle-filled"
                            size={35}
                            color="white"
                          />
                        </View>
                      )}
                    </View>
                  </View>
                </TouchableNativeFeedback>
              </ImageBackground>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (
    <View style={{paddingBottom: 2}}>
      <Carousel
        ref={isCarousel}
        loop={true}
        autoplay={true}
        data={data}
        renderItem={renderItem}
        sliderWidth={dimension.width}
        itemWidth={dimension.width}
        showsHorizontalScrollIndicator={false}
        onSnapToItem={index => setIndex(index)}
      />
      <View
        style={{position: 'absolute', alignSelf: 'flex-end', marginTop: '55%'}}>
        <Pagination
          carouselRef={isCarousel}
          activeDotIndex={index}
          dotsLength={data.length}
          containerStyle={{}}
          tappableDots={false}
          dotStyle={{
            borderRadius: 5,
            backgroundColor: '#fff',
          }}
        />
      </View>
    </View>
  );
};
const ButtonCustom = props => {
  const {onPress, iconName} = props;

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', true)}
      onPress={onPress}>
      <View>
        <Icon name={iconName} size={25} color="white" />
      </View>
    </TouchableNativeFeedback>
  );
};
export default NewsHighlights;

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
    color: 'white',
  },
  sourceStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'white',
  },
  dateNewStyle: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'white',
  },
  rowSourceShared: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconStyle: {
    paddingRight: 10,
  },
  bodyStyle: {
    padding: 10,
  },
});
