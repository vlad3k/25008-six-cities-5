import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css"

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      city: [52.38333, 4.9],
    };
  }

  render() {
    return <div id="map"></div>;
  }
}

export default Map;
