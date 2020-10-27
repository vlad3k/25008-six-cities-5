import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {OFFER} from "../../prop-types";

const ListCards = ({currentOffers}) => {
  return currentOffers.map((offer, i) => (
    <PlaceCard offer={offer}
      key={i} />)
  );
};

const mapStateToProps = (state) => ({
  currentOffers: state.currentOffers
});

ListCards.propTypes = {
  offers: PropTypes.arrayOf(OFFER),
};

export default connect(mapStateToProps)(ListCards);
