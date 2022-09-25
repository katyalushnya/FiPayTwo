import {Colors} from "../../constants/styles";
import LoginScreen from "../../screens/AuthStack/LoginScreens/LoginScreen";
import SignupScreen from "../../screens/AuthStack/SignUpScreens/SignupScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../../screens/AuthStack/SplashScreen";
import FaceAuthentificationScreen from '../../screens/AuthStack/LoginScreens/FaceAuthentificationScreen';
import Varification from "../../screens/AuthStack/SignUpScreens/Varification";
import SignupPartTwoScreen from "../../screens/AuthStack/SignUpScreens/SignupPartTwoScreen";
import ForgotPassword from "../../screens/AuthStack/NewPassword/ForgotPassword";
import SuccessfulForgotPassword from "../../screens/AuthStack/NewPassword/SuccessfulReset";
import NewPassword from "../../screens/AuthStack/NewPassword/NewPassword";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            <Stack.Screen name="SuccessfulForgotPassword" component={SuccessfulForgotPassword}/>
            <Stack.Screen name="NewPassword" component={NewPassword}/>
            <Stack.Screen name="FaceAuthentification" component={FaceAuthentificationScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="Varification" component={Varification}/>
            <Stack.Screen name="SignupPartTwoScreen" component={SignupPartTwoScreen}/>
        </Stack.Navigator>
    );
}
