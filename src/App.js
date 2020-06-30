import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AvaliableRoutes from "./avaliableRoutes";
import { connect } from "react-redux";
import "./App.css";
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};
function App(props) {
  return <AvaliableRoutes isAuthenticated={props.isAuthenticated} />;
}
export default connect(mapStateToProps, null)(App);
