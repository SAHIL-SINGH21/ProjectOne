
import { View, Text,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const STATE = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"lightblue",height:100,borderRadius:20,margin:10}}>
      <Text style={{fontSize:50,fontStyle:"italic",fontWeight:"900"}}>App developer</Text>
    </View>
    </TouchableOpacity>
    <Image/>
    </SafeAreaView>
  )
}

export default STATE;