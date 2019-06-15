import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        icon: "ios-rainy",
        title: "Raining",
        subtitle: "Look outside"
    },
    Clear: {
        colors:["#FEF235", "#FF7300"],
        icon: "ios-sunny",
        title: "Sunnnny",
        subtitle: "Get outside"
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        icon: "ios-thunderstorm",
        title: "Thunderstorm",
        subtitle: "In house"
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        icon: "ios-cloudy",
        title: "Clouds",
        subtitle: "Gloooooomy"
    },
    Snow: {
        colors:["#7DE2FC", "#89B6E5"],
        icon: "ios-snow",
        title: "Cold",
        subtitle: "It so cold!"
    },
    Drizzle: {
        colors:["#98F7FE", "#66A6FF"],
        icon: "ios-rainy",
        title: "Drizzle",
        subtitle: "Is rainny???"
    },
    Haze: {
        colors:["#98F7FE", "#66A6FF"],
        icon: "ios-reorder",
        title: "Haze",
        subtitle: "Is cloud???"
    }
}

function Weather({temp, weatherName}){
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons name={weatherCases[weatherName].icon} size={130} color="white" />
                <Text style={styles.temp}>{temp}ºC</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}
export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 50,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 40,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 20,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 20
    }
});
