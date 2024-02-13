
import React from 'react'
import Navigator from './screens/Navigation/Navigator'

const App = () => {
  return (
    <Navigator/>
  )
}

export default App















// import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
// import React from 'react'



// const App = () => {
//   return (

//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ justifyContent: "center", alignContent: "center", flexDirection: "row", position: "relative" }}>
//         <Image
//           style={{ height: 500, width: 400, borderRadius: 29 }}
//           source={require("./Src/Image/Maskgroup.png")} />
//       </View>
//       <View style={{ justifyContent: "space-between", alignContent: "space-between", flexDirection: "row", position: "absolute", top: 72, left: 30 }}>
//         <Image
//           style={{ height: 42, width: 42 }}
//           source={require("./Src/Image/Ellipse.png")} />


//       </View>
//       <View style={{ justifyContent: "space-between", alignContent: "space-between", flexDirection: "row", position: "absolute", top: 72, right: 30 }}>

//         <Image
//           style={{ height: 42, width: 42 }}
//           source={require("./Src/Image/Ellipse.png")} />

//       </View>

//       <View style={{ justifyContent: "space-between", alignContent: "space-between", flexDirection: "row", position: "absolute", top: 85, left: 44 }}>
//         <Image
//           style={{ height: 15, width: 10 }}
//           source={require("./Src/Image/123.png")} />


//       </View>
//       <View style={{ justifyContent: "space-between", alignContent: "space-between", flexDirection: "row", position: "absolute", top: 80.5, right: 39.9 }}>

//         <Image
//           style={{ height: 23, width: 23 }}
//           source={require("./Src/Image/Archive.png")} />

//       </View>
//       <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//         <TouchableOpacity>
//           <View style={{ width: 65, height: 19, backgroundColor: 'red', borderRadius: 8, margin: 10 }}>
//             <Text>this is me</Text>
//           </View>

//         </TouchableOpacity>
//         <TouchableOpacity>
//           <View style={{ width: 65, height: 19, backgroundColor: 'red', borderRadius: 8, margin: 10 }}>
//             <Text>this is me</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <View style={{ width: 65, height: 19, backgroundColor: 'red', borderRadius: 8, margin: 10 }}>
//             <Text>this is me</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <View style={{ width: 65, height: 19, backgroundColor: 'red', borderRadius: 8, margin: 10 }}>
//             <Text>this is me</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <View style={{ width: 65, height: 19, backgroundColor: 'red', borderRadius: 8, margin: 10 }}>
//             <Text>this is me</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <View style={{ justifyContent: "center", alignItems: 'center', height: 300, width: 400, backgroundColor: 'red', margin: 14, borderRadius: 28 }}>
//         <Text >
//           this
//         </Text>
//       </View>
//       <Image
//       style={{height:40,width:40,position:"absolute",top:200,left:180,borderRadius:20}} 
//       source={require("./Src/Image/22.png")}/>
//     </SafeAreaView>
//   )
// }

//  export default App
 // const [name, setname] = useState("rohit")
  // function state() {
  //   setname("ram")
  // }

// import { View, Text, SafeAreaView, TouchableOpacity, Image, Button, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import STATE from './screens/STATE';


// const App = () => {
 
//   return (
   
//     <SafeAreaView style={{flex:1}}>
//       <TouchableOpacity>
//         <View style={{ alignItems: "center", backgroundColor: "lightblue", height: "50%", borderRadius: 20, margin: "3%", position: "relative" }}>
//           <Text style={{ fontSize: 46, fontStyle: "italic", fontWeight: "900", marginTop: "5%" }}>App developer</Text>
//         </View>
//       </TouchableOpacity>
//       <View style={{ width: '84%', backgroundColor: "white", margin: "8%", borderRadius: 20, position: "absolute", top: "20%" }}>
//         <Text style={{ fontSize: 20, textAlign: "center", marginTop: "6%" }}>Regester Here</Text>
//         <View style={{ marginHorizontal: "8%" }}>
//           <Text style={{ fontSize: 20, marginTop: "35%" }}> Name </Text>
//           <TextInput
//             style={{ height: "12%", borderWidth: 2,fontSize:18,padding:12,borderRadius:15,borderColor:"lightblue",marginTop:"5%" }}
//             placeholder='Name'
//           />
//            <Text style={{ fontSize: 20, marginTop:"10%"}}> Email </Text>
//           <TextInput
//             style={{ height:"12%", borderWidth: 2,fontSize:18,padding:12,borderRadius:15,borderColor:"lightblue",marginTop:"5%"}}
//             placeholder='Email'
//           />
//            <Text style={{ fontSize: 20, marginTop: "10%" }}> Password </Text>
//           <TextInput
//             style={{ height: "12%", borderWidth: 2,fontSize:18,padding:12,borderRadius:15,borderColor:"lightblue",marginTop:"5%" }}
//             placeholder='Password'
//           />
        
//         </View>
//         <View>
        
//         </View>
//         <View >
//             <Text style={{textAlign:"center",margin:"5%",fontSize:18}}>I agree the Terms and conditions</Text>
//           </View>
//           <View style={{}}>
//           <STATE/>

//           <Button title='on press'/>

//           </View>
//       </View>


//     </SafeAreaView>
//   );
// };
// 
// export default App;
// import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native'
// import React from 'react'

// const { width, height } = Dimensions.get('window');

// const App = () => {
 
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TouchableOpacity style={{ flex: 1 }}>
//         <View style={{ alignItems: "center", backgroundColor: "lightblue", height: height * 0.25, borderRadius: 20, margin: 10, position: "relative" }}>
//           <Text style={{ fontSize: 45, fontStyle: "italic", fontWeight: "900", marginTop: height * 0.05 }}>App developer</Text>
//         </View>
//       </TouchableOpacity>
//       <View style={{ height: height * 0.6, width: width * 0.84, backgroundColor: "white", margin: 30, borderRadius: 20, position: "absolute", top: height * 0.14 }}>
//         <Text style={{ fontSize: 20, textAlign: "center", marginTop: height * 0.02 }}>Register Here</Text>
//         <View style={{ marginHorizontal: width * 0.08 }}>
//           <Text style={{ fontSize: 18, marginTop: height * 0.1 }}>Name</Text>
//           <TextInput
//             style={{ height: height * 0.06, borderWidth: 2, fontSize: 16, padding: 12, borderRadius: 15, borderColor: "lightblue", marginTop: height * 0.02 }}
//             placeholder='Name'
//           />
//           <Text style={{ fontSize: 18, marginTop: height * 0.02 }}>Email</Text>
//           <TextInput
//             style={{ height: height * 0.06, borderWidth: 2, fontSize: 16, padding: 12, borderRadius: 15, borderColor: "lightblue", marginTop: height * 0.02 }}
//             placeholder='Email'
//           />
//           <Text style={{ fontSize: 18, marginTop: height * 0.02 }}>Password</Text>
//           <TextInput
//             style={{ height: height * 0.06, borderWidth: 2, fontSize: 16, padding: 12, borderRadius: 15, borderColor: "lightblue", marginTop: height * 0.02 }}
//             placeholder='Password'
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;
