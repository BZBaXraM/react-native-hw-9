import React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from "../components/Card";
import Feed from "../components/Feed";

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <Button
                onPress={() => navigation.navigate('Card')}
                title="Card"
                color="#000"
            />
        ),
    });

    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Card" component={Card} />
        </Tab.Navigator>
    );
};

export default MainScreen;
