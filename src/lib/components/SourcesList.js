import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ContainerSource from './ContainerSource';

const SourcesList = props => {
  const {data, navigation} = props;
  //   console.log({dataPropsSources: data});
  const renderItem = ({item}) => {
    return (
      <View>
        <ContainerSource
          item={item}
          onPress={() => {
            navigation.navigate('ShowSourceNewList', {
              slug: item.slug,
              title: item.name,
            });
          }}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SourcesList;

const styles = StyleSheet.create({});
