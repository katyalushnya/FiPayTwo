import {useCallback, useContext, useEffect} from "react";
import {AuthContext} from "../../store/auth-context";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AuthenticatedStack from "./AuthenticatedStack";

import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from "expo-app-loading";

export default function Navigation() {
    const [fontsLoaded] = useFonts({
        'Bold': require('../../assets/fonts/SourceSansPro-Bold.ttf'),
        'SemiBold': require('../../assets/fonts/SourceSansPro-SemiBold.ttf'),
        'Regular': require('../../assets/fonts/SourceSansPro-Regular.ttf'),
        'Italic': require('../../assets/fonts/SourceSansPro-Italic.ttf'),
    });

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <NavigationContainer>
            {!authCtx.nav && <AuthStack/>}
            {authCtx.nav && <AuthenticatedStack/>}
        </NavigationContainer>
    );
}
