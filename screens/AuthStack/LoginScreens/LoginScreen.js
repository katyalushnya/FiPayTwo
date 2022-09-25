import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../../components/Auth/AuthContent';
import LoadingOverlay from '../../../components/ui/LoadingOverlay';
import { AuthContext } from '../../../store/auth-context';
import { login } from '../../../utils/auth';
import {useNavigation} from "@react-navigation/native";

function LoginScreen() {
    const navigation = useNavigation();
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [nav, setNav] = useState(false);

    const authCtx = useContext(AuthContext);

    async function loginHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const token = await login(email, password);
            authCtx.authenticate(token);
            navigation.replace('FaceAuthentification');
            //
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log you in. Please check your credentials or try again later!'
            );
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Authentification..." />;
    }

    return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
