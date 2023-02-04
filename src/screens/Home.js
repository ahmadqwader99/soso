
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'


// import one from '../../src/images/city.jpeg'
import axios from 'axios';
import { Axios } from 'react-native-axios';
import Images from '../assets/images';
import ScreensName from '../../route/ScreensName';

const Home = (props) => {

  const [city, setCity] = useState('');
  const [bg, setbg] = useState(Images.cat());
  const [bgName, setbgName] = useState("cat");
  const getWeather = async () => {
    if (!city.trim()) return
    console.log("wait")

    try {
      const res = await axios.get()

      console.log(res.data)
    } catch (error) {
      console.log("in error")
      console.log(error);
    }

  }

  // const city = require('../assets/images/city.jpeg') ; 

  const onTextPress = () => {
    props.navigation.navigate(ScreensName.page2); 
  }

  useEffect(() => {
    setInterval(() => {
      const newImage = bgName == 'cat' ? Images.city() : Images.cat();
      const newImageName = bgName == 'cat' ? 'city' : 'cat';
      setbg(newImage);
      setbgName(newImageName);
    }, 1500)
  }, [])

  return (
    <ImageBackground source={bg} style={Styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.textInputContainer}>
          <TextInput
            style={Styles.textInput}
            value={city}
            placeholder='type your city name'
            onChangeText={(text) => setCity(text)}
          />
          <Text onPress={onTextPress}> ✔️</Text>
        </View>
      </SafeAreaView>

    </ImageBackground>
  )
}

export default Home

const Styles = StyleSheet.create({
  image: {
    flex: 1,
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

  textInput: {
    height: 40,
    //   width: '60%',
    fontWeight: '600',

  }
})