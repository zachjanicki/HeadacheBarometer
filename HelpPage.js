'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomePage extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    return(
      <View>
        <Text>This is the help page</Text>
      </View>
    );
  }
}
