import { StatusBar } from 'expo-status-bar';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {useState} from "react";
import Checkbox from 'expo-checkbox';
import {Colors} from "../../../constants/styles";
import DisabledButton from "../../../components/ui/DisabledButton";
import InputText from "../../../components/ui/InputText";
import {useNavigation} from "@react-navigation/native";
import SecuredInput from "../../../components/ui/SecuredInput";

export default function NewPassword () {
    const navigation = useNavigation();

    const [disabled, setDisabled] = useState(true);
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    function submitHandler() {
        setPassword(password.trim());
        setConfirmPassword(confirmPassword.trim());

        const passwordIsValid = password.length > 6;
        const passwordsAreEqual = password === confirmPassword;

        if (!passwordsAreEqual || !passwordIsValid) {
            //Alert.alert('Invalid input', 'Please check your password');
            setDisabled(true);
        }
        else{
            setDisabled(false);
        }
    }

    function changePassword(text){
        setPassword(text);
        submitHandler();
    }

    function changeConfirmPassword(text){
        setConfirmPassword(text);
        submitHandler();
    }


    function Done() {
        navigation.replace('SplashScreen');
    }

        return (
            <View style={styles.all}>
                <Image source={require('../../../assets/icon.png')} style={{marginLeft:20, marginTop:50}}/>
                <View style={styles.container}>
                    <Text style={styles.title}>New Password</Text>

                    <InputText>New Password</InputText>
                    <SecuredInput ChangeText={changePassword}/>

                    <InputText>Retype New Password</InputText>
                    <SecuredInput ChangeText={changeConfirmPassword}/>

                    <View style={styles.checkbox}>
                        <Checkbox value={toggleCheckBox} onValueChange={(text)=>setToggleCheckBox(text)} color={toggleCheckBox ? Colors.primary800 : undefined}/>
                        <Text style={{marginLeft:10, fontFamily:'SemiBold', fontSize:14, color:Colors.title01}}>Remember me</Text>
                    </View>

                    <DisabledButton disabled={disabled} onPress={Done}>Sign in</DisabledButton>


                </View>
                <StatusBar style="auto"/>
            </View>
        );

}

const styles = StyleSheet.create({
    all:{
        backgroundColor: '#fff',
        flex: 1,
    },
    container: {
        flex:1,
        justifyContent: 'center',
    },
    title:{
        fontSize:25,
        color:'#394452',
        marginTop:20,
        marginLeft:15,
        fontFamily:'SemiBold',
    },
    textinput:{
        fontSize:16,
        color:'gray',
        marginTop:20,
        marginLeft:30,
        marginRight:20,
        fontFamily:'SemiBold',
    },
    input:{
        marginTop:5,
        borderColor:'#a5abb3',
        borderWidth:1,
        marginLeft:20,
        marginRight:20,
        borderRadius:5,
        height:50,
        paddingLeft:15,
        fontFamily:'SemiBold',
    },
    buttonSignIn:{
        backgroundColor:'#6D5FFD',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
        marginTop:40,
    },
    buttonSignInDis:{
        backgroundColor:Colors.primary500,
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
        marginTop:40,
    },
    checkbox:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:20,
    },
});
