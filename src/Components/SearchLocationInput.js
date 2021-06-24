import React, { useState, useEffect, useRef, Component } from "react";
import {Card,Form, Input, Button, Segment} from 'semantic-ui-react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

// let autoComplete;
//
//
// const loadScript = (url, callback) => {
//     let script = document.createElement("script");
//     script.type = "text/javascript";
//
//     if (script.readyState) {
//         script.onreadystatechange = function() {
//             if (script.readyState === "loaded" || script.readyState === "complete") {
//                 script.onreadystatechange = null;
//                 callback();
//             }
//         };
//     } else {
//         script.onload = () => callback();
//     }
//
//     script.src = url;
//     document.getElementsByTagName("head")[0].appendChild(script);
// };
//
// function handleScriptLoad(updateQuery, autoCompleteRef) {
//     autoComplete = new window.google.maps.places.Autocomplete(
//         autoCompleteRef.current,
//         { types: ["establishment"], componentRestrictions: { country: "us" } }
//     );
//     autoComplete.setFields(["address_components", "formatted_address", "place_id"]);
//     autoComplete.addListener("place_changed", () =>
//     handlePlaceSelect(updateQuery)
// );
// }
//
// async function handlePlaceSelect(updateQuery) {
//     const addressObject = autoComplete.getPlace();
//     const query = addressObject.formatted_address;
//     updateQuery(query);
//     console.log(addressObject);
// }
//
// function SearchLocationInput() {
//     const [query, setQuery] = useState("");
//     const autoCompleteRef = useRef(null);
//
//
//     useEffect(() => {
//         loadScript(
//             `https://maps.googleapis.com/maps/api/js?key=AIzaSyDVees6AhLJ4o0EfQfVXKQuUM7HvLP31ro&libraries=places`,
//             () => handleScriptLoad(setQuery, autoCompleteRef)
//         );
//     }, []);
//
//
//
//     return (
//         <div className="search-location-input">
//         <div id="map"></div>
//             <input
//                 ref={autoCompleteRef}
//                 onChange={event => setQuery(event.target.value)}
//                 placeholder="Enter a City"
//                 value={query}
//                 />
//         </div>
//     );
// }



export class MapContainer extends Component {

    state = {
        selectedPlace: "None",
address: '',
mapCenter: {
    lat: 40.7127753, lng: -74.0059728
     }
}

onMarkerClick = (props, marker, e) => {

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });


}

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {



    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>  this.setState({ mapCenter: latLng , address: address}))
      .catch(error => console.error('Error', error));

     geocodeByAddress(address)
     .then(results => this.props.onAddressSelect(results[0]))

  };


  render() {

      const containerStyle = {
        position: 'relative',
        width: '48vw',
        height: '50vw'
      }

    return (

        <div>
    <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Input fluid
              {...getInputProps({
                placeholder: 'Your Business must be registered as a Store on Google',
                className: 'location-search-input',
              })}
            icon='search' />
            <br></br>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <Map google={this.props.google} initialCenter={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
      }}
        center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
        }}
      containerStyle={containerStyle}
      zoom={14}
      onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={this.state.selectedPlace.name}
                position={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}
                />
                <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}>
           <div>
             <p>{this.state.address}</p>
           </div>
       </InfoWindow>
      </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDVees6AhLJ4o0EfQfVXKQuUM7HvLP31ro")
})(MapContainer)
