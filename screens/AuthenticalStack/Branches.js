import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from "@react-navigation/native";
import HeaderBlackArrow from "../../components/ui/HeaderBlackArrow";
import {mapStyle} from "../../constants/mapStyle";
import {Colors} from "../../constants/styles";
import Line from "../../components/ui/Line";

export default function Branches () {
 const [region, setRegion] = useState(null);

 const markers = [{
                name:'Franklin Guvk',
                address:'Roys Curk',
                destination:0.4,
            },{
                name:'Nguyen Dirks',
                address:'Volssgen',
                destination:0.7,
            },
                {
                    name:'Lionsheart',
                    address:'Huyyen Kurkv',
                    destination:1.2,
                },
            ]


    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();

    }

        const renderItem=({item})=>{
            return(
                <View>
                    <View style={{alignItems:'center', flexDirection:'row', marginTop:10}}>
                        <View style={{backgroundColor:Colors.primary100, width:60, height:60, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                            <MaterialCommunityIcons name="map-marker" color={Colors.primary800} size={23}/>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'SemiBold',
                                marginLeft: 20,
                                width:110,
                            }}>{item.name}</Text>
                            <Text style={{
                                marginTop:8,
                                fontSize: 12,
                                fontFamily: 'Regular',
                                marginLeft: 20,
                                color: '#858C94'
                            }}>{item.address}</Text>
                        </View>

                        <View style={{marginLeft: 100, alignItems:'flex-end'}}>
                            <View style={{flexDirection:'row'}}>
                                <FontAwesome name="star" color={Colors.primary800} size={10}/>
                                <FontAwesome name="star" color={Colors.primary800} size={10} style={{marginLeft: 3}}/>
                                <FontAwesome name="star" color={Colors.primary800} size={10} style={{marginLeft: 3}}/>
                                <FontAwesome name="star" color={Colors.primary800} size={10} style={{marginLeft: 3}}/>
                                <FontAwesome name="star-half-empty" color={Colors.primary800} size={10} style={{marginLeft: 3}}/>
                            </View>

                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'Regular',
                            }}>{item.destination}</Text>
                        </View>
                    </View>
                    <Line/>
                </View>
            )
        }



        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>

                <HeaderBlackArrow onPress={goBack}>Branches</HeaderBlackArrow>


                <MapView
                    style={styles.map}
                    region = {{
                        latitude: 48.4782703,
                        longitude: 35.0816091,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    customMapStyle={mapStyle}>
                    <Marker coordinate={{ latitude : 48.4782703 , longitude : 35.0816091 }} title={markers[0].name} description={markers[0].address}>
                        <View style={{width:25, height:25, backgroundColor:Colors.primary800, borderColor:'white', borderWidth:3, borderRadius:15}}></View>
                    </Marker>
                    <Marker coordinate={{ latitude : 48.4909044 , longitude : 35.0579859 }} title={markers[1].name} description={markers[1].address}>
                        <View style={{width:25, height:25, backgroundColor:Colors.primary800, borderColor:'white', borderWidth:3, borderRadius:15}}></View>
                    </Marker>
                    <Marker coordinate={{ latitude : 48.5109044 , longitude : 35.1079859 }} title={markers[2].name} description={markers[2].address}>
                        <View style={{width:25, height:25, backgroundColor:Colors.primary800, borderColor:'white', borderWidth:3, borderRadius:15}}></View>
                    </Marker>

                    <Marker coordinate={{ latitude : 48.49010044 , longitude : 35.0979859 }}>
                        <View style={{width:100, height:100, backgroundColor:'#FF18431A', borderRadius:50, alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:35, height:35, backgroundColor:Colors.red, borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                                <FontAwesome name="location-arrow" color={'white'} size={15}/>
                            </View>
                        </View>
                    </Marker>
                </MapView>

                <View style={styles.block}>
                </View>


                <FlatList data={markers} renderItem={renderItem} style={{width:'100%',position:'absolute', top:590, left:30}}/>

                <StatusBar style="auto"/>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    title:{
        fontSize:17,
        color:Colors.title01,
        marginTop:20,
        marginLeft:20,
        fontFamily:'SemiBold',
    },
    map: {
        marginTop:20,
        width: '100%',
        height: 500,
    },
    block: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        position:'absolute',
        top:550,
        borderRadius: 20,
        height: 180,
        width: '100%',
        marginTop: 20,
    },
});
