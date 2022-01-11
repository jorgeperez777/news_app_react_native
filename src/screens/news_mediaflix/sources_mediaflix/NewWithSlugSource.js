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
import {axiosRequest} from '../../../../src/lib/commons';
import ContainerNewCard from '../../../lib/components/ContainerNewCard';
import {HeadersMainViewNews} from '../../../lib/components/HeadersMainView';
import {ShowSourceNewsList} from '../../../lib/components/SecundaryHeaders';
import SourcesList from '../../../lib/components/SourcesList';
import {GET_NEWS_LIST} from '../../../lib/queries/news_mediaflix_queries';
import {GET_SOURCES_LIST} from '../../../lib/queries/sources_news_querie';

const NewWithSlugSource = ({...props}) => {
  const {route, navigation} = props;
  const [newsMedia, setNewsMedia] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  //   console.log(route);

  const getNews = () => {
    setIsLoading(true);
    axiosRequest(GET_NEWS_LIST, {
      version_image: 'thumb',
      filter: {
        source_slug: route.params.slug,
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
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };
  const emptyRender = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {!isLoading && <Text>Sin contenido disponible</Text>}
      </View>
    );
  };

  useEffect(() => {
    getNews();
  }, [currentPage]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ShowSourceNewsList
        title={route.params.title}
        colorBgStatusBar={'#fff'}
        barStyle={'dark-content'}
        colorBgHeader={'#fff'}
        colorTitle={'#000'}
        navigation={navigation}
      />
      <FlatList
        data={newsMedia}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={emptyRender}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        style={styles.itemFlatListStyle}
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

export default NewWithSlugSource;
