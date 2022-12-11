import classes from './item-list.module.scss'
import Item from '../Item'
const ItemList = () => {

  return (
    <div className={classes['item--list']}>
      <Item />
      <Item />
      <Item />
    </div>
  )
}
export default ItemList
