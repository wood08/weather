import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        icon: "weather-pouring",
        title: "Raining",
        subtitle: "Look outside"
    },
    Clear: {
        colors:["#FEF235", "#FF7300"],
        icon: "weather-sunny",
        title: "Sunnnny",
        subtitle: "Get outside"
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        icon: "weather-lightning",
        title: "Thunderstorm",
        subtitle: "In house"
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        icon: "weather-cloudy",
        title: "Clouds",
        subtitle: "Gloooooomy"
    },
    Snow: {
        colors:["#7DE2FC", "#89B6E5"],
        icon: "weather-snowy",
        title: "Cold",
        subtitle: "It so cold!"
    },
    Drizzle: {
        colors:["#98F7FE", "#66A6FF"],
        icon: "weather-rainy",
        title: "Drizzle",
        subtitle: "Is rainny???"
    },
    Haze: {
        colors:["#98F7FE", "#66A6FF"],
        icon: "weather-fog",
        title: "Haze",
        subtitle: "Is cloud???"
    },
    Mist: {
        colors:["#98F7FE", "#66A6FF"],
        icon: "weather-fog",
        title: "Mist",
        subtitle: "Is cloud?????"
    }
}

function Weather({temp, weatherName}){
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons name={weatherCases[weatherName].icon} size={130} color="white" />
                <Text style={styles.temp}>{temp}ºC</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};
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
