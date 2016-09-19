import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import Router from 'react-native-simple-router';
import MainPage from './MainPage';
import NavBackButton from './components/icons/NavBackButton.js'

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
                headerStyle={styles.navHeader}
                titleStyle={styles.navTitle} // 标题的样式
                backButtonComponent={NavBackButton} // 返回按钮使用箭头
                ref={'router'}
                />
        );
    }
}

const styles = StyleSheet.create({
    navHeader: {
        backgroundColor: '#fcaf17',
    },
    navTitle: {
        textAlign: 'center',
    }
});

// 一定要注意引号中的'ReactNativeCodeSnippet'必须与MainActivity中getMainComponentName()的返回值一致，否则会报错
AppRegistry.registerComponent('ReactNativeCodeSnippet', () => ReactNativeCodeSnippet);


