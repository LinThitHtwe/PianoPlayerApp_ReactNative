import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function App(): React.JSX.Element {
  const notes = [
    'Ab',
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
    'C#',
  ];

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Press any key to play piano •⩊•</Text>
      <View style={styles.pianoContainer}>
        {notes.map((note, index) => (
          <View>
            {note.length == 1 && (
              <TouchableOpacity key={index} style={styles.whiteKey}>
                <Text style={styles.whiteKeyText}>{note}</Text>
              </TouchableOpacity>
            )}

            {note.length > 1 && (
              <TouchableOpacity style={styles.blackKey}>
                <Text style={styles.blackKeyText}>{note}</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#B7E5C5',
    paddingHorizontal: 20,
    height: 'auto',
    width: 'auto',
    alignContent: 'center',
    alignItems: 'center',
  },

  mainTitle: {
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 12,
  },

  pianoContainer: {gap: 2, flexDirection: 'row', overflow: 'hidden'},

  whiteKey: {
    flexDirection: 'column',
    height: 300,
    width: 72,
    backgroundColor: '#fff',
    margin: 0,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },

  whiteKeyText: {
    color: '#000',
    textAlign: 'center',
    padding: 30,
    fontSize: 20,
  },

  blackKey: {
    backgroundColor: '#000',
    height: 180,
    width: 48,
    position: 'absolute',
    top: -5,
    left: -18,
    zIndex: 10,
    borderRadius: 6,
    justifyContent: 'flex-end',
  },

  blackKeyText: {
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;
