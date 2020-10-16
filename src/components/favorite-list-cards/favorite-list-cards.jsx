import React from "react";
import FavoriteCard from "../favorite-card/favorite-card";

const FavoriteListCards = ({offers}) => {
  return offers.map((offer, i) => <FavoriteCard offer={offer} key={i} />);
};

export default FavoriteListCards;
