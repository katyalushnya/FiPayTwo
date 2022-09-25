import React, { useState } from 'react'
import {View, Modal, Text, TouchableOpacity} from 'react-native'
import {Colors} from "../../constants/styles";
import {VictoryLabel, VictoryPie} from "victory-native";
import Svg from "react-native-svg";

const DiagramPie = ({}) => {

    return (
        <View style={{}}>
            <Svg viewBox="0 0 300 300">
                <VictoryPie
                    colorScale={[Colors.yellow, Colors.primary800, Colors.red, Colors.blue, Colors.orange]}
                    standalone={false}
                    width={300} height={300}
                    data={[
                        {x: 1, y: 120}, {x: 2, y: 150}, {x: 3, y: 75}, {x: 4, y: 75}, {x: 5, y: 75}
                    ]}
                    innerRadius={80} labelRadius={100}
                    style={{labels: {fontSize: 1}}}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{fontSize: 35}}
                    x={150} y={160}
                    text="60%"
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{fontSize: 15}}
                    x={150} y={120}
                    text="DEC 28"
                />
            </Svg>
        </View>
    )
}

export default DiagramPie;
