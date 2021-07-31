import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const tabs = [
  {
    title: <AntDesign name={'camerao'} color={'#02ab93'} size={20} />,
    name: 'StatusIcon',
  },
  {title: 'SOHBETLER', name: 'Chats'},
  {title: 'DURUM', name: 'Status'},
  {title: 'ARAMALAR', name: 'Calls'},
];

const TabBar = ({state: {index}, navigation: {jumpTo}}) => {
  const item = ({title, name, i}) => (
    <TouchableOpacity
      style={style.tabButton}
      key={i}
      onPress={() => jumpTo(name)}>
      <Text
        style={{
          color: index===i ? '#02ab93' : '#93a0a8',
          fontWeight: 'bold',
          paddingHorizontal: 18,
        }}>
        {title}
      </Text>
      <View
        style={{
          height: 3,
          width: '100%',
          backgroundColor: '#02ab93',
          marginTop: 15,
          borderRadius: 10,
          alignSelf: 'baseline',
          marginBottom: 0,
          display: index === i ? 'flex' : 'none',
        }}></View>
    </TouchableOpacity>
  );
  return (
    <View style={style.container}>
        {tabs.map((d, i) => item({...d, i}))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#232d36',
  },
  tabButton: {
    paddingVertical: 20,
  },
});
export {TabBar};
