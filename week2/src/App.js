import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {Navigation} from '_/Navigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#101d25'} />
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </>
  );
};

export {App};
