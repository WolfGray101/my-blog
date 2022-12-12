import classes from "./item-list.module.scss";
import Item from "../Item";
import ServiceFile from "../../service/service-file";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, loadError } from "../../store/actions/action";
import { Pagination } from "antd";

const serviceFile = new ServiceFile();

const ItemList = () => {
  const dispatch = useDispatch();
  const { articles, articlesCount } = useSelector((state) => state);

  const getArticlesList = (request) => (dispatch) => {
    serviceFile
      .getResponce(request)
      .then((res) => dispatch(getArticles(res)))
      .catch(() => dispatch(loadError()));
  };

  useEffect(() => {
    dispatch(getArticlesList("articles"));
  }, [dispatch]);

  const itemContent = (art) => {
    return art.map((el) => {
      const keyGenerator =
        Math.random() * 100 + Math.random() * 11 * Math.random() * 12;
      return <Item key={keyGenerator} item={el} />;
    });
  };

  const itemRender = itemContent(articles);

  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    console.log(page);
    dispatch(getArticlesList(`articles/${page}`))
    setCurrent(page);
  };

  return (
    <div className={classes["item--list"]}>
      {itemRender}
      <Pagination
        current={current}
        onChange={onChange}
        total={articlesCount}
        pageSizeOptions={[20]}
        defaultPageSize={20}
        showSizeChanger={false}
      />
    </div>
  );
};
export default ItemList;
