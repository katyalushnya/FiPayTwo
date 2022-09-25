import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ModalLinkCard from "../../components/MyCard/ModalLinkCard";
import FilledButton from "../../components/ui/FilledButton";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";

import LinkNewCard from "../../components/MyCard/LinkNewCard";
import MyCardComponent from "../../components/MyCard/MyCardComponent";


export default function MyCard() {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [linkCards, setLinkCards] = useState(false);

    function goBack() {
        navigation.goBack();
    }

    function linkCard() {
        setLinkCards(true);
    }

    function Website() {
        navigation.replace("Home");
    }

    function NotNow() {
        setModalVisible(false);
    }

    return (
        <View>
            {!linkCards && (<MyCardComponent goBack={goBack} linkCard={linkCard} modalVisible={modalVisible}
                                             setModalVisible={setModalVisible} NotNow={NotNow} Website={Website}/>)}
            {linkCards && (<LinkNewCard setLinkCards={setLinkCards} setModalVisible={setModalVisible}/>)}
        </View>
    );

}
