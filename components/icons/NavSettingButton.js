import React, {Component} from "react";
import {StyleSheet, Image, View, TouchableHighlight} from 'react-native';

export default class NavSettingButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor={'transparent'}
                    onPress={this.props.clickCallback}
                >
                    <Image
                        source={require('../../res/icon_nav_setting.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 5,
        marginRight: 0,
    },
});
