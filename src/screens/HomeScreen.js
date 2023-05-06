import { View, Text, StyleSheet, SafeAreaView, Button, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Header1 from '../components/Header1';
import SearchBar from '../components/SearchBar';


const HomeScreen = (props) => {
  const {navigation} = props; 
  return (
   <SafeAreaView style={styles.container}>
   <Header1 />
   <SearchBar/>
   </SafeAreaView>
   
  
  )
}


const styles = StyleSheet.create({
 container:{
  flex:1,
  backgroundColor:'#eee',
 },


})
export default HomeScreen
