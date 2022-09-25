import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";
import {Colors} from "../../constants/styles";
import WelcomeScreen from "../../screens/AuthenticalStack/WelcomeScreen";
import IconButton from "../ui/IconButton";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import StaticsDiagram from "../../screens/AuthenticalStack/StaticsDiagram";
import CurrenceBalance from "../../screens/AuthenticalStack/CurrenceBalance";
import Settings from "../../screens/AuthenticalStack/Settings";
import LoginSecurity from "../../screens/AuthenticalStack/LoginSecurity";
import NotificationSettings from "../../screens/AuthenticalStack/NotificationSettings";
import Profiles from "../../screens/AuthenticalStack/Profiles";
import Others from "../../screens/AuthenticalStack/Others";
import MyCard from "../../screens/AuthenticalStack/MyCard";
import Services from "../../screens/AuthenticalStack/Services";
import Contacts from "../../screens/AuthenticalStack/Contacts";
import ManageMoney from "../../screens/AuthenticalStack/ManageMoney";
import Branches from "../../screens/AuthenticalStack/Branches";
import ExchangeMoney from "../../screens/AuthenticalStack/ExchangeMoney";
import ExchangeRate from "../../screens/AuthenticalStack/ExchangeRate";
import DetailScreen from "../../screens/AuthenticalStack/DetailBalance";
import BudgetCalculation from "../../screens/AuthenticalStack/BudgetCalculation";
import TotalSpent from "../../screens/AuthenticalStack/TotalSpent";
import Currency from "../../screens/AuthenticalStack/Currency";
import Expenses from "../../screens/AuthenticalStack/Expenses";
import AccountAnalytics from "../../screens/AuthenticalStack/AccountAnalytics";
import TransferMoney from "../../screens/AuthenticalStack/TransferMoney";
import AddRecipient from "../../screens/AuthenticalStack/AddRecipient";
import SuccessfulTransfer from "../../screens/AuthenticalStack/SuccessfulTransfer";
import TopupMoney from "../../screens/AuthenticalStack/TopUpMoney";
import FlightTicket from "../../screens/AuthenticalStack/FlightTicket";
const Stack = createNativeStackNavigator();

export default function AuthenticatedStack() {
    const authCtx = useContext(AuthContext);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="Tabs" component={BottomTabs}/>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerRight: ({ tintColor }) => (
                        <IconButton
                            icon="exit"
                            color={tintColor}
                            size={24}
                            onPress={authCtx.logout}
                        />
                    ),
                }}
            />
            <Stack.Screen name="StaticsDiagram" component={StaticsDiagram}/>
            <Stack.Screen name="CurrenceBalance" component={CurrenceBalance}/>
            <Stack.Screen name="AccountAnalytics" component={AccountAnalytics}/>
            <Stack.Screen name="Settings" component={Settings}/>
            <Stack.Screen name="LoginSecurity" component={LoginSecurity}/>
            <Stack.Screen name="NotificationSettings" component={NotificationSettings}/>
            <Stack.Screen name="Profiles" component={Profiles}/>
            <Stack.Screen name="Others" component={Others}/>
            <Stack.Screen name="MyCard" component={MyCard}/>
            <Stack.Screen name="Services" component={Services}/>
            <Stack.Screen name="Contacts" component={Contacts}/>
            <Stack.Screen name="ManageMoney" component={ManageMoney}/>
            <Stack.Screen name="Branches" component={Branches}/>
            <Stack.Screen name="ExchangeMoney" component={ExchangeMoney}/>
            <Stack.Screen name="ExchangeRate" component={ExchangeRate}/>
            <Stack.Screen name="DetailBalance" component={DetailScreen}/>
            <Stack.Screen name="BudgetCalculation" component={BudgetCalculation}/>
            <Stack.Screen name="TotalSpent" component={TotalSpent}/>
            <Stack.Screen name="Expenses" component={Expenses}/>
            <Stack.Screen name="Currency" component={Currency}/>
            <Stack.Screen name="TransferMoney" component={TransferMoney}/>
            <Stack.Screen name="AddRecipient" component={AddRecipient}/>
            <Stack.Screen name="SuccessfulTransfer" component={SuccessfulTransfer}/>
            <Stack.Screen name="TopupMoney" component={TopupMoney}/>
            <Stack.Screen name="FlightTicket" component={FlightTicket}/>
        </Stack.Navigator>
    );
}
