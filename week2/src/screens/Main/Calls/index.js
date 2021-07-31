import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {
    imageUrl: require('_assets/images/a.jpeg'),
    name: 'Evin Oğuz',
    call: <AntDesign name={'videocamera'} color={'#02ab93'} size={20} />,
  },
  {
    imageUrl: require('_assets/images/b.jpeg'),
    name: 'Buse Yazılım',
    call: <Ionicons name={'call-outline'} color={'#02ab93'} size={20} />,
  },
  {
    imageUrl: require('_assets/images/a.jpeg'),
    name: 'Aaaaa',
    call: <Ionicons name={'call-outline'} color={'#02ab93'} size={20} />,
  },
  {
    imageUrl: require('_assets/images/a.jpeg'),
    name: 'Evin Oğuz',
    call: <AntDesign name={'videocamera'} color={'#02ab93'} size={20} />,
  },
];

const Calls = () => {
  const item = ({item: {imageUrl, name, call}, index}) => (
    <View
      style={{
        paddingLeft: '1%',
        paddingVertical: 14,
      }}>
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
          <TouchableOpacity
            style={{
              color: '#93a0a8',
              width: '20%',
              padding: 15,
              paddingTop: 8,
              fontSize: 13,
              fontWeight: 'bold',
              textAlign: 'right',
            }}>
            {call}
          </TouchableOpacity>
        </View>
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

export {Calls};
