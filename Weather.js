import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {
    render() {
        return (
            <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons name="ios-rainy" size={130} color="white" />
                    <Text style={styles.temp}>Temp</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>raining</Text>
                    <Text style={styles.subtitle}>look outside</Text>
                </View>
            </LinearGradient>
        );
    }

}

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
