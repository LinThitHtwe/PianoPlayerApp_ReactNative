import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function App(): React.JSX.Element {
  const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#B7E5C5',
        padding: 20,
        height: 'auto',
        width: 'auto',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello</Text>
      <View style={{gap: 2, flexDirection: 'row'}}>
        {notes.map((note, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'column',
              height: 300,
              width: 75,
              backgroundColor: '#fff',
              margin: 0,
              borderRadius: 10,
              position: 'relative',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                padding: 30,
                fontSize: 20,
              }}>
              {note}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#000',
                height: 180,
                width: 38,
                position: 'absolute',
                top: -5,
                left: -4,
                zIndex: 10,
              }}>
              <Text style={{color: '#000'}}>HEL</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default App;
