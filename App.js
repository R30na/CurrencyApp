import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './app/screens/Home.screen';

import { Provider } from 'react-redux';
import store from './app/redux';


const AppDrawerNav = DrawerNavigator({
  'Home': { screen: HomeScreen }
});

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <AppDrawerNav />
      </Provider>
    );
  }
}

export default App;