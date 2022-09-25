import {useState} from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';
import {Colors} from '../../constants/styles';
import * as React from "react";
import GlobalStyle from "../ui/GlobalStyle";
import FooterText from "../ui/FooterText";

function AuthContent({isLogin, onAuthenticate}) {
    const navigation = useNavigation();

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
    });

    function switchAuthModeHandler() {
        if (isLogin) {
            navigation.replace('Signup');
        } else {
            navigation.replace('Login');
        }
    }

    function submitHandler(credentials) {
        let {email, password, name} = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;

        if (
            !emailIsValid ||
            !passwordIsValid
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                password: !passwordIsValid,
            });
            return;
        }
        onAuthenticate({email, password, name});
    }

    function goNewPassword() {
        navigation.replace('ForgotPassword');
    }

    return (
        <View style={GlobalStyle.all}>
            <Image source={require('../../assets/icon.png')} style={{marginLeft: 20, marginTop: 50}}/>
            <View style={styles.container}>
                <Text style={styles.title}>{isLogin ? 'Sign in to ' : 'Create a new account'}<Text
                    style={{color: '#6D5FFD'}}>{isLogin ? 'FiPay' : ''}</Text></Text>


                <View style={styles.authContent}>

                    <AuthForm
                        isLogin={isLogin}
                        onSubmit={submitHandler}
                        credentialsInvalid={credentialsInvalid}
                    />
                    <View style={{marginTop:20}}>
                    {isLogin &&
                        (<FlatButton onPress={goNewPassword}>Forgot the password?</FlatButton>)}
                    </View>

                    <View style={styles.buttons}>

                        <FooterText>{isLogin ? 'Don’t have an account?' : 'Already have an account?'}</FooterText>
                        <FlatButton onPress={switchAuthModeHandler}>
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </FlatButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default AuthContent;

const styles = StyleSheet.create({
    authContent: {
        marginTop: 20,
        marginHorizontal: 10,
        padding: 5,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        color: '#394452',
        marginTop: 20,
        marginLeft: 15,
        fontFamily: 'Bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
