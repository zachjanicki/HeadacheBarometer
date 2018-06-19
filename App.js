/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import HomePage from './HomePage';
import TrendsPage from './TrendsPage';
import HeadachesPage from './HeadachesPage';
import HelpPage from './HelpPage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      selectedTab: 'HomePage'
    };
  }

  _homePageOnPress = () => {
    this.setState({
      selectedTab: 'HomePage'
    });
  }

  _trendsPageOnPress = () => {
    this.setState({
      selectedTab: 'TrendsPage'
    });
  }

  _headachesPageOnPress = () => {
    this.setState({
      selectedTab: 'HeadachesPage'
    });
  }

  _helpPageOnPress = () => {
    this.setState({
      selectedTab: 'HelpPage'
    });
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          title="Home"
          selected={this.state.selectedTab === 'HomePage'}
          onPress={this._homePageOnPress}>
          <HomePage/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Trends"
          selected={this.state.selectedTab === 'TrendsPage'}
          onPress={this._trendsPageOnPress}>
          <TrendsPage/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Headaches"
          selected={this.state.selectedTab === 'HeadachesPage'}
          onPress={this._headachesPageOnPress}>
          <HeadachesPage/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Help"
          selected={this.state.selectedTab === 'HelpPage'}
          onPress={this._helpPageOnPress}>
          <HelpPage/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
