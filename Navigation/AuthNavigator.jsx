import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../Screen/OnBoardingScreen'
import Login from '../Screen/Login'
import RegisterScreen from '../Screen/Register';
import HomeNav from '../Navigation/BottomTabbarNavigator'

const Stack = createNativeStackNavigator();


function AuthNavigator(){
    return(
        <Stack.Navigator screenOptions={{headerShow: false}}>
            <Stack.Screen name="Onboarding" component={OnBoardingScreen} options={{
                headerShown:false
            }}/>
                       <Stack.Screen name="Login" component={Login} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{
                headerShown:false
            }}/>
              <Stack.Screen name="Home" component={HomeNav} options={{
                headerShown:false
            }}/>
    </Stack.Navigator>
    )
}

export default AuthNavigator