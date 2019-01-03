import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import busStopImage from './assets/BusStop.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import busStops from './constants/BusStops.js'
// import axios from 'axios'

console.log(busStops.stopName);
export default class App extends React.Component {
  constructor(props){
     super(props);

     this.state = {
       bus:[],
       
       region: {
         latitude: 40.912959,
         longitude: -73.129656,
         latitudeDelta: 0.01622,
         longitudeDelta: 0.017021
       },
       markers: [
      {
         title: 'Hello',
         description: 'here is the description',
         coordinates: {
           latitude: 40.912959,
           longitude: -73.129656
         },
       },
       {
         title: 'Bus stop 2',
         description: 'here is the description',
         coordinates: {
           latitude: 40.913959,
           longitude: -73.120656
         },
       }]
     }

  }
  // componentWillMount(){
  //   // fetch("https://smarttransit.cewit.stonybrook.edu:8443/buses")
  //   axios.get('https://smarttransit.cewit.stonybrook.edu:8443/buses')
  //     .then((response1) =>
  //       this.setState({ bus: response1.data}));
  //   axios.get('https://smarttransit.cewit.stonybrook.edu:8443/stops')
  //     .then((response2) =>
  //       this.setState({ stopData: response2.data}));
  // }
  renderMarkers(){
    return busStops.stops.map((stop, i) => {
      return <Marker
        key={ i }
        
        coordinate={{latitude: stop.location.latitude, longitude: stop.location.longitude}}
        onClick = { this.onMarkerClick }
        title = {stop.stopName}
        image = {busStopImage}
        name = { stop.stopName } />
    })
  }
  render() {
    
    return (
      <MapView
        style={{
          flex: 1
        }}
        //Initial region should be set to user's location rather than set location
        initialRegion={this.state.region}
        >
        
        { this.renderMarkers() }

          {/* {this.state.stopData.map((stopData,index) => (
            <MapView.Marker

              key={index}
              coordinate={stopData.location}
              title={stopData.busID}
              image={busStopImage}

            >
              <View><Text></Text></View>
            </MapView.Marker>
          ))} */}

      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  marker:{
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 0,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },

});
