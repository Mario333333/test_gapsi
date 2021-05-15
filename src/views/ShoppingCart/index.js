import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import MainLayout from "../../containers/MainLayout";
import DragContainer from "../../baseComponents/DragContainer";
import { getProducts } from "../../services/api";
import { setProducts, setPage } from "../../redux/actions/products";

import cart from "../../assets/img/cart.jpeg";
const ShoppingCart = (props) => {
  const { products, shoppingCart, page, search, setPage, setProducts } = props;

  const listInnerRef = useRef();

  const searchProducts = async (currentPage) => {
    const responseProducts = await getProducts(search, currentPage);
    const { code, data } = responseProducts;
    if (code === 200) {
      setProducts(data.products);
    } else {
      const { message } = responseProducts;
      alert(message);
    }
  };

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        if (page + 1 <= 3) {
          setPage(page + 1);
          searchProducts(page + 1);
        }
      }
    }
  };

  useEffect(() => {}, []);

  return (
    <MainLayout isVisibleFooter={false}>
      <div className="shopping-cart-container">
        <div className="cart-container">
          <DragContainer className="cart">
            <img draggable="false" src={cart} alt="cart"></img>
            <p>Arrastra aqui tus productos</p>
            <div className="counter">{shoppingCart.length}</div>
          </DragContainer>
        </div>

        <div
          onScroll={() => onScroll()}
          ref={listInnerRef}
          className="products-container"
        >
          {products != [] && (
            <DragContainer className="products">
              {products.map((item) => {
                return (
                  <div
                    key={item.ID}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData("item", JSON.stringify(item));
                    }}
                    className="element"
                  >
                    <img src={item.IMAGE} alt="product"></img>
                    <span />
                    <div className="header-product">
                      <p className="title">{item.NAME}</p>
                      <p className="price">{item.PRICE}</p>
                    </div>

                    <p>{item.DESCRIPTION}</p>
                  </div>
                );
              })}
            </DragContainer>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setProducts: (data) => dispatch(setProducts(data)),
  setPage: (data) => dispatch(setPage(data)),
});

const mapStateToPros = (state) => ({
  products: state.products.products,
  page: state.products.page,
  search: state.products.search,
  shoppingCart: state.shoppingCart.shoppingCart,
});
export default connect(mapStateToPros, mapDispatchToProps)(ShoppingCart);
