import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function App(): React.JSX.Element {
  const notes = [
    'A',
    'Bb',
    'B',
    'C',
    'C#',
    'D',
    'Eb',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'Bb',
    'B',
    'C',
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#B7E5C5',
        paddingHorizontal: 20,

        height: 'auto',
        width: 'auto',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#000',
          fontSize: 25,
          fontWeight: '700',
          paddingBottom: 12,
        }}>
        Press any key to play piano •⩊•
      </Text>
      <View style={{gap: 2, flexDirection: 'row'}}>
        {notes.map((note, index) => (
          <View>
            {note.length == 1 && (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'column',
                  height: 300,
                  width: 72,
                  backgroundColor: '#fff',
                  margin: 0,
                  borderRadius: 10,
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
              </TouchableOpacity>
            )}

            {note.length > 1 && (
              <TouchableOpacity
                style={{
                  backgroundColor: '#000',
                  height: 180,
                  width: 48,
                  position: 'absolute',
                  top: -5,
                  left: -18,
                  zIndex: 10,
                  borderRadius: 6,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    padding: 10,
                    textAlign: 'center',
                    fontSize: 18,
                  }}>
                  {note}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

export default App;
