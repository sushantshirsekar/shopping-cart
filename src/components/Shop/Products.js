import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 100,
      title: "Ikigai",
      description: "Japanese secret to live a happy life",
    },
    {
      id: "p2",
      price: 100,
      title: "400 Days",
      description: `Chetan Bhagat's master peice on kidnap case`,
    },
    {
      id: "p3",
      price: 100,
      title: "Good Vibes Good Life",
      description: `Scecret to unlock a happy life`,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
