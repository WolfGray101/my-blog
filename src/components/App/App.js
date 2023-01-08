import React from "react";
import Header from "../Header";
import ItemList from "../Item-list/Item-list";
// import classes from "./App.module.scss";
import store from "../../store";
import { Provider } from "react-redux";
import SignUp from "../sign-up";
import Login from "../login";
import Profile from "../Profile/Profile";
import NewArticle from "../New-article/New-article";
import Article from "../articleUI/article";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 
      <Header />
        <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="articles/:id" element={<Article />} />

            <Route path="sign-in" element={<Login />} />
            <Route path="profile" element={< Profile />} />
            <Route path="new-article" element={< NewArticle />} />
        </Routes>
    </BrowserRouter> 
 </Provider>
  );
}

export default App;
