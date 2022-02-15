import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

const AvatarColumnist = () => {
  let data = [
    {
      id: 1,
      name: 'Gabriela Calderón de Burgos',
      url: 'https://apps-tvstream.nyc3.digitaloceanspaces.com/mediaflix/gabriela_calderon_de_burgos/images/5/original/jiqroijfrblbhlmyyetoxvo.jpeg',
    },
    {
      id: 2,
      name: 'Alberto Dahik Garzozi	',
      url: 'https://apps-tvstream.nyc3.digitaloceanspaces.com/mediaflix/alberto_dahik_garzozi/images/5/original/kjnwabmztvcsxmoqkucqmu.jpeg',
    },
    {
      id: 3,
      name: 'Andrés Quishpe	',
      url: 'https://apps-tvstream.nyc3.digitaloceanspaces.com/mediaflix/andres_quishpe/images/5/original/iomqujktrrhsdstjrsulx.jpeg',
    },
    {
      id: 4,
      name: 'Margarita Borjas	',
      url: 'https://apps-tvstream.nyc3.digitaloceanspaces.com/mediaflix/margarita_borjas/images/5/original/italaxrbofiduyforuoiu.jpeg',
    },
    {
      id: 5,
      name: 'Walter Spurrier Baquerizo	',
      url: 'https://apps-tvstream.nyc3.digitaloceanspaces.com/mediaflix/walter_spurrier_baquerizo/images/5/original/dzfuuiffaabhasgtdqho.jpeg',
    },
  ];
  return (
    <View style={{paddingVertical: 5, paddingHorizontal: 5}}>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 3,
          paddingHorizontal: 5,
        }}>
        <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
          Columnistas
        </Text>
      </View> */}

      <FlatList
        data={data}
        horizontal={true}
        renderItem={item => <CardItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const CardItem = props => {
  const {item, navigation} = props;

  return (
    <View>
      <TouchableHighlight style={styles.profileImgContainer} onPress={() => {}}>
        <Image
          source={{
            uri: item.item.url,
          }}
          style={styles.profileImg}
        />
      </TouchableHighlight>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: 75,
        }}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{color: '#000'}}>
          {item.item.name}
        </Text>
      </View>
    </View>
  );
};
export default AvatarColumnist;

const styles = StyleSheet.create({
  profileImgContainer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    borderColor: 'gray',
    borderWidth: 2,
    overflow: 'hidden',
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});
