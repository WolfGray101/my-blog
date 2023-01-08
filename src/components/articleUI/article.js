import React, { useEffect } from "react";
import Item from "../Item/Item";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import classes from "./article.module.scss";
import { getArticle, clearArticle } from "../../store/actions/article-action";

const Article = () => {
  
  const { articles } = useSelector((store) => {
    return store.articlesReducer;
  });
  const { token } = useSelector((state) => {
    return state.createAcc;
  });
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getArticle(id, token));
    return () => dispatch(clearArticle());
  }, [dispatch, id, token]);

  const item = articles?  
  <Item item={articles} id={id} /> :
  <Spin  size='large' /> 

  return  (
    <div className={classes.container}>
      {item}
    </div>
  ) 
};

export default Article;
