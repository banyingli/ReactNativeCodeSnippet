import React from "react";
import { StyleSheet, Image } from 'react-native';

export default class NavBackButton extends React.Component {
  render() {
    return (
      <Image source={require('../../res/icon_nav_back.png')} style={styles.backButton} />
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    width: 10,
    height: 17,
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10,
    },
});
