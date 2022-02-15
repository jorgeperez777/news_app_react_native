import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {axiosRequest} from '../../../src/lib/commons';
import AvatarColumnist from '../../lib/components/AvatarColumnist';
import ContainerNewCard from '../../lib/components/ContainerNewCard';
import {HeadersMainViewNews} from '../../lib/components/HeadersMainView';
import NewsHighlights from '../../lib/components/NewsHighlights';
import SourcesList from '../../lib/components/SourcesList';
import {GET_NEWS_LIST} from '../../lib/queries/news_mediaflix_queries';
import {GET_SOURCES_LIST} from '../../lib/queries/sources_news_querie';

const NewsMediaflix = ({...props}) => {
  const {navigation} = props;
  const [newsMedia, setNewsMedia] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [sourcesMedia, setSourcesMedia] = useState([]);
  const [priorityMedia, setPriorityMedia] = useState([]);

  const getNews = () => {
    setIsLoading(true);
    axiosRequest(GET_NEWS_LIST, {
      version_image: 'thumb',
      filter: {
        publish_movil: 'TRUE',
        publish_date_movil: 'TRUE',
        pagination: {
          size_movil: '10',
          page_movil: currentPage.toString(),
        },
      },
    })
      .then(result => {
        if (result.status == 200) {
          setNewsMedia([...newsMedia, ...result.data.data.news]);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        setIsLoading(false);
      });
    axiosRequest(GET_SOURCES_LIST, {
      filter: {
        active: 'TRUE',
      },
    })
      .then(result => {
        if (result.status == 200) {
          setSourcesMedia(result.data.data.sources);
        }
      })
      .catch(function (error) {});
    axiosRequest(GET_NEWS_LIST, {
      filter: {
        excluded_priority_news: '0',
        publish: 'TRUE',
        publish_date_movil: 'TRUE',
      },
    })
      .then(result => {
        if (result.status == 200) {
          setPriorityMedia(result.data.data.news);
        }
      })
      .catch(function (error) {});
  };

  const renderLoader = () => {
    return isLoading && newsMedia.length > 0 ? (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  const emptyRender = () => {
    return !isLoading && newsMedia.length > 0 ? (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{refreshing ? '' : 'Sin contenido disponible'}</Text>
      </View>
    ) : refreshing == false ? (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : (
      <View></View>
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getNews();
  }, [currentPage]);

  const onRefresh = () => {
    setRefreshing(true);
    setNewsMedia([]);
    setSourcesMedia([]);
    setPriorityMedia([]);
    axiosRequest(GET_NEWS_LIST, {
      version_image: 'thumb',
      filter: {
        publish_movil: 'TRUE',
        publish_date_movil: 'TRUE',
        pagination: {
          size_movil: '10',
          page_movil: '1',
        },
      },
    })
      .then(result => {
        if (result.status == 200) {
          setNewsMedia(result.data.data.news);
          setRefreshing(false);
        } else {
          setRefreshing(false);
        }
      })
      .catch(function (error) {
        setRefreshing(false);
      });
    axiosRequest(GET_SOURCES_LIST, {
      filter: {
        active: 'TRUE',
      },
    })
      .then(result => {
        if (result.status == 200) {
          setSourcesMedia(result.data.data.sources);
        }
      })
      .catch(function (error) {});
    axiosRequest(GET_NEWS_LIST, {
      filter: {
        excluded_priority_news: '0',
        publish: 'TRUE',
        publish_date_movil: 'TRUE',
      },
    })
      .then(result => {
        if (result.status == 200) {
          setPriorityMedia(result.data.data.news);
        }
      })
      .catch(function (error) {});
  };

  return (
    <>
      <HeadersMainViewNews
        title="Noticias"
        colorBgStatusBar={'#fff'}
        barStyle={'dark-content'}
        colorBgHeader={'#fff'}
        colorTitle={'#000'}
      />
      {sourcesMedia && (
        <SourcesList data={sourcesMedia} navigation={navigation} />
      )}

      <FlatList
        data={newsMedia}
        renderItem={item => <CardItem item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderLoader}
        legacyImplementation={false}
        ListHeaderComponent={
          <HeaderComponents
            data={priorityMedia}
            isEmptyNewsData={newsMedia.length < 1}
            navigation={navigation}
          />
        }
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreItem}
        contentInset={{bottom: 20}}
        contentInsetAdjustmentBehavior="automatic"
        onEndReachedThreshold={0.1}
        style={styles.itemFlatListStyle}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        ListEmptyComponent={emptyRender}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </>
  );
};

const HeaderComponents = props => {
  const {data, isEmptyNewsData, navigation} = props;
  return isEmptyNewsData ? (
    <View />
  ) : (
    <View>
      {/* <AvatarColumnist /> */}
      <NewsHighlights data={data} navigation={navigation} />
      <AvatarColumnist />
      <View
        style={{
          flexDirection: 'row',
          opacity: 0.5,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <View
          style={{
            backgroundColor: '#CED0CE',
            height: 1,
            flex: 1,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            paddingHorizontal: 8,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Ultimas noticias
        </Text>
        <View
          style={{
            backgroundColor: '#CED0CE',
            height: 1,
            flex: 1,
            alignSelf: 'center',
          }}
        />
      </View>
    </View>
  );
};

const CardItem = props => {
  const {item, navigation} = props;
  return (
    <View>
      <ContainerNewCard
        item={item.item}
        onPress={() => {
          navigation.navigate('ShowNews', {
            id: item.item.id,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemFlatListStyle: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default NewsMediaflix;
