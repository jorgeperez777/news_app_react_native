import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {axiosRequest} from '../../../src/lib/commons';
import ContainerNewCard from '../../lib/components/ContainerNewCard';
import SingleHeader from '../../lib/components/SingleHeader';
import {GET_NEWS_LIST} from '../../lib/queries/news_mediaflix_queries';

const NewsMediaflix = () => {
  const [newsMedia, setNewsMedia] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <ContainerNewCard item={item} />
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

  useEffect(() => {
    getNews();
  }, [currentPage]);

  return (
    <>
      <SingleHeader
        title="Noticias"
        colorBgStatusBar={'#fff'}
        barStyle={'dark-content'}
        colorBgHeader={'#fff'}
        colorTitle={'#000'}
      />
      <FlatList
        data={newsMedia}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.1}
        style={styles.itemFlatListStyle}
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
