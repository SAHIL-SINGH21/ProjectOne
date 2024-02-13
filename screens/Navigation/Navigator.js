import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import SecondScreen from '../SecondScreen';
import ThirdScreen from '../ThirdScreen';
import ForthScreen from '../ForthScreen';
import Header from '../Header';

const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'>
                <Stack.Screen options={{ headerShown: false }}
                    name="Home" component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Header" component={Header} />
                <Stack.Screen name="Second" component={SecondScreen} />
                <Stack.Screen name="Third" component={ThirdScreen} />
                <Stack.Screen name="Forth" component={ForthScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;