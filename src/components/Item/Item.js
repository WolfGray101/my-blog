import classes from "./Item.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Popconfirm } from "antd";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Like from "../like";
import { useSelector } from "react-redux";
import ServiceFile from "../../service/service-file";

const Item = ({ item, id = null }) => {
  const serviceFile = new ServiceFile();

  const { username, token } = useSelector((state) => state.createAcc);
  const { slug, description, favoritesCount, favorited, author } = item;
console.log(item);
  const navigate = useNavigate();

  const createDateFn = (createOrUpdate) => {
    if (createOrUpdate) {
      const date = Date.parse(createOrUpdate);
      return new Date(date).toDateString();
    } else return null;
  };

  const onDelete = async () => {
    await serviceFile
      .deleteArticle(slug, token)
      .catch(() => {
        navigate("/")
      });
  };

  const createTagList = (tags) => {
    return tags.map((el) => {
      const keyGenerator =
        Math.random() * 100 + Math.random() * 11 * Math.random() * 12;
      return el.trim() ? (
        <button className={classes.tag} key={keyGenerator}>
          {el}
        </button>
      ) : null;
    });
  };

  const tagList = createTagList(item.tagList);
  const createDate = createDateFn(item.createdAt);
  const updateDate = createDateFn(item.updatedAt);
  const updateDateRender = (updateDate !== createDate) ? updateDate : null
  const imageURL = author.image;
  const isValidEdition = author.username === username;

  const isDescription = id ? (
    <ArticleDesc
      description={description}
      isValidEdition={isValidEdition}
      onDelete={onDelete}
      item = {item}
      slug= {slug}
    />
  ) : null;
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.col}>
          <div className={classes.group}>
            <Link to={`/articles/${slug}`}>
              <h5 className={classes.title}>{item.title.slice(0, 25)}</h5>
            </Link>
            <Like
              favoritesCount={favoritesCount}
              favorited={favorited}
              slug={slug}
            />
          </div>
          <div className={classes.group}>{tagList}</div>
        </div>

        <div className={classes.group}>
          <div className={classes.col}>
            <span className={classes.author}>{item.author.username}</span>

            <p className={classes.date}>{createDate}</p>
            <span className={classes.date}>{updateDateRender}</span>
          </div>
          <Avatar size={64} src={`${imageURL}`} icon={<UserOutlined />} />
        </div>
      </div>
      {isDescription}

      <div className={classes.item}>
        <ReactMarkdown className={classes.text}>{item.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Item;

const ArticleDesc = ({ description, isValidEdition,
   onDelete, item, slug}) => {
  const btnGroup = isValidEdition ? (
    <div className={classes.group}>
      <Popconfirm
                title="Are you sure to delete this article?"
                placement="right"
                okText="Yes"
                cancelText="No"
                onConfirm={onDelete}
              >
      <button className={classes.del}>
        {" "}
        Delete
      </button>
      </Popconfirm>
      <Link to={'edit'} item={item} slug = {slug}>
      <button className={classes.edit}> Edit </button>
      </Link>
    </div>
  ) : null;
  return (
    <div className={classes.item}>
      <div className={classes.description}>{description}</div>
      {btnGroup}
    </div>
  );
};
