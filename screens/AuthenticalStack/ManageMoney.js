import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {Colors} from "../../constants/styles";


export default function ManageMoney (){
    const income = '14.700';
    const expense = '11.300';

    const transportation = '3000';
    const food = '4000';
    const shopping = '3100';
    const flight = '1200';

    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();

    }

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
                <HeaderBlackArrow onPress={goBack}>Manage Money</HeaderBlackArrow>

                <View style={{flexDirection:'row', alignItems:'center', marginTop:40, marginLeft:155}}>
                    <AntDesign name="left" color={'#545D69'} size={16}/>
                    <Text style={{marginLeft:20, marginRight:20, fontSize:16, color:'#545D69', fontFamily:'SourceSansProSemiBold'}}>January</Text>
                    <AntDesign name="right" color={'#545D69'} size={16}/>
                </View>

                <View style={{flexDirection:'row', alignItems:'center', marginTop:20, marginLeft:20, backgroundColor:Colors.primary100, height:100, justifyContent:'center', borderRadius:10, marginRight:20}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={{
                            backgroundColor: Colors.primary100,
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <MaterialIcons name="arrow-downward" color={Colors.primary800} size={23}/>
                        </View>
                        <View>
                            <Text style={{fontSize:14, color:'#545D69', fontFamily:'Regular', marginLeft: 5}}>Income</Text>
                            <Text style={{fontSize: 23, fontFamily: 'SemiBold', marginLeft: 5, color: Colors.primary800}}>${income}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginLeft:40}}>
                        <View style={{
                            backgroundColor: '#FF18431A',
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <MaterialIcons name="arrow-upward" color={Colors.red} size={23}/>
                        </View>
                        <View>
                            <Text style={{fontSize:14, color:'#545D69', fontFamily:'Regular', marginLeft: 5}}>Expense</Text>
                            <Text style={{fontSize: 23, fontFamily: 'SemiBold', marginLeft: 5, color: Colors.red}}>${expense}</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={styles.block}>
                        <TouchableOpacity onPress={() => {navigation.push("Branches")}}>
                            <View style={{alignItems:'center'}}>
                                <Ionicons name="car" color={Colors.primary800} size={50}/>
                                <Text style={{fontSize:14, color:'#545D69', fontFamily:'Regular', marginTop:10}}>Transportation</Text>
                                <Text style={{fontSize: 23, fontFamily: 'SemiBold', marginTop:10}}>${transportation}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.block}>
                        <TouchableOpacity onPress={() => {navigation.push("Branches")}}>
                            <View style={{alignItems:'center'}}>
                                <MaterialCommunityIcons name="food" color={'#6D5FFD'} size={50}/>
                                <Text style={{fontSize:14, color:Colors.primary800, fontFamily:'Regular', marginTop:10}}>Food</Text>
                                <Text style={{fontSize: 23, fontFamily: 'SemiBold', marginTop:10}}>${food}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={styles.block}>
                        <TouchableOpacity>
                            <View style={{alignItems:'center'}}>
                                <MaterialIcons name="shopping-cart" color={Colors.primary800} size={50}/>
                                <Text style={{fontSize:14, color:'#545D69', fontFamily:'Regular', marginTop:10}}>Shopping</Text>
                                <Text style={{fontSize: 23, fontFamily: 'SemiBold', marginTop:10}}>${shopping}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.block}>
                        <TouchableOpacity onPress={() => {navigation.push("FlightTicket")}}>
                            <View style={{alignItems:'center'}}>
                                <MaterialIcons name="airplanemode-active" color={Colors.primary800} size={50}/>
                                <Text style={{fontSize:14, color:'#545D69', fontFamily:'Regular', marginTop:10}}>Flight</Text>
                                <Text style={{fontSize: 23, fontFamily: 'SemiBold', marginTop:10}}>${flight}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <StatusBar style="auto"/>

            </SafeAreaView>
        );

}

const styles = StyleSheet.create({
    title:{
        fontSize:17,
        color:'#394452',
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    text:{
        fontSize:15.5,
        marginTop:15,
        marginLeft:20,
        fontFamily:'SourceSansProRegular',
    },
    block: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6D5FFD',
        borderRadius: 10,
        height: 200,
        width: 185,
        marginLeft: 20,
        marginTop: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,

        elevation: 22,
    },
});
