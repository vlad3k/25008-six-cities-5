import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {HOUSE_TYPES} from "../../const";
import {OFFER} from "../../prop-types";
import {getRating} from "../../utils";

class PlaceCard extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {isPremium, photos, price, shortDesc, type, rating, isFavorite} = this.props.offer;
    return (
      <article className="cities__place-card place-card" onMouseEnter={this.props.onHover}>
        {
          isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${getRating(rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{shortDesc}</a>
          </h2>
          <p className="place-card__type">{HOUSE_TYPES[type]}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onHover: PropTypes.func,
  offer: PropTypes.shape(OFFER)
};

export default PlaceCard;
