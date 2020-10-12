import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PageMain from "../pages/page-main/page-main";
import PageFavorites from "../pages/page-favorites/page-favorites";
import PageLogin from "../pages/page-login/page-login";
import PageRoom from "../pages/page-room/page-room";

const App = ({offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PageMain offers={offers} />
        </Route>
        <Route path="/favorites" exact>
          <PageFavorites />
        </Route>
        <Route path="/login" exact>
          <PageLogin />
        </Route>
        <Route path="/offer/:id?" exact>
          <PageRoom offers={offers} reviews={reviews} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array,
  reviews: PropTypes.array,
};

export default App;
