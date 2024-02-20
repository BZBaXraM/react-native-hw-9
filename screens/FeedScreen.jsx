import React from 'react'
import {Text, View, Button} from 'react-native'

const FeedScreen = ({navigation}) => {
    const handleButtonPress = () => {
        navigation.navigate('Feed')
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>Feed</Text>
            <Button onPress={handleButtonPress} title="Go To Article screen" />
        </View>
    )
}

export default FeedScreen
