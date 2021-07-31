import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

const data = [
  {
    imageUrl: require('_assets/images/b.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/images/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/images/a.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/images/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/images/a.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/images/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/images/a.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/images/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/images/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
  {
    imageUrl: require('_assets/images/a.jpeg'),
    name: 'Evin Oğuz',
    date: '15.59',
  },
  {
    imageUrl: require('_assets/images/b.jpeg'),
    name: 'Buse Yazılım',
    date: '08.43',
  },
];

const Chats = () => {
  const item = ({item: {imageUrl, name, date}, index}) => (
    <View
      style={{
        paddingLeft: '1%',
        paddingVertical: 14,
      }}>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={{width: '11%', height: 40, borderRadius: 70}}
            source={imageUrl}
          />
          <Text
            style={{
              color: '#c7cbcf',
              width: '60%',
              padding: 15,
              paddingTop: 8,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: '#93a0a8',
              width: '20%',
              padding: 15,
              paddingTop: 8,
              fontSize: 13,
              fontWeight: 'bold',
              textAlign: 'right',
            }}>
            {date}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#101d25',
      }}>
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(d, i) => i.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#ffffff22',
              alignSelf: 'center',
            }}></View>
        )}
      />
    </View>
  );
};

export {Chats};
