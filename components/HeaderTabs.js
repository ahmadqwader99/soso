import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HeaderTabs = () => {
const [activeTab, setAciveTab] = useState('Delivery')

  return (
    <View style={{flexDirection: 'row', alignSelf:'center'}}>
      <HeaderButton text = 'Delivery' btnColor='black' textColor='white' activeTab={activeTab}  setAciveTab={setAciveTab}/>
      <HeaderButton text = 'Pickup' btnColor='white' textColor='black'  activeTab={activeTab}  setAciveTab={setAciveTab}/>
    </View>
  )
}

const HeaderButton =(props) => (
    
        <TouchableOpacity style={{ 
            backgroundColor:props.activeTab===props.text ? 'black' : 'white',
            paddingVertical:6,
            paddingHorizontal:16,
            borderRadius:30
            }}
            onPress={() => props.setAciveTab(props.text)}
            >
                
        <Text style={{color:props.activeTab===props.text ? 'white' : 'black', fontSize:15,fontWeight:'900'}}>{props.text}</Text> 
        </TouchableOpacity>
   
    )
export default HeaderTabs