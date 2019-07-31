import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

export default class App extends Component {
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <Text>Hello world!</Text>
            </View>
        )
    }
}