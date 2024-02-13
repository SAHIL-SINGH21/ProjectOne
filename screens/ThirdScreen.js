import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const ThirdScreen = ({ navigation }) => {
  const [name, setname] = useState("sahil...")
  return (
    <View>
     
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Forth")}
        />
 <Text style={{fontSize:30,textAlign:"center",margin:10}}>{name} </Text>
     
      <Button
        title="Go to Details"
        onPress={() => setname("singh is king")}
      />
      <View style={{}}>

        <Text style={{ fontSize: 30 }}> Name...</Text>

        <TextInput
          style={{ fontSize: 20, borderWidth: 3, borderColor: "black", margin: 10, padding: 12 }}
          placeholder='this is me...'
        />
        <Text style={{ fontSize: 30 }}> Class...</Text>

        <TextInput
          style={{ fontSize: 20, borderWidth: 3, borderColor: "black", margin: 10, padding: 12 }}
          placeholder='this is class...'
        />
        <Text style={{ fontSize: 30 }}> Roll No...</Text>

        <TextInput
          style={{ fontSize: 20, borderWidth: 3, borderColor: "black", margin: 10, padding: 12 }}
          placeholder='this is roll no...'
        />
      </View>
    </View>


  )
}

export default ThirdScreen;