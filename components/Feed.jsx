import React from 'react';
import {View, Text, Image, FlatList, StyleSheet, ImageBackground} from 'react-native';

const messages = [
    {id: '1', user: 'Bahram', avatarUrl: 'https://reactnative.dev/img/tiny_logo.png', text: 'Hello!'},
    {id: '2', user: 'Robot', avatarUrl: 'https://reactnative.dev/img/tiny_logo.png', text: 'Hi!'},
    // ...
];

const Message = ({user, avatarUrl, text}) => (
    <View style={styles.messageContainer}>
        <Image source={{uri: avatarUrl}} style={styles.avatar}/>
        <View>
            <Text>{user}</Text>
            <Text>{text}</Text>
        </View>
    </View>
);

const Feed = () => (
    <ImageBackground source={'/assets/tron.jpg'} style={styles.background}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text && {color: "#5DB075", fontSize: 20}}>Back</Text>
                <Text style={styles.text}>Feed</Text>
                <Text style={styles.text && {color: "#5DB075", fontSize: 20}}>Filter</Text>
            </View>
            <View style={styles.search}>
                <Text style={styles.text}>Search</Text>
            </View>
            <FlatList
                data={messages}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Message  {...item}/>}
            />

        </View>
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    text: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 29.05
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
    messageContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    bottomContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomImage: {
        width: 100,
        height: 100,
    },
});

export default Feed;