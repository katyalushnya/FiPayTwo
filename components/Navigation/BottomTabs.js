
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Colors} from "../../constants/styles";
import Home from "../../screens/AuthenticalStack/Tabs/Home";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Statistics from "../../screens/AuthenticalStack/Tabs/Statistics";
import Notification from "../../screens/AuthenticalStack/Tabs/Notification";
import Account from "../../screens/AuthenticalStack/Tabs/Account";
import SendMoney from "../../screens/AuthenticalStack/Tabs/SendMoney";

const TabsStack = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <TabsStack.Navigator tabBarOptions={{showLabel: false, }} screenOptions={{tabBarActiveTintColor: Colors.primary800,}}>
            <TabsStack.Screen name={'Home'} component={Home} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size}/>)}}/>
            <TabsStack.Screen name={'Statistics'} component={Statistics} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chart-box" color={color} size={size}/>)}}/>
            <TabsStack.Screen name={'SendMoney'} component={SendMoney} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="plus-box" color={color} size={size}/>)}}/>
            <TabsStack.Screen name={'Notification'} component={Notification} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bell" color={color} size={size}/>)}}/>
            <TabsStack.Screen name={'Account'} component={Account} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size}/>)}}/>
        </TabsStack.Navigator>
    );
}

/*<TabsStack.Screen name={'SendMoney'} component={SendMoney} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="plus-box" color={color} size={size}/>)}}/>
                 */
