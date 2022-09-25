import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import HeaderBlackArrow from "../ui/HeaderBlackArrow";
import BankAccount from "./BankAccount";
import PopularBankAccount from "./PopularBankAccount";
import CreateCard from "./CreateCard";
import GhostButton from "../ui/GhostButton";
import {Colors} from "../../constants/styles";

export default function LinkNewCard({setLinkCards, setModalVisible}) {

    function goBack() {
        setLinkCards(false);
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
            <HeaderBlackArrow onPress={goBack}>Link new card</HeaderBlackArrow>

            <ScrollView>
                <BankAccount/>
                <PopularBankAccount/>
                <CreateCard/>
                <View>
                    <GhostButton onPress={() => {
                        setModalVisible(true)
                    }} color={Colors.primary800}>Preview</GhostButton>
                </View>
                <View style={{height: 40}}></View>
            </ScrollView>

            <StatusBar style="auto"/>

        </SafeAreaView>
    );

}
