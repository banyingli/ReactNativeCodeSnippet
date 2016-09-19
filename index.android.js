import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import Router from 'react-native-simple-router';
import MainPage from './MainPage';

// 声明第一个页面
const firstRoute = {
    name: 'RNCodeSnippet',
    component: MainPage,
};

class ReactNativeCodeSnippet extends Component {
    render() {
        return (
            <Router
                firstRoute={firstRoute}
                handleBackAndroid
                headerStyle={styles.header}
                ref={'router'}
                />
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fcaf17',
    },
});

// 一定要注意引号中的'ReactNativeCodeSnippet'必须与MainActivity中getMainComponentName()的返回值一致，否则会报错
AppRegistry.registerComponent('ReactNativeCodeSnippet', () => ReactNativeCodeSnippet);
