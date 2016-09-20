import React, {Component, PropTypes} from "react";
import {StyleSheet, Image, View, Text, TouchableHighlight, ToastAndroid} from 'react-native';

import NavSearchButton from './NavSearchButton.js';
import NavSettingButton from './NavSettingButton.js';

const propTypes = {
    toRoute: PropTypes.func.isRequired,
};


class NavRightButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // �������¼�
    handleClick(){
        // ���ҳ�����д���clickCallback����ص������û�У��������ת
        if(this.props.hasOwnProperty('clickCallback')){
            this.props.clickCallback();
        }else if(this.props.hasOwnProperty('router')){
            this.props['toRoute'](this.props.router);
        }
    }

    render() {
        // ����rightCorner�����ж���ʾ�ĸ���ť
        const rightCorner = this.props.rightCorner;
        if(rightCorner == 'setting'){
            return (
                <View style={styles.container}>
                    <NavSettingButton clickCallback={this.handleClick} />
                </View>
            );
        }else{
            return (
                <View style={styles.container}>
                    <NavSearchButton  clickCallback={this.handleClick} />
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

NavRightButton.propTypes = propTypes;
export default NavRightButton;