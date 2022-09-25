import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign, } from "@expo/vector-icons";
import {Colors} from "../../constants/styles";
import FilledButton from "../../components/ui/FilledButton";
import {useNavigation} from "@react-navigation/native";
import {currency} from "../../datas/currency";
import GhostButton from "../../components/ui/GhostButton";

export default function ExchangeRate (){

    const navigation = useNavigation();

    const [amount, setAmount]=useState(199);

    const {id} = this.props.route.params || false;

    return (
        <View style={{flex: 1, backgroundColor: '#fff',}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                </TouchableOpacity>
                <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SemiBold'}}>Check the Exchange Rate</Text>
            </View>

            <View style={styles.block}>

                <View style={{borderColor:'#EBEEF2', borderWidth:1, width:'90%', marginLeft:15, marginTop:15, height:90, borderRadius:10}}>
                    <Text style={{fontSize:15.5, marginTop:15, marginLeft:20, fontFamily:'Regular',}}>From</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.title}>USD</Text>
                        <AntDesign name="caretdown" color={'#000000'} size={25} style={{marginLeft:10}}/>
                    </View>

                    <View style={{position:'absolute', marginLeft:220, marginTop:40, flexDirection:'row'}}>
                        <Text style={styles.text}>$</Text><TextInput style={styles.text} onChangeText={text=>setAmount(parseInt(text))}>199</TextInput>
                    </View>
                </View>

                <View style={{backgroundColor:Colors.yellow, width:40, height:40, borderRadius:30, alignItems:'center', justifyContent:'center', marginLeft:150, marginTop:20}}>
                    <AntDesign name="caretdown" color={'#fff'} size={25} style={{}}/>
                </View>

                <View style={{borderColor:'#EBEEF2', borderWidth:1, width:'90%', marginLeft:15, marginTop:20, height:90, borderRadius:10}}>
                    <Text style={{fontSize:15.5, marginTop:15, marginLeft:20, fontFamily:'SourceSansProRegular',}}>From</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.title}>SGD</Text>
                        <AntDesign name="caretdown" color={'#000000'} size={25} style={{marginLeft:10}}/>
                    </View>

                    <View style={{position:'absolute', marginLeft:200, marginTop:40, flexDirection:'row'}}>
                        <Text style={styles.text}>$</Text><TextInput style={styles.text}>271.66</TextInput>
                    </View>
                </View>

                <View style={{borderColor:'#EBEEF2', borderWidth:1, width:'90%', marginLeft:15, marginTop:20, height:90, borderRadius:10}}>
                    <Text style={{fontSize:15.5, marginTop:15, marginLeft:20, fontFamily:'Regular',}}>From</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.title}>EUR</Text>
                        <AntDesign name="caretdown" color={'#000000'} size={25} style={{marginLeft:10}}/>
                    </View>

                    <View style={{position:'absolute', marginLeft:200, marginTop:40, flexDirection:'row'}}>
                        <Text style={styles.text}>$</Text><TextInput style={styles.text}>176.77</TextInput>
                    </View>

                    <View>
                        <GhostButton>Add another currency</GhostButton>
                    </View>
                    
                </View>
            </View>


            <FilledButton>Check exchange rate</FilledButton>

            <StatusBar style="auto"/>

        </View>
    );

}

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
    buttonExchange:{
        borderColor:'#6D5FFD',
        borderWidth:2,
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginTop:40,
    },
});
