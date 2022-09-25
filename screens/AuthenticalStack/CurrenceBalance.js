import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {VictoryChart, VictoryAxis, VictoryBar} from "victory-native";
import {Colors} from "../../constants/styles";
import GlobalStyle from "../../components/ui/GlobalStyle";
import ProgressBarBalance from "../../components/Authenticated/ProgressBarBalance";

export default function CurrenceBalance () {
    const income = '14.700';
    const expense = '11.300';
    const data = [6, 7, 8, 4, 9, 7, 6, 8, 6, 4, 10, 6, 7, 8, 6, 9, 10, 6, 8, 5, 4, 11,6, 7, 8, 4, 9, 10, 6, 8, 9,5];

        return (
            <View style={GlobalStyle.all}>

                <View style={{flexDirection: 'row', backgroundColor: Colors.primary800, width: '100%', height: '50%'}}>
                    <Text style={styles.title}>Current balance</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 120,
                    left: 20,
                    width: '90%',
                    backgroundColor: 'white',
                    height: 100,
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginRight: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{
                            backgroundColor: '#6D5FFD1A',
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <MaterialIcons name="arrow-downward" color={Colors.primary800} size={23}/>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 14,
                                color: '#545D69',
                                fontFamily: 'Regular',
                                marginLeft: 5
                            }}>Income</Text>
                            <Text style={{
                                fontSize: 23,
                                fontFamily: 'SemiBold',
                                marginLeft: 5,
                                color: Colors.primary800,
                            }}>${income}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40}}>
                        <View style={{
                            backgroundColor: '#FF18431A',
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <MaterialIcons name="arrow-upward" color={Colors.red} size={23}/>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 14,
                                color: '#545D69',
                                fontFamily: 'Regular',
                                marginLeft: 5
                            }}>Expense</Text>
                            <Text style={{
                                fontSize: 23,
                                fontFamily: 'SemiBold',
                                marginLeft: 5,
                                color: Colors.red,
                            }}>${expense}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.block}>
                    <View style={{transform: [{scale: 0.7}], marginTop:-280}}>
                        <ProgressBarBalance/>
                    </View>
                    <Text style={{marginTop:-280, fontSize: 20, fontFamily: 'SemiBold',marginLeft:155}}>Days</Text>
                    <View style={{marginLeft:-25, marginTop:-50}}>
                        <VictoryChart
                            domainPadding={-7}>
                            <VictoryAxis
                                style={{
                                    axis: {stroke: "white",size: 5}}}
                                tickValues={[1, 5, 10, 15, 20, 25, 30]}
                            />
                            <VictoryBar
                                cornerRadius={3}
                                style={{ data: { fill: Colors.primary800, width: 5, } }}
                                data={data}
                            />
                        </VictoryChart>
                    </View>
                </View>

                <StatusBar style="auto"/>
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 23,
        color: '#ffffff',
        marginTop: 70,
        marginLeft: 20,
        fontFamily: 'SemiBold',
    }, block: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.primary800,
        borderRadius: 10,
        height: 540,
        marginLeft: 20,
        position: 'absolute',
        top: 240,
        width: '90%',
    },
});
