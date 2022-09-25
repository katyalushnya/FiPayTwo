import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView} from "react-native";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import Line from "../ui/Line";

export default function UpcommingBills(){

    return(
        <View style ={{marginLeft:20}}>

            <ScrollView>
                <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="basket" color={'#6D5FFD'} size={20}/>
                    </View>
                    <View>
                        <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Market bills</Text>
                        <Text style={{fontSize:12, fontFamily:'Regular', marginLeft:20, color:'#858C94'}}>December 28, 2021</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{alignItems:'center', justifyContent:'center', width:90, height:35, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7, marginLeft:120}}>
                            <Text style={{color: '#6D5FFD',fontFamily:'SemiBold', fontSize: 16,}}>Pay</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Line/>
                <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="cart" color={'#6D5FFD'} size={20}/>
                    </View>
                    <View>
                        <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Supermarket bills</Text>
                        <Text style={{fontSize:12, fontFamily:'Regular', marginLeft:20, color:'#858C94'}}>December 28, 2021</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{alignItems:'center', justifyContent:'center', width:90, height:35, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7, marginLeft:85}}>
                            <Text style={{color: '#6D5FFD',fontFamily:'SemiBold', fontSize: 16,}}>Pay</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Line/>

                <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="store" color={'#6D5FFD'} size={20}/>
                    </View>
                    <View>
                        <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Store bills</Text>
                        <Text style={{fontSize:12, fontFamily:'Regular', marginLeft:20, color:'#858C94'}}>December 28, 2021</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{alignItems:'center', justifyContent:'center', width:90, height:35, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7, marginLeft:120}}>
                            <Text style={{color: '#6D5FFD',fontFamily:'SemiBold', fontSize: 16,}}>Pay</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Line/>

                <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="wifi" color={'#6D5FFD'} size={20}/>
                    </View>
                    <View>
                        <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Wifi bills</Text>
                        <Text style={{fontSize:12, fontFamily:'Regular', marginLeft:20, color:'#858C94'}}>December 28, 2021</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{alignItems:'center', justifyContent:'center', width:90, height:35, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7, marginLeft:120}}>
                            <Text style={{color: '#6D5FFD',fontFamily:'SemiBold', fontSize: 16,}}>Pay</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Line/>

                <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="cart" color={'#6D5FFD'} size={20}/>
                    </View>
                    <View>
                        <Text style={{fontSize:17, fontFamily:'SemiBold', marginLeft:20}}>Supermarket bills</Text>
                        <Text style={{fontSize:12, fontFamily:'Regular', marginLeft:20, color:'#858C94'}}>December 28, 2021</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{alignItems:'center', justifyContent:'center', width:90, height:35, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7, marginLeft:85}}>
                            <Text style={{color: '#6D5FFD',fontFamily:'SemiBold', fontSize: 16,}}>Pay</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'93%', marginTop:20, marginRight:20}}/>
            </ScrollView>
        </View>
    );
}
