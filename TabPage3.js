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

import SecondPage from './SecondPage.js'

class TestPage3 extends Component {
    constructor(props) {
        super(props);
        this.toRoute = this.toRoute.bind(this);
    }

    toRoute(){
        var r = {name: 'From TabPage3',
            component: SecondPage};
        this.props.routerCallback('toRoute',r);
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <Text style={styles.textStyle}  onPress={this.toRoute}> Tab  页面 3</Text>

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

export default TestPage3;