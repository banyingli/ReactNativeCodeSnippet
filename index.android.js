import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import Router from 'react-native-simple-router';
import MainPage from './MainPage';
import NavBackButton from './components/icons/NavBackButton.js';
import NavTitle from './components/NavTitle.js';
import NavRightButton from './components/icons/NavRightButton.js';
import NavSpaceButton from './components/icons/NavSpaceButton.js';

// ������һ��ҳ��
const firstRoute = {
    name: 'RNCodeSnippet',
    component: MainPage,
    titleComponent: NavTitle,
    rightCorner: NavRightButton,
    leftCorner: NavSpaceButton // ռλ��Ϊ����title����
};

class ReactNativeCodeSnippet extends Component {
    render() {
        return (
            <Router
                firstRoute={firstRoute}
                handleBackAndroid
                headerStyle={styles.navHeader}
                titleStyle={styles.navTitle} // �������ʽ
                backButtonComponent={NavBackButton} // ���ذ�ťʹ�ü�ͷ
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

// һ��Ҫע�������е�'ReactNativeCodeSnippet'������MainActivity��getMainComponentName()�ķ���ֵһ�£�����ᱨ��
AppRegistry.registerComponent('ReactNativeCodeSnippet', () => ReactNativeCodeSnippet);


