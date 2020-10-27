import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {HOUSE_TYPES} from "../../const";
import {OFFER} from "../../prop-types";
import {getRating} from "../../utils";

const PlaceCard = (props) => {
  const {id, isPremium, photos, price, shortDesc, type, rating, isFavorite, onHover} = props.offer;
  return (
    <article className="cities__place-card place-card" onMouseEnter={onHover}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{shortDesc}</Link>
        </h2>
        <p className="place-card__type">{HOUSE_TYPES[type]}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  onHover: PropTypes.func,
  offer: OFFER
};

export default PlaceCard;
