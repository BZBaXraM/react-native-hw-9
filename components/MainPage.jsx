import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, ScrollView} from "react-native";
import Card from "./Card";

const MainPage = () => {
    const [search, setSearch] = useState('');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text && {color: "#5DB075", fontSize: 20}}>Back</Text>
                <Text style={styles.text}>Market</Text>
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
            <View>
                <Text style={styles.text}>
                    Hot deals
                </Text>
            </View>
            <View style={styles.itemsBox}>
                <Card/>
                <Card/>
                <Card/>
            </View>
            <View style={styles.itemsBox}>
                <Card/>
                <Card/>
                <Card/>
            </View>
            <View>
                <Text style={styles.text}>Trending</Text>
            </View>
            <View style={styles.itemsBox}>
                <Card/>
                <Card/>
                <Card/>
            </View>
            <View style={styles.itemsBox}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    text: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 29.05
    },
    itemsBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    header: {
        width: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 80,
        alignItems: "center",
    },
    search: {
        padding: 10,
        width: 370,
        height: 50,
        borderRadius: 20,
        alignItems: "flex-start",
        justifyContent: "center",
        borderColor: "#bfbfbf",
        borderWidth: 2,
        marginTop: 40,
        marginBottom: 20,
    },
});

export default MainPage;