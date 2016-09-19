/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 'use strict';
import React, { Component,PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class ThirdPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.textStyle} > 三级页面 </Text>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    textStyle:{
        backgroundColor:'#eee',
        color:'#000',
        fontSize:30,
        marginTop:30,
    },
});

export default ThirdPage;