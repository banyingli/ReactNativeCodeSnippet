// 'use strict';
import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image,
  Navigator
 } from 'react-native';
 
import TabNavigator from 'react-native-tab-navigator';
import TabPage1 from './TabPage1.js'
import TabPage2 from './TabPage2.js'
import TabPage3 from './TabPage3.js'

class MainPage extends Component {
    constructor(props) {
         super(props);
         this.state = {
              selectedTab:'tab1' // 默认显示tab1标签
          };

         this.jumpPage = this.jumpPage.bind(this);
    }

    // 页面跳转('方法','页面信息')
    jumpPage(method, routerData){
        this.props[method](routerData);
    }

    render() {
        return (
          <View style={{flex: 1}}>
              <TabNavigator tabBarStyle={styles.tab} >
                  <TabNavigator.Item
                      selected={this.state.selectedTab === 'tab1'}
                      title="Tab1"
                      renderIcon={() => <Image source={require('./res/icon_bottomtag_market_n.png')} style={styles.tabImage} />}
                      renderSelectedIcon={() => <Image source={require('./res/icon_bottomtag_market_s.png')}  style={styles.tabImage} />}
                      onPress={() => this.setState({ selectedTab: 'tab1' })}>
                      <TabPage1  routerCallback={this.jumpPage} />
                  </TabNavigator.Item>

                  <TabNavigator.Item
                      selected={this.state.selectedTab === 'tab2'}
                      title="Tab2"
                      renderIcon={() => <Image source={require('./res/icon_bottomtag_home_n.png')}  style={styles.tabImage} />}
                      renderSelectedIcon={() => <Image source={require('./res/icon_bottomtag_home_s.png')}  style={styles.tabImage} />}
                      onPress={() => this.setState({ selectedTab: 'tab2' })}>
                      <TabPage2  routerCallback={this.jumpPage} />
                  </TabNavigator.Item>

                  <TabNavigator.Item
                      selected={this.state.selectedTab === 'tab3'}
                      title="Tab3"
                      renderIcon={() => <Image source={require('./res/icon_bottomtag_home_n.png')}  style={styles.tabImage} />}
                      renderSelectedIcon={() => <Image source={require('./res/icon_bottomtag_home_s.png')}  style={styles.tabImage} />}
                      onPress={() => this.setState({ selectedTab: 'tab3' })}>
                      <TabPage3  routerCallback={this.jumpPage} />
                  </TabNavigator.Item>
              </TabNavigator>
          </View>
        );
    }
};
 
var styles = StyleSheet.create({
    tab: {
        height: 48,
        backgroundColor: '#eee',
        alignItems: 'center',
        paddingTop: 2
    },
    tabImage: {
        height: 26,
        width: 26
    },
});

export default MainPage;