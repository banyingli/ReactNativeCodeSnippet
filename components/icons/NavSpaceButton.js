import React, {Component} from "react";
import {StyleSheet, View} from 'react-native';

export default class NavSpaceButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 29,
        height: 29,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
