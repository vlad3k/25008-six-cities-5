import React from "react";
import PropTypes from "prop-types";
import {OFFER} from "../../prop-types";
import FavoriteCard from "../favorite-card/favorite-card";

const FavoriteListCards = ({offers}) => {
  return offers.map((offer, i) => <FavoriteCard offer={offer} key={i} />);
};

export default FavoriteListCards;

FavoriteListCards.propTypes = {
  offers: PropTypes.arrayOf(OFFER),
};
