import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../services/api";
import { setProducts, setSearch, setPage } from "../../redux/actions/products";
import {
  setShoppingCart,
  clearShoppingCart,
} from "../../redux/actions/shoppingCart";

// import icon from "../../assets/img/icon.png";

const Header = (props) => {
  const { setProducts, page, clearShoppingCart, setSearch, search, setPage } =
    props;

  let [isVisiblePopover, setIsVisiblePopover] = useState(false);

  const searchProducts = async () => {
    if (window.location.pathname !== "/shopping_cart") {
      // window.location.href = "./shopping_cart";
      window.history.replaceState("statedata", "title", "./shopping_cart");
    }

    const responseProducts = await getProducts(search, page);
console.log(responseProducts);
    const { code, data } = responseProducts;
    if (code === 200) {
      setProducts(data.products);

      setIsVisiblePopover(false);
    }
  };

  const clear = async () => {
    setProducts([]);
    clearShoppingCart([]);
    setSearch("");
    setIsVisiblePopover(false);
    setPage(1);
  };

  useEffect(() => {}, []);

  return (
    <div className="header">
      {/* <img src={icon} alt="icon"></img> */}
      <p>Shopping Cart</p>
      <div
        className="menu-bar"
        onClick={() => {
          if (window.location.pathname === "/shopping_cart") {
            setIsVisiblePopover(!isVisiblePopover);
          }
        }}
      >
        <span />
        <span />
        <span />
      </div>
      <div
        className="popover"
        style={{ visibility: `${isVisiblePopover ? "visible" : "hidden"}` }}
      >
        <div className="form">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <button onClick={() => searchProducts()} type="button">
            Buscar
          </button>
        </div>

        <button onClick={clear} type="button" className="button">
          Limpiar
        </button>
      </div>
    </div>
  );
};

const mapStateToPros = (state) => ({
  products: state.products.products,
  page: state.products.page,
  search: state.products.search,
  shoppingCart: state.shoppingCart.shoppingCart,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (data) => dispatch(setProducts(data)),
  setShoppingCart: (item) => dispatch(setShoppingCart(item)),
  clearShoppingCart: (item) => dispatch(clearShoppingCart(item)),
  setSearch: (data) => dispatch(setSearch(data)),
  setPage: (data) => dispatch(setPage(data)),
});

export default connect(mapStateToPros, mapDispatchToProps)(Header);
