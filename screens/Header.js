import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#EFD113'}}>
      <Text style={{fontSize:30,fontStyle:'italic',fontWeight:'bold'}}>NAVIGATION</Text>
    </SafeAreaView>
  )
}

export default Header