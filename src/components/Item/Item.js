import classes from "./Item.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Item = ({ item }) => {

  const createDateFn = (createOrUpdate) => {
    if (createOrUpdate) {
      const date = Date.parse(createOrUpdate);
      return new Date(date).toDateString();
    } else return null;
  };

  const createTagList = (tags) => {
    return tags.map( el => (
      <button className={classes["item--content__tag--group__tag"]}> {el}</button>
    ))
  }
  const tagList = createTagList(item.tagList)
  const createDate = createDateFn(item.createdAt);
  const updateDate = createDateFn(item.updatedAt);
  const imageURL = item.author.image;

  return (
    <div className={classes.item}>
      <div className={classes["item--content"]}>
        <h5>{item.title.slice(0, 25)}</h5>
        <div className={classes["item--content__tag--group"]}>
          {tagList}
        </div>
        <div className={classes["item--content__text"]}>
          <span> {item.body} </span>
        </div>
      </div>

      <div className={classes["item--avatar"]}>
        <div className={classes["item--avatar__author--avatar__info"]}>
          <h6> {item.author.username}</h6>
          <p className={classes["item--avatar__author--avatar__date"]}>
            {createDate}
          </p>
          <span className={classes["item--avatar__author--avatar__date"]}>
            {updateDate}
          </span>
        </div>
        <Avatar size={64} src={`${imageURL}`} icon={<UserOutlined />} />

        {/* <div className={classes["item--avatar__author--avatar"]}>
        <img className={classes['avatar-image']} src={`${imageURL}`}  alt='avatar'/> 
      </div> */}
      </div>
    </div>
  );
};

export default Item;
