import classes from "./Item.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Like from "../like";

const Item = ({ item, id = null }) => {
  console.log(item);
  const createDateFn = (createOrUpdate) => {
    if (createOrUpdate) {
      const date = Date.parse(createOrUpdate);
      return new Date(date).toDateString();
    } else return null;
  };

  const createTagList = (tags) => {
    return tags.map((el) => {
      const keyGenerator =
        Math.random() * 100 + Math.random() * 11 * Math.random() * 12;
      return el ? (
        <button className={classes.tag} key={keyGenerator}>
          {el}
        </button>
      ) : null;
    });
  };
  const { slug, description, favoritesCount, favorited } = item;

  const tagList = createTagList(item.tagList);
  const createDate = createDateFn(item.createdAt);
  const updateDate = createDateFn(item.updatedAt);
  const imageURL = item.author.image;
  const isDescription = id ? <ArticleDesc description={description} /> : null;
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.col}>
          <div className={classes.group}>
            <Link to={`/articles/${slug}`}>
              <h5 className={classes.title}>{item.title.slice(0, 25)}</h5>
            </Link>
            <Like favoritesCount={favoritesCount} 
            favorited={favorited} slug={slug} />
          </div>
          <div className={classes.group}>{tagList}</div>
        </div>

        <div className={classes.group}>
          <div className={classes.col}>
            <span className={classes.author}>{item.author.username}</span>

            <p className={classes.date}>{createDate}</p>
            <span className={classes.date}>{updateDate}</span>
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

const ArticleDesc = ({ description }) => {
  return (
    <div className={classes.item}>
      <div className={classes.description}>{description}</div>
      <div className={classes.group}>
        <button className={classes.del}> Delete</button>
        <button className={classes.edit}> Edit </button>
      </div>
    </div>
  );
};
