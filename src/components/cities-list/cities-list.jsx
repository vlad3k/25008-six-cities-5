import React from "react";
import {connect} from "react-redux";
import {CITIES} from "../../const";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";
import {OFFER} from "../../prop-types";

const CitiesList = ({offers, currentCity, changeCity, getOffers}) => {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, id) => {
        return <li className="locations__item" key={id}>
          <a className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`}
            onClick={(evt) => {
              evt.preventDefault();
              changeCity(city);
              getOffers(offers, city);
            }}
            href="#">
            <span>{city}</span>
          </a>
        </li>;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  currentCity: state.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getOffers(offers, city) {
    dispatch(ActionCreator.getOffers(offers, city));
  }
});

CitiesList.propTypes = {
  offers: PropTypes.arrayOf(OFFER),
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func,
  getOffers: PropTypes.func,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
