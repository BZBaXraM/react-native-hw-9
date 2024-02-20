import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen";
import LoginPage from "./components/LoginPage";


const Stack = createStackNavigator();

const App = () => {
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        const checkToken = async () => {
            await AsyncStorage.clear();
            const token = await AsyncStorage.getItem('userToken');
            setUserToken(token);
        };

        checkToken();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userToken ? (
                    <Stack.Screen name="MainScreen" component={MainScreen}/>
                ) : (
                    <Stack.Screen name="LoginPage" component={LoginPage}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#bfbfbf",
    },
});