import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function ResturantItems(props) {

    const ResturantImage = (props) => (
        <>
            <ImageBackground source={{ uri: props.image }} style={{ width: '100%', height: 180 }} >
                <TouchableOpacity style={{ alignItems:'flex-end' , paddingTop:10 , paddingRight:10 }}>
                    <AntDesign name='hearto' size={25} color='white' />
                </TouchableOpacity>
            </ImageBackground>

        </>
    )

    const ResturantInfo = (props) => (
        <View style={{
            flexDirection: 'row'
            , justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
        }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>30-40 min</Text>
            </View>
            <View style={{
                backgroundColor: '#eee',
                height: 30, width: 30,
                alignItems: 'center',
                borderRadius: 15,
                justifyContent: 'center',
            }}>
                <Text >{props.rating}</Text>
            </View>
        </View>
    )


    const renderResturants = () => {
        return props.resturantData.map((resturant, index) => (
            <TouchableOpacity activeOpacity={0.75} style={{ marginBottom: 30 }}>
                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
                    <ResturantImage image={resturant.image_url} />
                    <ResturantInfo name={resturant.name} rating={resturant.rating} />
                </View>
            </TouchableOpacity>

        ))
    }


    return (
        <View>
            {renderResturants()}
        </View>
    )
}






