import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";
import { API_KEY } from "./config";

export default class App extends Component {
    state = {
        isLoaded: false,
        error: null,
        temperature: null,
        name: null
    };
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this._getWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: error
                });
            }
        );
    }

    _getWeather = (lat, lon) => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&lat='+lat+'&lon='+lon+'&APPID='+API_KEY;
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                temperature: json.main.temp,
                name: json.weather[0].main,
                isLoaded: true
            });
        });
    }

    render() {
        const {isLoaded, error, temperature, name} = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                {isLoaded ? <Weather temp={temperature} weatherName={name}/>:
                    (<View style={styles.loading}>
                        <Text style={styles.loadingText}>Getting the Weather</Text>
                        {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    </View>)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: 'row'
    },
    errorText: {
        color: "red",
        backgroundColor: "transparent",
        marginBottom: 40
    },
    loading: {
        flex: 1,
        backgroundColor: "#FDF6AA",
        justifyContent: "flex-end",
        paddingLeft: 30
    },
    loadingText: {
        fontSize: 40,
        marginBottom: 30
    }

});
