import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PageMain from "../pages/page-main/page-main";
import PageFavorites from "../pages/page-favorites/page-favorites";
import PageLogin from "../pages/page-login/page-login";
import PageRoom from "../pages/page-room/page-room";

const App = ({places}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PageMain places={places} />
        </Route>
        <Route path="/favorites" exact>
          <PageFavorites />
        </Route>
        <Route path="/login" exact>
          <PageLogin places={places} />
        </Route>
        <Route path="/offer/:id?" exact>
          <PageRoom />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  places: PropTypes.number.isRequired,
};

export default App;
