import { View, Text } from 'react-native'
import React, {useState} from 'react'
import MapView from 'react-native-maps'

import CustomerMarker from '../../components/CustomMarker'
import places from '../../../assets/data/feed'

const SearchResultsMap = () => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null)

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
          {places.map(place => (
            <CustomerMarker 
              coordinate={place.coordinate} 
              price={place.salesPrice} 
              isSelected={place.id === selectedPlaceId}
              onPress={() => setSelectedPlaceId(place.id)}
            />)
          )}
      </MapView>
    </View>
  )
}

export default SearchResultsMap