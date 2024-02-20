import React, {useState} from 'react';
import {Button, TextInput, StyleSheet, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const TOKEN = 'your-token';

    const handleLogin = async () => {
        try {
            if (username === 'admin' && password === 'admin') {
                await AsyncStorage.setItem('userToken', TOKEN);
                navigation.navigate('FeedScreen'); // переход на экран Feed после успешной авторизации, но не работает
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <TextInput style={styles.input}
                       placeholder="Username"
                       value={username}
                       onChangeText={setUsername}
            />
            <TextInput style={styles.input}
                       placeholder="Password"
                       value={password}
                       onChangeText={setPassword}
                       secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleLogin}>
                <Button title="Login" onPress={handleLogin}/>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        paddingTop: 50,
        resizeMode: "cover",
    },
    input: {
        width: 343,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 29.05,
        marginBottom: 20,
    },
    button: {
        width: 343,
        height: 51,
        borderRadius: 100,
        padding: 16,
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5DB075',
        marginTop: 20,
    },
    forget: {
        color: "#5DB075",
    }
});

export default LoginPage;