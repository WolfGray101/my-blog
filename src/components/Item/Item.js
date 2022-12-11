import { Tag } from "antd";
import classes from "./Item.module.scss";

const Item = () => {
  return (
    <div className={classes.item}>
      <div className={classes["item--content"]}>
      <h5> Header content</h5>
      <div className={classes['item--content__tag--group']}>
      <button className={classes['item--content__tag--group__tag']}> Tag 1</button>
      <button> Tag 2</button>
      </div>
      <div className={classes['item--content__text']}>

      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris  nisi ut aliquip ex ea commodo consequat. </span>
      </div>
      </div>

      <div className={classes["item--avatar"]}>
        <div className={classes["item--avatar__author--avatar__info"]}>
          <h6> Jhon Doe</h6>
          <span className={classes['item--avatar__author--avatar__date']}> Date </span>
        </div>
        <div className={classes["item--avatar__author--avatar"]}>
          avatar
        </div>
      </div>
    </div>
  );
};

export default Item;
