import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {useNavigation} from "@react-navigation/native";
import {currency} from "../../datas/currency";
import {Colors} from "../../constants/styles";

export default function Currency () {
    const data = 1299.60

    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();
    }

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>

                <HeaderBlackArrow onPress={goBack}>Currency</HeaderBlackArrow>

                <View style={{backgroundColor:Colors.primary100, width:'90%', height:150, marginLeft:20, marginTop:20, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color: Colors.primary800, fontSize: 40, fontFamily:'SemiBold',}}>$ {data}</Text>
                    <Text style={{color: '#2C3A4B', fontSize: 15, fontFamily:'Regular', marginTop:20}}>US Dollar balance</Text>
                </View>
                <Text style={{ fontSize:18, fontFamily:'SemiBold', marginTop:30, marginLeft:20}}>Other currencies</Text>

                <FlatList
                    data={currency}
                    renderItem={({ item }) => (
                        <View style={{flexDirection:'row', marginLeft:20, marginTop:20, alignItems:'center'}}>
                            <Image source={item.image} style={{ width:90, height:60, borderWidth:0.3, borderColor:'#6D7580'}}/>
                            <View style={{marginLeft:20}}>
                                <Text style={{fontSize: 17, fontFamily:'SemiBold',}}>{Math.round(data * item.k)/100}</Text>
                                <Text style={{fontSize: 14, fontFamily:'Regular', color:'#6D7580'}}>{item.name}</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonSignIn} onPress={()=>{navigation.push("ExchangeMoney", { id: item.id })}}>
                                <Text style={{textAlign: 'center', color: Colors.primary800, fontSize: 16, fontFamily:'SemiBold',}}>Exchange</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />

                <StatusBar style="auto"/>

            </SafeAreaView>
        );

}

//navigation.replace("ExchangeMoney", {id: item.id})

const styles = StyleSheet.create({
    block:{
        marginTop:40,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:Colors.primary800,
        borderRadius:10,
        height:300,
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
    title:{
        fontSize:30,
        color:'#000000',
        marginLeft:20,
        fontFamily:'SemiBold',
    },
    text:{
        color:Colors.primary800,
        fontSize:27,
        fontFamily:'SemiBold',
    },
    buttonSignIn:{
        borderColor:Colors.primary800,
        borderWidth:2,
        borderRadius:5,
        height:40,
        alignItems:"center",
        justifyContent: "center",
        width:100,
        position:'absolute',
        right:20
    },

});
