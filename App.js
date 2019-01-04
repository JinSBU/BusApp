import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import busStopImage from './assets/BusStop.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import busStops from './constants/BusStops.js'
// import axios from 'axios'
let busText = "";
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
     }

  }
  fetchData(i){    
    fetch('https://smarttransit.cewit.stonybrook.edu:8443/stops/'+ i.toString() + '/buses')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        let busText = responseJson;
    })
  }
  renderMarkers(){
    var baseLink = "https://smarttransit.cewit.stonybrook.edu:8443";
    return busStops.stops.map((stop, i) => {
      <Text></Text>
      return <Marker
        key={ i }
        
        coordinate={{latitude: stop.location.latitude, longitude: stop.location.longitude}}
        onPress={ () => this.fetchData(stop.stopID) }
        title = {stop.stopName}
        image = {busStopImage}
        description = {busText} />
        
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
