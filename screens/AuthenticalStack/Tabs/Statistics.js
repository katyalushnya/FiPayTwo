import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

import ChartStatics from "../../../components/Authenticated/ChartStatics";
import TransactionHistory from "../../../components/Authenticated/TransactionHistory";
import FlatButton from "../../../components/ui/FlatButton";
import {useNavigation} from "@react-navigation/native";


export default function  Statistics () {

    const navigation = useNavigation();

    function onPress(){
        navigation.replace('CurrenceBalance');
    }

        return (
            <View style={styles.container}>

                <View style={{flexDirection: 'row', backgroundColor: '#6D5FFD', width: '100%', height: '30%'}}>
                    <Text style={styles.title}>Statistics</Text>
                </View>


                <TouchableOpacity style={{position: 'absolute', top: 70, left: 270,}}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 7,
                        width: 100,
                        height: 30
                    }}>
                        <Text style={{fontSize: 16, color: '#ffffff', fontFamily: 'SemiBold'}}>This
                            week</Text>
                        <MaterialIcons name="arrow-drop-down" color={'#fff'} size={20}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.block}>
                    <TouchableOpacity onPress={() => {
                        navigation.push("StaticsDiagram")
                    }}>

                        <ChartStatics/>

                    </TouchableOpacity>
                </View>

                <View style={{marginLeft: 20, marginTop: 130, flexDirection: 'row'}}>
                    <Text style={{fontSize: 18, fontFamily: 'SemiBold',}}>Transaction History</Text>
                    <View style={{marginLeft:160}}><FlatButton onPress={onPress}>See all</FlatButton></View>
                </View>

                <TransactionHistory/>


                <StatusBar style="auto"/>
            </View>
        );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 23,
        color: '#ffffff',
        marginTop: 70,
        marginLeft: 20,
        fontFamily: 'SemiBold',
    }, block: {
        position: 'absolute',
        top: 120,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6D5FFD',
        borderRadius: 10,
        height: 220,
        width: '90%',
        marginLeft: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,

        elevation: 22,
    },
});
