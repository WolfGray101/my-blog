import React from 'react';
import Header from '../Header';
import ItemList from '../Item-list/Item-list';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
