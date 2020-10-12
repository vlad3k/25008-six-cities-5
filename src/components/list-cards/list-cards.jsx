import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {OFFER} from "../../prop-types";

class ListCards extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(offer) {
    this.setState({activeOffer: offer});
  }

  render() {
    return this.props.offers.map((offer, i) => (
      <PlaceCard offer={offer}
        onHover={()=>this.handleCardHover(offer)}
        key={i} />)
    );
  }
}

ListCards.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER)
  ),
};

export default ListCards;
