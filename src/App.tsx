import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Sound from 'react-native-sound';

type onPressProps = {
  note: string;
  index: number;
};

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
    'Ab',
    'A',
    'Bb',
    'B',
    'C',
    'C#',
  ];
  const playAudio = (note: string, index: number): void => {
    const sharps = ['C', 'F'];
    const flats = ['A', 'B', 'E'];
    let clickNote = '';
    if (note.length == 1) {
      clickNote = note.toLocaleLowerCase();
    } else {
      const firstChar = note.charAt(0);
      if (sharps.includes(firstChar)) {
        clickNote = `${firstChar.toLowerCase()}sharp`;
      } else if (flats.includes(firstChar)) {
        clickNote = `${firstChar.toLowerCase()}flat`;
      }
    }

    const sound = new Sound(`${clickNote}.wav`, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound: ', error);
        return;
      }
      sound.play(success => {
        sound.release();
      });
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Press any key to play piano •⩊•</Text>
      <View style={styles.pianoContainer}>
        {notes.map((note, index) => (
          <View key={index}>
            {note.length == 1 && (
              <TouchableOpacity
                key={index}
                style={styles.whiteKey}
                onPressIn={() => playAudio(note, index)}>
                <Text style={styles.whiteKeyText}>{note}</Text>
              </TouchableOpacity>
            )}

            {note.length > 1 && (
              <TouchableOpacity
                onPressIn={() => playAudio(note, index)}
                key={index}
                style={styles.blackKey}>
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
    backgroundColor: '#bfbfbf',
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

  pianoContainer: {
    gap: 2,
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 10,
  },

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
