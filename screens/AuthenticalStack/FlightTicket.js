import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import FilledButton from "../../components/ui/FilledButton";
import {Colors} from "../../constants/styles";
import GhostButton from "../../components/ui/GhostButton";

export default function FlightTicket () {


    const namestart = 'London, UK';
    const datastart = 'December 28,2021'
    const timestart = '18.00';
    const passenger='John Doe';
    const flight='MYU467A';
    const gate='G2';
    const seat='20A';

    const nameend='Colifornia,USA';
    const dataend='December 29,2021';
    const timeend='04.00';

    const [showticket, setShow]=useState(false);


    const navigation = useNavigation();
    function goBack(){
        navigation.goBack();
    }
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>

                <HeaderBlackArrow onPress={goBack}>Flight ticket</HeaderBlackArrow>

                <View style={{alignItems:'center', flexDirection:'row', marginTop:30, marginLeft:20}}>
                    <View style={{backgroundColor:'#FF18431A', width:60, height:60, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="map-marker" color={Colors.red} size={23}/>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'SemiBold',
                            marginLeft: 20
                        }}>{namestart}</Text>
                        <Text style={{
                            marginTop:8,
                            fontSize: 12,
                            fontFamily: 'Regular',
                            marginLeft: 20,
                            color: '#858C94'
                        }}>{datastart}</Text>
                    </View>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'Regular',
                        marginLeft: 160,
                    }}>{timestart}</Text>
                </View>
                <View style={{width:5, height:5, borderRadius:10, backgroundColor:'#A5ABB3', marginLeft:45, marginTop:5}}></View>
                <View style={{width:5, height:5, borderRadius:10, backgroundColor:'#A5ABB3', marginLeft:45, marginTop:10, marginBottom:5}}></View>
                <View style={{alignItems:'center', flexDirection:'row', marginLeft:20}}>
                    <View style={{backgroundColor:Colors.primary100, width:60, height:60, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="map-marker" color={Colors.primary800} size={23}/>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'SemiBold',
                            marginLeft: 20
                        }}>{nameend}</Text>
                        <Text style={{
                            marginTop:8,
                            fontSize: 12,
                            fontFamily: 'Regular',
                            marginLeft: 20,
                            color: '#858C94'
                        }}>{dataend}</Text>
                    </View>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'Regular',
                        marginLeft: 150,
                    }}>{timeend}</Text>
                </View>

                <View style={{width:'90%', marginLeft:20}}>
                <GhostButton color={Colors.primary800} onPress={()=>{setShow(true)}}>View ticket</GhostButton>
                </View>

                {showticket &&
                    <View>
                        <View style={styles.block}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{ marginLeft:30}}>
                                    <Text style={styles.text}>Passenger</Text>
                                    <Text style={styles.text}>Flight</Text>
                                    <Text style={styles.text}>Date</Text>
                                    <Text style={styles.text}>Gate</Text>
                                    <Text style={styles.text}>Seat</Text>
                                </View>

                                <View style={{marginLeft:110, alignItems:'flex-end'}}>
                                    <Text style={styles.text}>{passenger}</Text>
                                    <Text style={styles.text}>{flight}</Text>
                                    <Text style={styles.text}>{datastart}</Text>
                                    <Text style={styles.text}>{gate}</Text>
                                    <Text style={styles.text}>{seat}</Text>
                                </View>
                            </View>
                            <Image source={require('../../assets/flightCode.png')} style={{marginLeft:20, marginTop:20, width:'90%', height:100}}/>
                        </View>

                        <View style={{width:'90%', marginLeft:20}}>
                        <FilledButton onPress={()=>{setShow(false)}}>OK</FilledButton>
                        </View>


                    </View>
                }

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
        fontFamily:'SemiBold',
    },
    text:{
        fontSize:15.5,
        marginTop:20,
        fontFamily:'Regular',
    },
    block: {
        justifyContent:'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 350,
        width: '90%',
        marginLeft: 20,
        marginTop: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 22,
    },
});
