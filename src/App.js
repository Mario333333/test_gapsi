import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getURLByRouteName } from "./utils/routes";

import { setVisitor } from "./redux/actions/visitor";
import Home from "./views/Home";
import ShoppingCart from "./views/ShoppingCart";

import { getVisitor } from "./services/api";

const App = (props) => {
  const { dispatch } = props;

  const getInitialData = async () => {
    const responseVisitor = await getVisitor();

    const { code, data } = responseVisitor;
    if (code === 200) {
      dispatch(setVisitor(data));
    }
  };

  useEffect(() => {
    
    getInitialData();
  });
  return (
    <div>
      <Switch>
        <Route exact path={getURLByRouteName("home")} component={Home} />
        <Route
          exact
          path={getURLByRouteName("shoppingCart")}
          component={ShoppingCart}
        />
      </Switch>
    </div>
  );
};

const mapStateToPros = (state) => ({});

export default connect(mapStateToPros)(App);
