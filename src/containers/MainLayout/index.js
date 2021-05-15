import React, { useEffect } from "react";

import Header from "../../baseComponents/Header";

const MainLayout = (props) => {
  const { id = "item", className = "" } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id={id} className={`page__layout ${className}`}>
      <Header />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default MainLayout;
