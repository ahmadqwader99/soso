 import { View, Text, SafeAreaView, ScrollView } from 'react-native'
 import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import { useEffect, useState } from 'react'
import ResturantItems, { LocalResturants } from '../components/ResturantItems'

const YELP_API_KEY = '62xQGiwVmLdI_BSCuxblphT6Y_nm0jdOylTm6tKwqJediMv1uh9my04AOYIP9EoilmIb-QSNbkUmy6wiF0CayFR9n9pGsCkjPbl-TLXv6iDH_2V3bljfXlV6mKj4Y3Yx'


export default function Home() {
  const [resturantData, setResturantData] = useState(LocalResturants)
  const [place,setPlace] = useState("jerusalem")
  const getResturantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${place}`;


    const apiOptions = {
      headers: {
        "Authorization": `bearer ${YELP_API_KEY}`
      },
    }

    fetch(yelpUrl,apiOptions)
      .then((res) => res.json())
      .then(json => {
         console.log("res: " , json);
          setResturantData(json.businesses)
      });
   
   
  }

  useEffect(() => {
    getResturantsFromYelp();
  }, [])


  return (
   <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
     <View style={{ backgroundColor: 'white', padding: 15 }}>
       <HeaderTabs />
       <SearchBar />
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
       <Categories />
       <ResturantItems resturantData={resturantData || []} />
     </ScrollView>
   </SafeAreaView>
 )
}






