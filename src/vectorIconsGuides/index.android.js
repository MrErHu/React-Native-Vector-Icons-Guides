import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import App from './App'

export default class vectorIconsGuides extends Component {
    render() {
        return (
            <View style={styles.container}>
                <App />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        backgroundColor: '#FFFFFF',
    }
});

AppRegistry.registerComponent('vectorIconsGuides', () => vectorIconsGuides);
