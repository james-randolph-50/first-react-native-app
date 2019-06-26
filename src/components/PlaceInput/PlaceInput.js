import React, { Component } from 'react';
import { View, TextInput, Button, Stylesheet } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ""
        }
    
      placeNameChangedHandler = val => {
        this.setState({
          placeName: val
        });
      };

    render() {
        return (
    <View style={styles.inputContainer}>
        <TextInput 
          style={{width: 300}}
          placeholder="Place"
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
          />
          <Button title="Add" 
          style={styles.placeButton} 
          onPress={this.placeSubmitHandler}
          />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"

  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;