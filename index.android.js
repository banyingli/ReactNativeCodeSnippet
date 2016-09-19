import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import Router from 'react-native-simple-router';
import MainPage from './MainPage';

// ������һ��ҳ��
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

// һ��Ҫע�������е�'ReactNativeCodeSnippet'������MainActivity��getMainComponentName()�ķ���ֵһ�£�����ᱨ��
AppRegistry.registerComponent('ReactNativeCodeSnippet', () => ReactNativeCodeSnippet);
