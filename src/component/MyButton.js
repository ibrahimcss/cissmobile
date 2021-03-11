import React, {useState} from 'react';
import {StyleSheet, Text,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native';

const MyButton = (props,) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:props.bgColor}]} onPress={() => navigation.navigate(props.navigateUrl)}>
      <Text style={[styles.text,{color:props.textColor}]}>{props.text}</Text>
    </TouchableOpacity>
  );

};
MyButton.propTypes={
  text:PropTypes.string.isRequired,
  bgColor:PropTypes.string,
  textColor:PropTypes.string,
  navigateUrl:PropTypes.string
}
const styles = StyleSheet.create({
  button:{
    paddingVertical:15,
    paddingHorizontal:10,
    borderRadius:3,
    alignItems:'center',
    marginTop:10
  },
  text:{
    fontSize:15
  }
});
export default MyButton;
