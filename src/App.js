import React, {Component} from 'react';
import AppNavigator from './Navigation/AppNavigator';

class AppRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppNavigator />;
  }
}

export default AppRoot;
