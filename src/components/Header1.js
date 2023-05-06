import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"


const Header1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <AntDesign style={styles.mailBox} name='mail' size={24} />
                <Text style={styles.resturantName}>Meats</Text>
                <AntDesign style={styles.message} name='message1' size={24} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center' , 
        padding:15,
    },

    mailBox: {
       
    },

    resturantName: {
        fontSize: 35,
        fontWeight: 'bold',
    },

    message: {
       
    }



})

export default Header1