import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main";

const App = ({places}) => {
  return (
    <PageMain places={places} />
  );
};

App.propTypes = {
  places: PropTypes.number.isRequired,
};

export default App;
