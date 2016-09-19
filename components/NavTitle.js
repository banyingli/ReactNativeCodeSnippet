/**
 * Created by Administrator on 2016/9/19.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class NavTitle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<View><Text style={styles.navbarText}>{this.props.name}</Text></View>);
    }
}

const styles = StyleSheet.create({
    navbarText: {
        color: 'white',
        fontSize: 17,
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        fontWeight: '600',
        textAlign: 'center',
        alignItems: 'center',
    },
});