
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React, {useState} from 'react'


import one from '../../src/images/city.jpeg'
import axios from 'axios';
import { Axios } from 'react-native-axios';

const Home = () => {

    const [city, setCity] = useState('');
    const getWeather = async () => {
      if(!city.trim()) return
     console.log("wait")

     try {
      const res = await axios.get()
      
      console.log(res.data)
     } catch (error) {
      console.log("in error")
      console.log(error);
     }

    }


  return (
    <ImageBackground source={one} style={Styles.image}>
        <SafeAreaView style={{flex:1}}>
       <View style = {Styles.textInputContainer}>
        <TextInput
        style={Styles.textInput}
        value = {city}
       placeholder = 'type your city name'
       onChangeText={(text) => setCity (text)}
      

        />
<Text onPress={getWeather}> ✔️</Text>
       </View>
        </SafeAreaView>
     
    </ImageBackground>
  )
}

export default Home

const Styles = StyleSheet.create({
    image:{
        flex:1,
    },

    textInputContainer: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        width: '60%',
        justifyContent: 'space-between',
    }, 

    textInput:{
      height: 40,
    //   width: '60%',
      fontWeight: '600',
       
    }
})