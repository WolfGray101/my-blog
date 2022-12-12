import React from 'react';
import Header from '../Header';
import ItemList from '../Item-list/Item-list';
import classes from './App.module.scss';
import store from '../../store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className={classes.App}>
      <Header />
      <ItemList />
    </div>
    </Provider>
  );
}

export default App;
