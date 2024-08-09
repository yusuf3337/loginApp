import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home/HomeScreen'


const Stack = createNativeStackNavigator();


function AuthNavigator(){
    return(
        <Stack.Navigator screenOptions={{headerShow: false}}>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown:false
            }}/>
    </Stack.Navigator>
    )
}

export default AuthNavigator