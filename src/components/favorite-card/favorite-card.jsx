import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {OFFER} from "../../prop-types";
import {getRating} from "../../utils";

class FavoriteCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, price, photos, rating, shortDesc, type} = this.props.offer;

    return (
      <article className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link to={`offer/${id}`}>
            <img className="place-card__image"
              src={photos[0]}
              width="150"
              height="110"
              alt="Place image" />
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button"
              type="button">
              <svg className="place-card__bookmark-icon"
                width="18"
                height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${getRating(rating)}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`offer/${id}`}>{shortDesc}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

FavoriteCard.propTypes = {
  offer: OFFER,
};

export default FavoriteCard;
