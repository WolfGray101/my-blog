import React from "react";
import Header from "../Header";
import ItemList from "../Item-list/Item-list";
// import classes from "./App.module.scss";
import store from "../../store";
import { Provider } from "react-redux";
import SignUp from "../sign-up";
import Login from "../login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 
      <Header />
        <Routes>
            <Route index element={<ItemList />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<Login />} />
        </Routes>
    </BrowserRouter> 
 </Provider>
  );
}

export default App;
