import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import HeaderBlackArrow from "../../../components/ui/HeaderBlackArrow";
import {useNavigation} from "@react-navigation/native";
import InputText from "../../../components/ui/InputText";
import DisabledButton from "../../../components/ui/DisabledButton";
import {useState} from "react";
import {Colors} from "../../../constants/styles";


export default function ForgotPassword() {

    const navigation = useNavigation();

    const [disabled, setDisabled] = useState(true);
    const [email, setEmail] = useState(true);

    function goBack() {
        navigation.replace('Login');
    }

    function submitHandler(text) {

        text = text.trim();

        setDisabled(true);
        if (text.includes('@')) {
            setEmail(text);
            setDisabled(false);
        }
    }

    function confirm() {
        navigation.replace('SuccessfulForgotPassword');
    }


    return (
        <View style={styles.all}>

            <HeaderBlackArrow onPress={goBack}> </HeaderBlackArrow>

            <View style={styles.container}>
                <Text style={styles.title}>Forgot Password</Text>

                <Text style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 40,
                    marginBottom: 40,
                    fontSize: 15.5,
                    fontFamily: 'Regular',
                }}>Please enter your email, we will confirm the password change via email</Text>
                <InputText>Email</InputText>
                <View style={{justifyContent: 'center',}}>
                    <TextInput style={styles.input} name='emailOrPhone' onChangeText={(text) => {
                        submitHandler(text)
                    }}/>
                    {(!disabled) ? (
                        <Image source={require('../../../assets/right.png')}
                               style={{marginLeft: 370, position: 'absolute',}}/>
                    ) : null}
                </View>

                <DisabledButton disabled={disabled} onPress={confirm}>Confirm</DisabledButton>

            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: Colors.title01,
        fontFamily: 'SemiBold',
        marginLeft: 20,
    },
    input: {
        marginTop: 5,
        borderColor: '#a5abb3',
        borderWidth: 1,
        marginRight: 20,
        borderRadius: 5,
        height: 50,
        paddingLeft: 15,
        fontFamily: 'SemiBold',
        marginLeft: 20,
    },
});
