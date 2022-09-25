import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {contact} from "../../datas/contacts";


export default function NotificationData({day, onSubmit}) {

    function submitHandler(id, name, amount) {
        onSubmit({
            id: id,
            name: name,
            amount: amount,
            modalData: true,
        });
    }

    const renderItem = ({item}) => {
        if (day == item.date) {
            if (item.status) {
                return (
                    <View>
                        <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row', width: '70%'}}>
                            <Image source={item.photo} style={{width: 60, height: 60, borderRadius: 50,}}/>
                            <View style={{marginLeft: 20,}}>
                                <Text style={{fontFamily: 'Regular', fontSize: 15,}}>You received a payment
                                    of <Text style={{
                                        color: '#6D5FFD',
                                        fontFamily: 'SemiBold',
                                        fontSize: 15,
                                    }}> ${item.balance}</Text> from <Text
                                        style={{fontFamily: 'SemiBold', fontSize: 15,}}> {item.name}</Text></Text>
                                <Text style={{
                                    color: '#6D7580',
                                    fontFamily: 'SemiBold',
                                    fontSize: 12,
                                    marginTop: 5
                                }}>{item.time} AM</Text>
                            </View>
                        </View>
                        <View style={{
                            borderBottomColor: '#EBEEF2',
                            borderBottomWidth: 1,
                            width: '90%',
                            marginLeft: 20,
                            marginTop: 20,
                            marginRight: 20
                        }}></View>
                    </View>
                )
            } else {
                return (
                    <View>
                        <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', width: '70%'}}>
                                <Image source={item.photo} style={{width: 60, height: 60, borderRadius: 50,}}/>
                                <View style={{marginLeft: 20, flexDirection: 'column'}}>
                                    <Text style={{fontFamily: 'Regular', fontSize: 15, width: '60%'}}><Text
                                        style={{
                                            fontFamily: 'SemiBold',
                                            fontSize: 15,
                                        }}>{item.name}</Text> requested a payment of <Text style={{
                                        color: '#6D5FFD',
                                        fontFamily: 'SemiBold',
                                        fontSize: 15,
                                    }}> ${item.balance}</Text></Text>
                                    <Text style={{
                                        color: '#6D7580',
                                        fontFamily: 'SemiBold',
                                        fontSize: 12,
                                        marginTop: 5
                                    }}>{item.time} AM</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => {submitHandler(item.id,item.name, item.balance)}}>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 80,
                                    height: 40,
                                    backgroundColor: '#6D5FFD',
                                    borderRadius: 7,
                                    marginLeft: 10
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: 'white',
                                        fontSize: 15,
                                        fontFamily: 'SemiBold',
                                    }}>Pay</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            borderBottomColor: '#EBEEF2',
                            borderBottomWidth: 1,
                            width: '90%',
                            marginLeft: 20,
                            marginTop: 20,
                            marginRight: 20
                        }}></View>
                    </View>
                )
            }
        } else {
            return (
                <View></View>
            )
        }
    }

    return (
        <View>
            <FlatList data={contact} renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 23,
        color: '#394452',
        marginTop: 20,
        marginLeft: 20,
        fontFamily: 'SemiBold',
    },
    cardContainer: {
        marginTop: -20
    },
});

