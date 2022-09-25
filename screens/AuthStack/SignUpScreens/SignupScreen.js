import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../../components/Auth/AuthContent';
import LoadingOverlay from '../../../components/ui/LoadingOverlay';
import { AuthContext } from '../../../store/auth-context';
import { createUser } from '../../../utils/auth';
import {useNavigation} from "@react-navigation/native";
import {Account} from "../../../models/account";
import {init, insertPlace} from "../../../utils/database";

function SignupScreen() {

    const navigation = useNavigation();
    const authCtx = useContext(AuthContext);

    let [accountData, setAccountData] = useState(null);
    init();

    async function signupHandler({ email, password, name }) {
        try {
            const token = await createUser(email, password, name);
            console.log(name);
            authCtx.authenticate(token);
            setAccountData = new Account(name, token, 'address', email, 1);
            navigation.push('Varification');
        } catch (error) {
            Alert.alert(
                'Authentication failed',
                'Could not create user, please check your input and try again later.'
            );
        }
        await insertPlace(accountData);
    }


    return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
