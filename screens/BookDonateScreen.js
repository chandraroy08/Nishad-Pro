import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';

import firebase from 'firebase';
import db from '../config'


export default class BookDonateScreen extends Component{
  render(){
    return(
      <View>
        <Text>
          Donate Book Screen
        </Text>
      </View>
    )
  }
}
  