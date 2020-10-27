export const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  GET_CURRENT_OFFERS: `GET_CURRENT_OFFERS`,
};

export const ActionCreator = {
  changeCity: (offers) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: offers,
  }),
  getOffers: (offers, city) => ({
    type: ActionType.GET_CURRENT_OFFERS,
    payload: offers.filter((offer) => offer.city === city),
  }),
};
