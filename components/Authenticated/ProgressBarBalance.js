import * as React from 'react';
import {View} from 'react-native';
import {VictoryPie, VictoryLabel} from "victory-native";
import Svg, {Circle} from "react-native-svg";
import {Colors} from "../../constants/styles";

export default function  ProgressBarBalance (){
    const percent = 85;

        return (
            <Svg viewBox="0 0 300 300">
                <VictoryPie
                    standalone={false}
                    animate={{duration: 1000}}
                    width={300} height={300}
                    data={[
                        {x: 1, y: 85}, {x: 2, y: 11.300},
                    ]}
                    innerRadius={115}
                    cornerRadius={25}
                    labels={() => null}
                    style={{
                        data: {
                            fill: ({datum}) => {
                                const color = Colors.primary800;
                                return datum.x === 1 ? color : "transparent";
                            }
                        }
                    }}
                />
                <Circle cx={75} cy={72} r={15} fill={Colors.primary800}/>
                <Circle cx={75} cy={72} r={9} fill={'white'}/>
                <VictoryLabel
                    textAnchor="middle"
                    style={{fontSize: 35}}
                    x={150} y={140}
                    text="85%"
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{fontSize: 14}}
                    x={150} y={170}
                    text="DEC 28"
                />
            </Svg>
        );


}
