import React, { useEffect } from "react";
import NewsPage from "./NewsPage";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    newsList: state.news.newsList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch({ type: "LOG OUT" });
    },
    saveNews: (x) => {
      dispatch({ type: "saveNews", payload: x });
    },
    deleteNews: (x) => {
      dispatch({ type: "deleteNews", payload: x });
    },
  };
};
function NewsPageContainer(props) {
  function logout() {
    props.logout();
  }
  function clearStorage() {
    localStorage.removeItem("authToken");
    return "";
  }
  useEffect(() => {
    //onstorage срабатывает только на изменения значения
    if (localStorage.getItem("authToken") == 2) {
      localStorage.setItem("authToken", 1);
    } else {
      localStorage.setItem("authToken", 2);
    }
    window.addEventListener("storage", logout);
    window.addEventListener("beforeunload", clearStorage);
    return () => {
      window.removeEventListener("storage", logout);
      window.removeEventListener("beforeunload", clearStorage);
    };
  }, []);
  return (
    <NewsPage
      logout={props.logout}
      save={props.saveNews}
      delete={props.deleteNews}
      newsList={props.newsList}
    />
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsPageContainer);
