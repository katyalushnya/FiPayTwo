import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert, SafeAreaView} from 'react-native';
import HeaderBlackArrow from "../../../components/ui/HeaderBlackArrow";
import {useNavigation} from "@react-navigation/native";
import DisabledButton from "../../../components/ui/DisabledButton";
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../store/auth-context";
import InputText from "../../../components/ui/InputText";
import {Colors} from "../../../constants/styles";
import {SafeAreaConsumer} from "react-native-safe-area-context";

export default function SignupPartTwoScreen() {

    const navigation = useNavigation();


    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');

    const [disabled, setDisabled] = useState(true);


    const authCtx = useContext(AuthContext);

    async function submitHandler({}) {

        try {
            authCtx.navigateScreen(true);
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log you in. Please check your credentials or try again later!'
            );
            authCtx.navigateScreen(false);
        }
    }

    async function fn ({}) {
        setDisabled(false);
        if (country === '' || state === '' || city === '' || street === '') {
            setDisabled(true);
        }
    }


    function goBack() {
        navigation.navigate('Signup');
    }

    return (
        <SafeAreaView style={styles.all}>
            <HeaderBlackArrow onPress={goBack}> </HeaderBlackArrow>

            <View style={styles.container}>
                <Text style={styles.title}>Create a new account</Text>

                <InputText>County/Region</InputText>
                <TextInput style={styles.input} name='country' onFocus={fn} onChangeText={(text) => setCountry(text)}/>

                <View style={{flexDirection: 'row', width: '100%'}}>
                    <View style={{width: '47%'}}>
                        <InputText>State</InputText>
                        <TextInput style={styles.input} onFocus={fn}  onChangeText={(text) => setState(text)}/>
                    </View>
                    <View style={{width: '45%', marginLeft: '3%'}}>
                        <InputText>City</InputText>
                        <TextInput style={styles.input} onFocus={fn}  onChangeText={(text) => setCity(text)}/>
                    </View>
                </View>
                <InputText>Street</InputText>
                <TextInput style={styles.input} onFocus={fn}  onChangeText={(text) => setStreet(text)}/>

                <DisabledButton disabled={disabled} onPress={submitHandler}>Create Account</DisabledButton>

            </View>
            <StatusBar style="auto"/>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#fff',
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        color: '#394452',
        marginTop: 20,
        marginLeft: 20,
        fontFamily: 'SemiBold',
    },
    input: {
        marginTop: 5,
        borderColor: '#a5abb3',
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        width: '90%',
        height: 50,
        paddingLeft: 15,
        fontFamily: 'SemiBold',
    },
    buttonSignIn: {
        backgroundColor: Colors.primary800,
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
    },
    buttonSignUp: {},
    checkbox: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 20,
    },
});
