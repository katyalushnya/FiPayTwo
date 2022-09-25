import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

import {Colors} from "../../constants/styles";
import TransactionHistory from "../../components/Authenticated/TransactionHistory";
import {useNavigation} from "@react-navigation/native";

export default function BudgetCalculation () {

    const navigation = useNavigation();

    const data = 1299.60;

    const total = 948.3;
    const  subtotal =374.4;
    const payments = 384.4;
    const summery = 748.4;


        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row', backgroundColor:Colors.primary800, width:'100%', height:'30%'}}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                        <Image source={require('../../assets/arrow-back-white.png')} style={{marginLeft:20, marginTop:70}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Budget calculation</Text>
                </View>

                <View style={styles.block}>
                    <View style={{marginLeft:20, marginTop:30, flexDirection:'row', alignItems:'center'}}>
                        <Text style={{ fontSize:18, fontFamily:'SemiBold', }}>Balance detail</Text>
                        <TouchableOpacity style={{ marginLeft:120}}>
                            <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row',borderWidth:1, borderColor:Colors.primary800, borderRadius:7, width:100, height:30}}>
                                <Text style={{fontSize:16, color:Colors.primary800, fontFamily:'SemiBold'}}>This week</Text>
                                <MaterialIcons name="arrow-drop-down" color={Colors.primary800} size={20}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.push('Currency')}}>
                        <Text style={{marginLeft:110, marginTop:40, color: Colors.primary800, fontSize: 40, fontFamily:'SemiBold',}}>$ {data}</Text>
                    </TouchableOpacity>
                    <View style={{marginLeft:20, borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'87%',marginTop:40}}/>

                    <View style={{flexDirection:'row', marginTop:20, marginLeft:20,}}>
                        <TouchableOpacity onPress={()=>{navigation.push("TotalSpent")}}>
                            <View style={{backgroundColor:Colors.primary100, width:155, height:75, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontSize:16, color:'#545D69', fontFamily:'Regular'}}>Total</Text>
                                <Text style={{fontSize:25, color:Colors.primary800, fontFamily:'SemiBold'}}>$ {total}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{backgroundColor:'#FFB8001A', width:155, height:75, borderRadius:10, alignItems:'center', justifyContent:'center', marginLeft:20}}>
                            <Text style={{fontSize:16, color:'#545D69', fontFamily:'Regular'}}>Subtotal</Text>
                            <Text style={{fontSize:25, color:Colors.yellow, fontFamily:'SemiBold'}}>$ {subtotal}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:20, marginLeft:20,}}>
                        <View style={{backgroundColor:'#1867FF1A', width:155, height:75, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:16, color:'#545D69', fontFamily:'Regular'}}>Payments</Text>
                            <Text style={{fontSize:25, color:Colors.blue, fontFamily:'SemiBold'}}>$ {payments}</Text>
                        </View>
                        <View style={{backgroundColor:'#FF18431A', width:155, height:75, borderRadius:10, alignItems:'center', justifyContent:'center', marginLeft:20}}>
                            <Text style={{fontSize:16, color:'#545D69', fontFamily:'Regular'}}>Summery</Text>
                            <Text style={{fontSize:25, color:Colors.red, fontFamily:'SemiBold'}}>$ {summery}</Text>
                        </View>
                    </View>
                </View>

                <View style={{marginLeft:20, marginTop:300, flexDirection:'row'}}>
                    <Text style={{ fontSize:18, fontFamily:'SemiBold', }}>Transaction History</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:18, fontFamily:'SemiBold', marginLeft:160, color:Colors.primary800}}>See all</Text>
                    </TouchableOpacity>
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
    title:{
        fontSize:23,
        color:'#ffffff',
        marginTop:70,
        marginLeft:20,
        fontFamily:'SemiBold',
    },block:{
        position:'absolute',
        top:120,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:Colors.primary800,
        borderRadius:10,
        height:400,
        width:'90%',
        marginLeft:20,

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
