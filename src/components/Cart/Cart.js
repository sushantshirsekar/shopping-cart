import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartData = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartData.map((item) => {
          return (
            
            <CartItem
            key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantitiy,
                total: item.totalPrice,
                price: item.itemPrice,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
