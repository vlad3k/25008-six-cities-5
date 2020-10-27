import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import {OFFER} from "../../prop-types";
import "leaflet/dist/leaflet.css";

const city = [52.38333, 4.9];
const ZOOM = 12;
const MARKER_URL = `img/pin.svg`;

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = createRef();
    this.map = null;
  }

  componentDidMount() {
    this.setMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this.setMap();
  }

  setMap() {
    const icon = leaflet.icon({
      iconUrl: MARKER_URL,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, this.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.props.offers.forEach((offer) => {
      leaflet
        .marker(offer.coords, {icon})
        .addTo(this.map);
    });
  }

  render() {
    return <div id="map" ref={this.mapRef} style={{height: `100%`}}></div>;
  }
}

const mapStateToProps = (state) => ({
  offers: state.currentOffers
});

Map.propTypes = {
  offers: PropTypes.arrayOf(OFFER)
};

export {Map};
export default connect(mapStateToProps)(Map);
