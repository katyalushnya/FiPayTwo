import {useContext, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../../constants/styles';
import * as React from "react";
import GlobalStyle from "../../../components/ui/GlobalStyle";

import Svg, { Circle, Rect } from 'react-native-svg';
import FaceScreen from "../../../components/Auth/FaceScreen";
import {AuthContext} from "../../../store/auth-context";
import LoadingOverlay from "../../../components/ui/LoadingOverlay";
import {login} from "../../../utils/auth";

export default function FaceAuthentificationScreen() {
    const navigation = useNavigation();
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [nav, setNav] = useState(false);

    const authCtx = useContext(AuthContext);

    async function faceHandler({}) {

            try {
                authCtx.navigateScreen(true);
                setIsAuthenticating(true);
            } catch (error) {
                Alert.alert(
                    'Authentication failed!',
                    'Could not log you in. Please check your credentials or try again later!'
                );
                authCtx.navigateScreen(false);
                setIsAuthenticating(false);
            }
        }

    if (isAuthenticating) {
        return <LoadingOverlay message="Logging you in..." />;
    }

    return <FaceScreen onFace={faceHandler}/>;
}
