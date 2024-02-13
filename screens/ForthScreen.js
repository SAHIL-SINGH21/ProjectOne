import { View, Text,Button } from 'react-native'
import React,{useState} from 'react'

const ForthScreen = () => {
  const [name,setname] = useState("rahul is a good boy")
  return (
    <View style={{flex:1}}> 
      <Text style={{fontSize:30,textAlign:"center",margin:8}}>ForthScreen</Text>
      <Button
      title="change" onPress={()=>setname("ram is a good boy")}
      />
      <Child  name={name}/>
    </View >
  )
};
const Child = (props) => {
  return (
    <View style={{backgroundColor:"purple",borderColor:"green",borderWidth:4,borderRadius:18,margin:9}}>
      <Text style={{fontSize:30,textAlign:"center",padding:9}}>{props.name}</Text>
     


    </View>
  )
}

export default ForthScreen