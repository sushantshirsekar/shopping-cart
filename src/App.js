import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions"; 

let initState = true; 

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.UI.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.UI.notification);

  useEffect(()=> {
    dispatch(fetchCartData()); 
  }, [dispatch])

  useEffect(() => {
    if(initState === true){
      initState = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
