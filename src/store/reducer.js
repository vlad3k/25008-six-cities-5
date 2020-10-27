import {extend} from "../utils";
import {ActionType} from "./action";
import {offers} from "../mocks/offers";

const initialState = {
  offers,
  currentCity: `Amsterdam`,
  currentOffers: offers.filter((offer) => offer.city === `Amsterdam`),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionType.GET_CURRENT_OFFERS:
      return extend(state, {
        currentOffers: action.payload
      });
  }
  return state;
};

export {reducer};
