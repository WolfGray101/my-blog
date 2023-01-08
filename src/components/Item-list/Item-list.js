import classes from "./item-list.module.scss";
import Item from "../Item";
import ServiceFile from "../../service/service-file";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, loadError } from "../../store/actions/action";
import { Pagination, Spin } from "antd";

const serviceFile = new ServiceFile();

const ItemList = () => {

  const dispatch = useDispatch();

  const { articles, articlesCount, loading } = useSelector(
    (state) => state.getArticlesReducer
  );
  const [current, setCurrent] = useState(1); 


  const getArticlesList = (request) => (dispatch) => {
    serviceFile
      .getResponce(request)
      .then((res) => dispatch(getArticles(res)))
      .catch(() => dispatch(loadError()));
  };

  useEffect(() => {
    const offset = current*10-10
    dispatch(getArticlesList(`articles?limit=10&offset=${offset}`));
  }, [dispatch, current ]);

  const itemContent = (art) => {
    return art.map((el) => {
      const keyGenerator =
        Math.random() * 100 + Math.random() * 11 * Math.random() * 12;
      return <Item key={keyGenerator} item={el} />;
    });
  };

  const itemRender = itemContent(articles);
  const onChange = (page) => {
    setCurrent(page);
  };

  const spinner = loading ? <Spin /> : null;
  const pagination = !loading ? (
    <Pagination
      current={current}
      onChange={onChange}
      total={articlesCount}
      pageSizeOptions={[20]}
      defaultPageSize={20}
      showSizeChanger={false}
    />
  ) : null;
  return (
    <div className={classes["item--list"]}>
      {spinner}
      {itemRender}
      {pagination}
    </div>
  );
};
export default ItemList;
