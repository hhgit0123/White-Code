import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "./LoginPage/LoginPage";
import NewsPageСontainer from "./NewsPage/NewsPageContainer";
import EditNewsPageContainer from "./NewsPage/EditNewsPageContainer";
const mapStateToProps = (state) => {
  return {
    newsList: state.news.newsList,
  };
};
function AvaliableRoutes(props) {
  if (props.isAuthenticated) {
    let newsList = props.newsList.map((news, index) => (
      <Route
        key={news.title}
        path={`/news/${index}`}
        render={() => <EditNewsPageContainer index={index} news={news} />}
      />
    ));
    return (
      <Switch>
        <Route exact path="/news" component={NewsPageСontainer} />
        <Route path="/news/add" component={EditNewsPageContainer} />
        {newsList}
        <Redirect from="*" to="/news" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Redirect from="*" to="/login" />
      </Switch>
    );
  }
}
export default connect(mapStateToProps, null)(AvaliableRoutes);
