import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, Text, TextInput} from "react-native";
import Card from "./Card";
import Message from "./Message";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
const Content = () => {
    const [search, setSearch] = useState('');
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text && {color: "#5DB075", fontSize: 20}}>Back</Text>
                <Text style={styles.text}>Content</Text>
                <Text style={styles.text && {color: "#5DB075", fontSize: 20}}>Filter</Text>
            </View>
            <View style={styles.search}>
                <TextInput
                    style={styles.text}
                    placeholder="Search"
                    onChangeText={setSearch}
                    value={search}
                />
            </View>
            <ScrollView>
                <Message message="Hello!" timestamp="12:00"/>
                <Message message="Hi!" timestamp="12:01"/>
                <Message message="Hello!" timestamp="12:02"/>
                <Message message="Hi!" timestamp="12:03"/>
                <Message message="Hello!" timestamp="12:04"/>
                <Message message="Hi!" timestamp="12:05"/>
                <Message message="Hello!" timestamp="12:06"/>
                <Message message="Hi!" timestamp="12:07"/>
            </ScrollView>
        </View>
    );
};

export default Content;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    text: {
        fontSize: 20,
        fontWeight: 500
    },
    header: {
        width: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 80,
    },
    search: {
        padding: 10,
        width: 370,
        height: 50,
        borderRadius: 20,
        borderColor: "#bfbfbf",
        borderWidth: 2,
        marginTop: 40,
        marginBottom: 20,
    },
})