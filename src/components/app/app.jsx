import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {OFFER, REVIEW} from "../../prop-types";
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
          <PageFavorites offers={offers} />
        </Route>
        <Route path="/login" exact>
          <PageLogin />
        </Route>
        <Route path="/offer/:id" render={({match}) => {
          const currentOffer = offers.find((offer, id) => (id + 1) === +match.params.id);
          return <PageRoom offer={currentOffer} reviews={reviews}/>;
        }} exact />
        {/* <PageRoom offers={offers} reviews={reviews} /> */}
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OFFER),
  reviews: PropTypes.arrayOf(REVIEW),
};

export default App;
