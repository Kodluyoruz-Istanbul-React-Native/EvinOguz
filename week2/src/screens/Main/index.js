import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Chats, Status, Calls} from '_/screens';
import {TabBar} from '_/screens/Main/TabBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createMaterialTopTabNavigator();

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
      }}>
      <View style={styles.header}>
        <Text style={{color: '#93a0a8', fontSize: 20}}>WhatsApp</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '20%',
            justifyContent: 'space-around',
          }}>
          <AntDesign name={'search1'} color={'#93a0a8'} size={20} />
          <Entypo name={'dots-three-vertical'} color={'#93a0a8'} size={20} />
        </View>
      </View>
      {/*initialRouteName ile başlangıç sayfası sohbetler sayfası açılıyor. 
        name deki değerleri tabBara gönderilip stil verilir.
        component de belirtilen sayfa açılır
        */}
      <Tab.Navigator tabBar={TabBar} initialRouteName="Chats">
        <Tab.Screen name={'StatusIcon'} component={Status} />
        <Tab.Screen name={'Chats'} component={Chats} />
        <Tab.Screen name={'Status'} component={Status} />
        <Tab.Screen name={'Calls'} component={Calls} />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#232d36',
    paddingHorizontal: 25,
    paddingTop: 5,
  },
});
export {Main};
