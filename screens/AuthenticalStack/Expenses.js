import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {MaterialIcons} from "@expo/vector-icons";

import {Colors} from "../../constants/styles";
import {useNavigation} from "@react-navigation/native";
import ChartExpenses from "../../components/ChartExpenses";
import TransactionHistory from "../../components/Authenticated/TransactionHistory";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";

export default function Expenses () {

    const navigation = useNavigation();

    const name = '';
    const balance = 0;
    const accountNumber= '';
    const tooltipPos = {x: 0, y: 0, visible: false, value: 0};
    const data = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const renderItem=({item})=>{
            return(
                <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>{item}</Text>
            )
        }

        function goBack(){
        navigation.goBack();
        }
        return (
            <SafeAreaView style={styles.container}>

                <View style={{flexDirection:'row'}}>
                    <HeaderBlackArrow onPress={goBack}>Expenses</HeaderBlackArrow>
                    <TouchableOpacity style={{marginLeft:130, marginTop:10}}>
                        <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row',borderWidth:2, borderColor:Colors.primary800, borderRadius:7, width:110, height:30}}>
                            <Text style={{fontSize:16, color:Colors.primary800, fontFamily:'SemiBold'}}>This week</Text>
                            <MaterialIcons name="arrow-drop-down" color={Colors.primary800} size={20}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View>
                        <Text style={{fontSize:16, marginLeft:20, color:Colors.primary800, marginTop:20, fontFamily:'SemiBold',}}>Jan</Text>
                        <View style={{borderBottomColor: Colors.primary800, borderBottomWidth: 2, width:20,marginTop:3, marginLeft:20}}/>
                    </View>
                    <FlatList data={data} horizontal renderItem={renderItem}/>
                </View>

                <Text style={{fontSize:18, marginLeft:20, marginTop:20, fontFamily:'SemiBold',}}>Expenses graph</Text>

                <ChartExpenses/>


                <View style={{marginLeft:20, marginTop:20, flexDirection:'row'}}>
                    <Text style={{ fontSize:18, fontFamily:'SemiBold',}}>Transaction History</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:18, marginLeft:170, color:Colors.primary800, fontFamily:'SemiBold',}}>See all</Text>
                    </TouchableOpacity>
                </View>

                <TransactionHistory/>


                <StatusBar style="auto"/>
            </SafeAreaView>
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
    },

});
