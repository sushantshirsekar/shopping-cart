import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch(); 

  const addQuantityHandler = () => {
    dispatch(cartActions.addItemToCart({id, title, quantity, price,total }))
  }

  const removeQuantityHandler = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeQuantityHandler}>-</button>
          <button onClick={addQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
