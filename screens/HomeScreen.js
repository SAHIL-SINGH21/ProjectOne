
import { View, Text, SafeAreaView, TouchableOpacity, Image, Button, TextInput } from 'react-native'
import React  from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from './Header';



const HomeScreen = ({navigation}) => {

 

  return (
    
<View style={{ flex: 1 }}> 
<Header/>

    <SafeAreaView >
      <TouchableOpacity>
        <View style={{ alignItems: "center", backgroundColor: "lightblue", height: "60%", borderRadius: 20, margin: "3%", position: "relative" }}>
          <Text style={{ fontSize: 46, fontStyle: "italic", fontWeight: "900", marginTop: "5%" }}>App developer</Text>
        </View>
      </TouchableOpacity>
      <View style={{ width: '84%', backgroundColor: "white", margin: "8%", borderRadius: 20, position: "absolute", top: "15%" }}>
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: "6%" }}>Regester Here</Text>
        <View style={{ marginHorizontal: "8%" }}>
          <Text style={{ fontSize: 20, marginTop: "35%" }}> Name </Text>
          <TextInput
            style={{ height: "12%", borderWidth: 2, fontSize: 18, padding: 12, borderRadius: 15, borderColor: "lightblue", marginTop: "5%" }}
            placeholder='Name'
          />
          <Text style={{ fontSize: 20, marginTop: "10%" }}> Email </Text>
          <TextInput
            style={{ height: "12%", borderWidth: 2, fontSize: 18, padding: 12, borderRadius: 15, borderColor: "lightblue", marginTop: "5%" }}
            placeholder='Email'
          />
          <Text style={{ fontSize: 20, marginTop: "10%" }}> Password </Text>
          <TextInput
            style={{ height: "12%", borderWidth: 2, fontSize: 18, padding: 12, borderRadius: 15, borderColor: "lightblue", marginTop: "5%" }}
            placeholder='Password'
          />

        </View>

        <View >
          <Text style={{ textAlign: "center", margin: "5%", fontSize: 18 }}>I agree the Terms and conditions</Text>
        </View>
        <View>
          

          <Button title='on press'  
           onPress={() => navigation.navigate("Second")}
          />

        </View>
      </View>


    </SafeAreaView>
    </View>
  );
};

export default HomeScreen;