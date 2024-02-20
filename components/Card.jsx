import {Text, View, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";


export const data = [
    {
        id: 1,
        title: "title1",
        description: "description1",
        price: 19.99,
    },
    {
        id: 2,
        title: "title2",
        description: "description2",
        price: 19.99,
    },
    // {
    //     id: 3,
    //     title: "title3",
    //     description: "description3",
    // },
    // {
    //     id: 4,
    //     title: "title4",
    //     description: "description4",
    // }
];

const Card = () => {
    const {title, description, price} = data[0];

    const handlePress = () => {
        Alert.alert(
            "Product Information",
            `Title: ${title}\nDescription: ${description}\nPrice: ${price}`
        );
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Image style={styles.box} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}/>
                <View style={{flex: 1, flexDirection: "column", flexWrap: "wrap"}}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                    <Text style={styles.text}>
                        {description}
                    </Text>
                    ${price}
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
    },
    text: {
        fontSize: 20
    },
    box: {
        width: 110,
        height: 110,
        backgroundColor: "#bfbfbf",
        borderRadius: 8,
    },
});


export default Card;