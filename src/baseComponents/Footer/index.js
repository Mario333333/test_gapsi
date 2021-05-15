import React, { useEffect } from "react";
import { connect } from "react-redux";

const Footer = (props) => {
  const { visitor } = props;

  useEffect(() => {}, []);

  return (
    <div className="footer">
      <p>{`Versión ${visitor.version}`}</p>
    </div>
  );
};

const mapStateToPros = (state) => ({
  visitor: state.visitor.visitor,
});

export default connect(mapStateToPros)(Footer);
