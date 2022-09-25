import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Colors} from "../../constants/styles";
import FilledButton from "../../components/ui/FilledButton";
import {contact} from "../../datas/contacts";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {useNavigation} from "@react-navigation/native";


export default function SuccessfulTransfer ({route}) {
    const navigation = useNavigation();
    function goBack(){
        navigation.goBack();
    }
        const {card_value, id, amount, message} = route.params || 0;

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>

                <HeaderBlackArrow onPress={goBack}></HeaderBlackArrow>

                <View style={styles.block}>

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <MaterialCommunityIcons name="check-circle" color={Colors.primary800} size={100}/>
                        <Text style={{color:Colors.primary800,fontFamily:'SemiBold', fontSize:30, marginTop:20}}>Successful!</Text>
                        <Text style={{color:'#A5ABB3',width:200, textAlign:'center', marginTop:10, fontFamily:'SourceSansProRegular',}}>Your transaction is successful. Thank for using our services.</Text>
                    </View>

                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width: '87%', marginLeft: 20, marginTop: 20, marginRight: 20}}></View>


                    <View style={{flexDirection:'row'}}>
                        <View style={{}}>
                            <Text style={styles.text}>From</Text>
                            <Text style={styles.text}>To</Text>
                            <Text style={styles.text}>Account number</Text>
                            <Text style={styles.text}>Amount</Text>
                            <Text style={styles.text}>Message</Text>
                        </View>

                        <View style={{alignItems:'flex-end', marginLeft:80}}>
                            <Text style={styles.textdata}>{card_value}</Text>
                            <Text style={styles.textdata}>{contact[id].name}</Text>
                            <Text style={styles.textdata}>{'**** ****'+ contact[id].card_number.substring(14, 19)}</Text>
                            <Text style={styles.textdata}>${amount}</Text>
                            <Text style={styles.textdata}>{message}</Text>
                        </View>
                    </View>

                </View>

                <View style={{width:'90%', marginLeft:20}}>
                <FilledButton>OK</FilledButton>
                </View>
                <StatusBar style="auto"/>

            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    text:{
        fontSize:15.5,
        marginTop:20,
        marginLeft:20,
        fontFamily:'Regular',
    },
    textdata:{
        fontSize:15.5,
        marginTop:20,
        marginLeft:20,
        fontFamily:'SemiBold',
    },
    block:{
        marginTop:60,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:Colors.primary800,
        borderRadius:10,
        height:500,
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
});
