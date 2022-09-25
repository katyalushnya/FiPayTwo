import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {Colors} from "../../constants/styles";
import {useNavigation} from "@react-navigation/native";
import FilledButton from "../../components/ui/FilledButton";
import GhostButton from "../../components/ui/GhostButton";


export default function SplashScreen ()  {

    const navigation = useNavigation();

            return (
                <View style={styles.container}>

                    <ImageBackground source={require('../../assets/first-background.png')} style={styles.image}>
                        <LinearGradient
                            colors={['#6D5FFD00', '#09101D']} style={styles.background}>
                            <View style={styles.content}>
                                <Text style={styles.title}>Welcome</Text>
                                <Text style={styles.text}>FiPay: The best multifunctional digital E-Wallet of this
                                    century.</Text>


                                    <FilledButton onPress={() => navigation.replace('Login')}>
                                        Sign In
                                    </FilledButton>
                                    <GhostButton color={'white'} onPress={() => navigation.replace('Signup')}>
                                        Create an account
                                    </GhostButton>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                    <StatusBar style="auto"/>
                </View>
            );


}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'stretch'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'stretch'
    },
    content: {
        margin:20,
        top:'30%',
    },
    title:{
        fontSize: 24,
        alignSelf:'stretch',
        color: 'white',
        fontFamily:'Bold',
    },
    text:{
        marginTop:5,
        color: 'white',
        fontSize: 15.5,
        fontFamily:'Regular',
    },
});
