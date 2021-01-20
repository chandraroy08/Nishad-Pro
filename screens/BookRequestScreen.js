import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class BookRequestScreen extends Component{
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