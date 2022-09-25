import {FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../constants/styles';
import HeaderBlackArrow from "../ui/HeaderBlackArrow";
import FilledButton from "../ui/FilledButton";
import ModalLinkCard from "./ModalLinkCard";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {cards} from "../../datas/cards";

function MyCardComponent({goBack, linkCard, modalVisible, setModalVisible, NotNow, Website}) {

    const renderItem = ({item}) => {
        return (
            <View>
                <Image source={item.design}
                       style={{marginLeft: 20, marginTop: 30, width: '90%', height: 220, borderRadius: 10}}/>
                <Text style={{
                    position: 'absolute',
                    fontFamily: 'Regular',
                    fontSize: 16,
                    color: 'white',
                    top: 60,
                    left: 40
                }}>Balance</Text>
                <Text style={{
                    position: 'absolute',
                    fontFamily: 'SemiBold',
                    fontSize: 25,
                    color: 'white',
                    top: 80,
                    left: 40
                }}>$ {item.balance}</Text>
                <Text style={{
                    position: 'absolute',
                    fontFamily: 'Regular',
                    fontSize: 14,
                    color: 'white',
                    top: 180,
                    left: 40
                }}>Account number</Text>
                <Text style={{
                    position: 'absolute',
                    fontFamily: 'SemiBold',
                    fontSize: 14,
                    color: 'white',
                    top: 200,
                    left: 40
                }}>{'**** **** ****' + item.card_number.substring(14, 19)}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>

            <HeaderBlackArrow onPress={goBack}>My Cards</HeaderBlackArrow>

            <FlatList data={cards} renderItem={renderItem}/>

            <View style={{marginLeft: 20, marginRight: 20,}}>
                <FilledButton onPress={linkCard}>Add New Card</FilledButton>
            </View>

            <ModalLinkCard modalVisible={modalVisible} setModalVisible={setModalVisible} NotNow={NotNow}
                           Website={Website}/>

            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

export default MyCardComponent;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        fontFamily: 'SemiBold',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.primary800,
    },
});
