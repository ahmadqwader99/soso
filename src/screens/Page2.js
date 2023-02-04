import { View, Text, TextInput, StyleSheet, Button,  } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Page2 = () => {
const [enterGoalText, setEnterGoalText] = useState('')

function goalInputHandler(enteredText) {
setEnterGoalText(enteredText);
};

function addGoalHandler() {
  console.log(enterGoalText);
};


  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
              <TextInput style={styles.textInput}
               placeholder='your course goals!'
                onChangeText={goalInputHandler} />
        <Button title='Add goal' 
        onPress={addGoalHandler}/>
        </View>

        <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({

   appContainer:{
 flex: 1,
    paddingTop:50,
    paddingHorizontal: 16,
   },

   inputContainer:{
  flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
   },
  
   textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
   },

   goalsContainer:{
   flex: 5,
   },
  
  
  });

export default Page2