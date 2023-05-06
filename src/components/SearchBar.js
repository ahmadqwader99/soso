import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
const SearchBar = () => {
  return (
    <View style={styles.container}>
        <AntDesign style={styles.searchIcon} name='search1' size={25} />
        <TextInput style={styles.text} placeholder='search' />
      
    </View>
  )
}

const styles = StyleSheet.create({
container:{
alignItems:'center',
backgroundColor:'white',
borderRadius:50,
padding:7 ,
marginHorizontal:20,
marginTop:10,
flexDirection:'row',

},

searchIcon:{

},

text:{
   flex:1,
    fontSize:20,
    marginLeft:10,
   

}
})

export default SearchBar