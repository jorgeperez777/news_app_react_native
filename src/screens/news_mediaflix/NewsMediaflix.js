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
} from 'react-native';
import {axiosRequest} from '../../../src/lib/commons';
import ContainerNewCard from '../../lib/components/ContainerNewCard';
import {HeadersMainViewNews} from '../../lib/components/HeadersMainView';
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
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <ContainerNewCard
          item={item}
          onPress={() => {
            navigation.navigate('ShowNews', {
              id: item.id,
            });
          }}
        />
      </View>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  const emptyRender = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {!isLoading && (
          <Text>{refreshing ? '' : 'Sin contenido disponible'}</Text>
        )}
      </View>
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
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
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

const styles = StyleSheet.create({
  itemFlatListStyle: {
    backgroundColor: '#fff',
  },
});

export default NewsMediaflix;
