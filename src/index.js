import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import classes from "./components/App/App.module.scss";

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <main className={classes.App}>
        <App />
</main>
)

