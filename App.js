/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import MainNavigation from './route/nav';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


export default function App() {


  return (
  <View style={styles.container}>
    <MainNavigation/>
  </View>
  
  )

}
const styles = StyleSheet.create({

  container:{
    flex:1,
  }
  




});


