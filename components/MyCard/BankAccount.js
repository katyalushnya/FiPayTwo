import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from "react-native";

export default function BankAccount(){
    return(
        <View style={{marginLeft:20, marginTop:30, backgroundColor: '#fff'}}>
            <Text style={{ fontSize:20, fontFamily:'SemiBold', }}>Bank Account</Text>

            <View style={{flexDirection:'row', marginTop:20, marginLeft:-20, justifyContent:'space-between', paddingHorizontal:20}}>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../../assets/banks/ally.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SemiBold', marginTop:5}}>Ally</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#FFB8001A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../../assets/banks/abnicon.png')} style={{height:20, width:48}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SemiBold', marginTop:5}}>ABN</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#1867FF1A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../../assets/banks/bbt.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SemiBold', marginTop:5}}>BB&T</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#FFB8001A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../../assets/banks/bii.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SemiBold', marginTop:5}}>Bii</Text>
                </View>
            </View>

            <View style={{flexDirection:'row', marginTop:20, marginLeft:-20, justifyContent:'space-between', paddingHorizontal:20}}>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#FF18431A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../../assets/banks/bsi.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SemiBold', marginTop:5}}>BSi</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#1867FF1A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../../assets/banks/bkm.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SemiBold', marginTop:5}}>BKM</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../../assets/banks/bnz.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SemiBold', marginTop:5}}>BNZ</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#FF18431A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../../assets/banks/bri.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SemiBold', marginTop:5}}>BRI</Text>
                </View>
            </View>

            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={{textAlign: 'center', color: '#6D5FFD', fontSize: 18, fontFamily:'SemiBold',}}>See all</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        marginTop:20,
        width:'95%',
        borderRadius:7,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        borderColor:'#6D5FFD',
        borderWidth:2,
    },
});

