import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setShoppingCart } from "../../redux/actions/shoppingCart";
import { setProducts } from "../../redux/actions/products";

const DragContainer = (props) => {
  const {
    products = [],
    setProducts,
    setShoppingCart,
    children,
    className = "drag-container",
  } = props;

  useEffect(() => {}, []);

  return (
    <div
      className={className}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        const product = e.dataTransfer.getData("item");
        const parsedProduct = JSON.parse(product);
        const newArrayProducts = products.filter(
          (item) => item.ID !== parsedProduct.ID
        );

        setProducts(newArrayProducts);
        setShoppingCart(JSON.parse(product));
      }}
    >
      {children}
    </div>
  );
};

const mapStateToPros = (state) => ({
  products: state.products.products,
  shoppingCart: state.shoppingCart.shoppingCart,
});
const mapDispatchToProps = (dispatch) => ({
  setShoppingCart: (item) => dispatch(setShoppingCart(item)),
  setProducts: (item) => dispatch(setProducts(item)),
});

export default connect(mapStateToPros, mapDispatchToProps)(DragContainer);
