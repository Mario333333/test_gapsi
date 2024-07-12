import React, { useEffect } from "react";
import { connect } from "react-redux";
import MainLayout from "../../containers/MainLayout";
// import logo from "../../assets/img/logo.png";

const Home = (props) => {
  const { visitor } = props;

  console.log("visitor", visitor);
  useEffect(() => {}, []);

  return (
    <MainLayout>
      <div className="home-container">
        {/* <div className="circle">
          <img src={logo} alt="logo"></img>
        </div>

        <p>{visitor.welcome}</p> */}
        <button
          onClick={() => {
            window.location.href = "./shopping_cart";
          }}
        >
          Continuar
        </button>
        <div className="footer">{`Versión ${visitor.version}`}</div>
      </div>
    </MainLayout>
  );
};

const mapStateToPros = (state) => ({
  visitor: state.visitor.visitor,
});

export default connect(mapStateToPros)(Home);
