import React from 'react';
import {View, Text,Image, FlatList} from 'react-native';

const data = [
  {imageUrl: require('_assets/images/a.jpeg'), name: 'Evin Oğuz'},
  {imageUrl: require('_assets/images/b.jpeg'), name: 'Buse Yazılım'},
  {imageUrl: require('_assets/images/a.jpeg'), name: 'Aaaaa'},
  {imageUrl: require('_assets/images/a.jpeg'), name: 'Evin Oğuz'},
  {imageUrl: require('_assets/images/b.jpeg'), name: 'Buse Yazılım'},
];

const Status = () => {
  const item = ({item: {imageUrl, name}, index}) => (
    <View
      style={{
        paddingLeft: '1%',
        paddingVertical: 14,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          style={{
            width: '11%',
            height: 40,
            borderRadius: 70,
            borderWidth: 2,
            borderColor: '#02ab93',
          }}
          source={imageUrl}
        />
        <Text
          style={{
            color: '#c7cbcf',
            width: '80%',
            padding: 15,
            paddingTop: 8,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
      </View>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#101d25',
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          style={{
            width: '11%',
            height: 40,
            margin: 20,
            borderRadius: 70,
          }}
          source={require('_assets/images/a.jpeg')}
        />
        <Text
          style={{
            color: '#c7cbcf',
            width: '80%',
            fontSize: 15,
            fontWeight: 'bold',
            paddingVertical: 22,
          }}>
          Durumum
        </Text>
      </View>

      <Text
        style={{
          color: '#93a0a8',
          paddingHorizontal: 18,
        }}>
        Son Güncellemeler
      </Text>
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

export {Status};
