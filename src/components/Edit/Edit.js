import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import NewArticle from "../New-article";
import { getArticle, clearArticle } from "../../store/actions/article-action";
import { Spin } from "antd";
import ServiceFile from "../../service/service-file";
import ArticleForm from "../New-article/ArticleForm";


const serviceFile = new ServiceFile ()

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

  const navigate = useNavigate()

  const onGetArticle = async (data) => {
    await serviceFile.editArticle(data, id, token)
    navigate('/')
  }

  return articles ? (
    <ArticleForm
      titleForm="Edit an article"
      onGetArticle = {onGetArticle}
     
    />
  ) : (
    <Spin />
  );
};

export default Edit;
