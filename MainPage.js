// 'use strict';
import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Image,
    Navigator,
    ToastAndroid
 } from 'react-native';
 
import TabNavigator from 'react-native-tab-navigator';
import TabPage1 from './TabPage1.js'
import TabPage2 from './TabPage2.js'
import TabPage3 from './TabPage3.js'
import SecondPage from './SecondPage.js'

class MainPage extends Component {
    constructor(props) {
         super(props);
         this.state = {
              selectedTab:'tab1', // 默认显示tab1标签
          };

         this.jumpPage = this.jumpPage.bind(this);
         this.changeTab = this.changeTab.bind(this);
    }

    componentDidMount() {
        this.changeTab('tab1','TabPage1');
    }

    // 页面跳转('方法','页面信息')
    jumpPage(method, routerData){
        this.props[method](routerData);
    }

    showToast(){
        ToastAndroid.show("被点击了",1000);
    }

    // 切换Tab页（当前tab名,切换到当前tab时导航栏上的title)
    changeTab(currentTab, titleText){
        this.setState({ selectedTab: currentTab });
        this.props.setTitleProps({name: titleText});
        if(currentTab=='tab1'){
            this.props.setRightProps({
                rightCorner: 'search',
                clickCallback: this.showToast
            });
        }else if(currentTab=='tab2'){
            this.props.setRightProps({
                rightCorner: 'search',
                router:{
                    name: 'From tab2 search',
                    component: SecondPage,
                }
            });
        }else{
            this.props.setRightProps({
                rightCorner: 'setting',
                router:{
                    name: 'From setting',
                    component: SecondPage,
                }
            });
        }

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
                      onPress={() => this.changeTab('tab1','TabPage1')}>
                      <TabPage1  routerCallback={this.jumpPage} changeNavTitle={this.changeTitle} />
                  </TabNavigator.Item>

                  <TabNavigator.Item
                      selected={this.state.selectedTab === 'tab2'}
                      title="Tab2"
                      renderIcon={() => <Image source={require('./res/icon_bottomtag_home_n.png')}  style={styles.tabImage} />}
                      renderSelectedIcon={() => <Image source={require('./res/icon_bottomtag_home_s.png')}  style={styles.tabImage} />}
                      onPress={() => this.changeTab('tab2','TabPage2')}>
                      <TabPage2  routerCallback={this.jumpPage} changeNavTitle={this.changeTitle} />
                  </TabNavigator.Item>

                  <TabNavigator.Item
                      selected={this.state.selectedTab === 'tab3'}
                      title="Tab3"
                      renderIcon={() => <Image source={require('./res/icon_bottomtag_home_n.png')}  style={styles.tabImage} />}
                      renderSelectedIcon={() => <Image source={require('./res/icon_bottomtag_home_s.png')}  style={styles.tabImage} />}
                      onPress={() => this.changeTab('tab3','TabPage3')}>
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