import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'

const SecondScreen = ({ navigation }) => {
  const user = [
    {
      id: 1,
      name: "sahil"
    },
    {
      id: 2,
      name: "sahil"
    },
    {
      id: 3,
      name: "sahil"
    },
    {
      id: 4,
      name: "sahil"
    },
    {
      id: 5,
      name: "sahil"
    }
  ]
  return (
    <View >
      <Text>SecondScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Third")}
      />
      <View style={{marginBottom:120}}>
        <FlatList
          style={{ margin: 10 }}
          data={user}
          renderItem={({ item }) => <View style={{ borderColor: "black", borderWidth: 2, margin: 2, borderRadius: 15 }}>

            <Text style={{ fontSize: 30, margin: 20,textAlign:"center", padding: 10, borderRadius: 30, backgroundColor: "purple" }}>{item.name}</Text>
            <Text style={{ fontSize: 30, margin: 20,textAlign:"center", padding: 10, borderRadius: 30, backgroundColor: "purple" }}>{item.id}</Text>

          </View>
          }

        />
      </View>
    </View>



  )
}

export default SecondScreen