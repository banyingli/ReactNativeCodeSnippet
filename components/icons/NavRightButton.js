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

    // 处理点击事件
    handleClick(){
        // 如果页面上有传来clickCallback，则回调；如果没有，则进行跳转
        if(this.props.hasOwnProperty('clickCallback')){
            this.props.clickCallback();
        }else if(this.props.hasOwnProperty('router')){
            this.props['toRoute'](this.props.router);
        }
    }

    render() {
        // 根据rightCorner属性判断显示哪个按钮
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