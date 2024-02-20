import {createStackNavigator} from "@react-navigation/stack";
import LoginPage from "../components/LoginPage";

const Stack = createStackNavigator();
const AuthScreen = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage}/>
    </Stack.Navigator>
);

export default AuthScreen;