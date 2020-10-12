import PropTypes from "prop-types";

export const OFFER = {
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  shortDesc: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  countBedrooms: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
  conditions: PropTypes.arrayOf(PropTypes.string),
  photos: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool.isRequired,
  householder: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired,
  }),
};

export const REVIEW = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  text: PropTypes.string.isRequired,
};
