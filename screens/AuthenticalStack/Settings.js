import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {useNavigation} from "@react-navigation/native";
import {Colors} from "../../constants/styles";
import ModalExit from "../../components/Authenticated/ModalExit";
import Line from "../../components/ui/Line";

export default function Settings() {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    function goBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
            <HeaderBlackArrow onPress={goBack}>Settings</HeaderBlackArrow>

            <View style={{marginTop:20}}>
            <TouchableOpacity onPress={() => {navigation.push("Profiles")}}>
                <View
                    style={styles.button}>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="account" color={Colors.primary800} size={20}/>
                    </View>
                    <Text style={styles.title}>Account</Text>
                    <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft: 230}}/>
                </View>
            </TouchableOpacity>
            <Line/>

            <TouchableOpacity onPress={() => {navigation.push("NotificationSettings")}}>
                <View
                    style={styles.button}>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="bell" color={Colors.primary800} size={20}/>
                    </View>
                    <Text style={styles.title}>Notification</Text>
                    <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft: 205}}/>
                </View>
            </TouchableOpacity>

            <Line/>

            <TouchableOpacity onPress={() => {navigation.push("MyCard")}}>
                <View style={styles.button}>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="credit-card-outline" color={Colors.primary800} size={20}/>
                    </View>
                    <Text style={styles.title}>My Card</Text>
                    <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft: 230}}/>
                </View>
            </TouchableOpacity>

            <Line/>

            <TouchableOpacity onPress={() => {navigation.push("LoginSecurity")}}>
                <View style={styles.button}>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="lock" color={Colors.primary800} size={20}/>
                    </View>
                    <Text style={styles.title}>Security</Text>
                    <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft: 230}}/>
                </View>
            </TouchableOpacity>

            <Line/>

            <TouchableOpacity onPress={() => {navigation.push("Currency")}}>
                <View style={styles.button}>
                    <View style={styles.box}>
                        <Image source={require('../../assets/usd-coin.png')}/>
                    </View>
                    <Text style={styles.title}>Currency</Text>
                    <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft: 225}}/>
                </View>
            </TouchableOpacity>

            <Line/>

            <TouchableOpacity onPress={() => {navigation.push("Services")}}>
                <View style={styles.button}>
                    <View style={styles.box}>
                        <Ionicons name="md-checkmark-done-sharp" color={Colors.primary800} size={20}/>
                    </View>
                    <Text style={styles.title}>Services</Text>
                    <AntDesign name="right" color={Colors.primary800} size={18} style={{marginLeft: 230}}/>
                </View>
            </TouchableOpacity>

            <Line/>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.button}>
                    <View style={{
                        backgroundColor: '#FF18431A',
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10
                    }}>
                        <MaterialIcons name="exit-to-app" color={Colors.red} size={20}/>
                    </View>
                    <Text style={styles.title}>Logout</Text>
                    <AntDesign name="right" color={Colors.red} size={18} style={{marginLeft: 240}}/>
                </View>
            </TouchableOpacity>
            </View>
            <ModalExit modalVisible={modalVisible} setModalVisible={setModalVisible}/>

            <StatusBar style="auto"/>

        </SafeAreaView>);
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 20, marginLeft: 20,
    }, box: {
        backgroundColor: Colors.primary100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }, title: {
        fontSize: 17, fontFamily: 'Regular', marginLeft: 20,
    }

});
