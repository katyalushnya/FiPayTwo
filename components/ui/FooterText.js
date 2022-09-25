import { StyleSheet, Text, View } from 'react-native';

import * as React from "react";
import {Colors} from "../../constants/styles";

function FooterText({ children }) {
    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default FooterText;

const styles = StyleSheet.create({
    text:{
        color: Colors.softgrey,
        fontSize: 16,
        fontFamily:'SemiBold',
    },
});
