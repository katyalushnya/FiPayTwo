import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {contact} from "../../datas/contacts";
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";

function Contacts () {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    const renderItem = (item, index, section) => {
        return (
            <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 20, marginLeft: 20}}>
                <Image source={item.photo} style={{height: 70, width: 70,}}/>
                <View>
                    <Text style={{
                        fontSize: 17,
                        fontFamily: 'SourceSansProSemiBold',
                        marginLeft: 20,
                        width: 200
                    }}>{item.name}</Text>
                    <Text style={{fontSize: 15, fontFamily: 'SourceSansProRegular', marginLeft: 20}}>+{item.phone}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.push("TransferMoney", {contact_id: item.id})
                }}>
                    <View style={{
                        backgroundColor: '#6D5FFD1A',
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10
                    }}>
                        <FontAwesome name="paper-plane" color={'#6D5FFD'} size={20}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

        return (
            <SafeAreaView style={styles.all}>
                <HeaderBlackArrow onPress={goBack}>Contacts</HeaderBlackArrow>

                <View style={styles.container}>


                </View>

                <StatusBar style="auto"/>

            </SafeAreaView>
        );
}
/*
<SectionListContacts
                        ref={(s) => (this.sectionList = s)}
                        sectionListData={contact}
                        initialNumToRender={contact.length}
                        renderItem={renderItem}
                        letterViewStyle={styles.letterView}
                        letterTextStyle={styles.letterText}
                        scrollAnimation={true}
                    />
                    */
export default Contacts;

const styles = StyleSheet.create({

    all: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        marginTop:50,
        flex: 1,
        backgroundColor: '#fff',
    },
    itemTextView: {
        height: 44,
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    letterText: {
        fontSize: 11,
        color: '#A5ABB3',
    },
});

