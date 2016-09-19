/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import ThirdPage from './ThirdPage.js'

export default class SecondPage extends Component {
    constructor(props) {
        super(props);

        this.toRoute = this.toRoute.bind(this);
    }

    toRoute(){
        var r = {name: 'From SecondPage',
            component: ThirdPage};
        this.props['toRoute'](r);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.textStyle} onPress={this.toRoute}> 二级页面 </Text>
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

