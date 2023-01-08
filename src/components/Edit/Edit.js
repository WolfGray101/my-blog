import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import NewArticle from "../New-article";
import { getArticle, clearArticle } from "../../store/actions/article-action";
import { Spin } from "antd";

const Edit = () => {


  const { id } = useParams();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => {
    return state.createAcc;
  });

  useEffect(() => {
    dispatch(getArticle(id, token));
    return () => dispatch(clearArticle());
  }, [dispatch, id, token]);

  const { articles } = useSelector((store) => {
    return store.articlesReducer;
  });

  // const { title, description, text, tagList } = articles;

  return articles ? (
    <NewArticle
      titleForm="Edit an article"
      // articles = {articles}
      // title={title}
      // description={description}
      // text={text}
      // tagList={tagList}
    />
  ) : (
    <Spin />
  );
};

export default Edit;
