import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import TransactionHistory from "../../components/Authenticated/TransactionHistory";
import ChartPercent from "../../components/Authenticated/ChartPercent";
import {Colors} from "../../constants/styles";
import {useNavigation} from "@react-navigation/native";


export default function TotalSpent () {

    const navigation = useNavigation();
    const data =1299.60;
    const accountNumber= '';

    const total = 939;
    const balance_detail = [{expense:939, pending:500, income:439}];

        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row', backgroundColor:Colors.primary800, width:'100%', height:'30%'}}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                        <Image source={require('../../assets/arrow-back-white.png')} style={{marginLeft:20, marginTop:70}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Total spent</Text>
                    <TouchableOpacity style={{ marginLeft:130, marginTop:70}}>
                        <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row',borderWidth:1, borderColor:'#fff', borderRadius:7, width:100, height:30}}>
                            <Text style={{fontSize:16, color:'#fff', fontFamily:'SemiBold'}}>This week</Text>
                            <MaterialIcons name="arrow-drop-down" color={'#fff'} size={20}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.block}>
                    <View style={{marginLeft:45, marginTop:-10, transform:[{scale:1.1}]}}>
                        <ChartPercent/>
                    </View>
                    <Text style={{position:'absolute', top:75, left:155, color: Colors.primary800, fontSize: 35, fontFamily:'SemiBold',}}>${total}</Text>
                    <Text style={{position:'absolute', top:120, left:160, color: '#6D7580', fontSize: 14, fontFamily:'Regular',}}>of ${data}</Text>
                </View>

                <ScrollView horizontal={true} style={{flexDirection:'row', marginLeft:20, position:'absolute', top:350}}>
                    <View style={{width:140, height:200, backgroundColor:Colors.primary800, justifyContent:'center', borderRadius:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'Regular', marginLeft:20,marginTop:10}}>All</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SemiBold',marginLeft:20}}>$ {balance_detail[0].expense}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>
                    <View style={{width:140, height:200, backgroundColor:Colors.yellow, justifyContent:'center', borderRadius:10, marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'Regular', marginLeft:20,marginTop:10}}>Income</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SemiBold',marginLeft:20}}>$ {balance_detail[0].pending}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>

                    <View style={{width:140, height:200, backgroundColor:Colors.red, justifyContent:'center', borderRadius:10, marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'Regular', marginLeft:20,marginTop:10}}>Outcome</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SemiBold',marginLeft:20}}>$ {balance_detail[0].income}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>
                </ScrollView>

                <View style={{marginLeft:20, marginTop:330}}>
                    <Text style={{ fontSize:18, fontFamily:'SemiBold', }}>Transaction History</Text>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text style={{fontSize:16, color:Colors.primary800, marginTop:20, fontFamily:'SemiBold',}}>All</Text>
                            <View style={{borderBottomColor: Colors.primary800, borderBottomWidth: 2, width:20,marginTop:3}}/>
                        </View>
                        <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SemiBold',}}>Income</Text>
                        <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SemiBold',}}>Outcome</Text>
                    </View>
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
        height:200,
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
