import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {contact} from "../../datas/contacts";
import {Colors} from "../../constants/styles";


export default function ListContacts({sendMoney}) {

    const navigation = useNavigation();

    const renderItem = ({item}) => {
        return (
            <View>
                <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 20, marginLeft: 20}}>
                    <Image source={item.photo} style={{height: 70, width: 70,}}/>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'SemiBold',
                            marginLeft: 20,
                            width: 200
                        }}>{item.name}</Text>
                        <Text style={{fontSize: 15, fontFamily: 'Regular', marginLeft: 20}}>{item.phone}</Text>
                    </View>
                    <TouchableOpacity onPress={sendMoney}>
                        <View style={{
                            backgroundColor: Colors.primary100,
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            marginLeft:40,
                        }}>
                            <FontAwesome name="paper-plane" color={Colors.primary800} size={20}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'87%', marginLeft:20, marginTop:20, marginRight:20}}/>
            </View>
        )
    }
    return (
        <FlatList data={contact} renderItem={renderItem}/>
    );

}
