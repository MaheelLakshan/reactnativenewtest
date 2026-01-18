import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

function App(): React.JSX.Element {
  const [cameraStatus, setCameraStatus] = useState('Not checked');

  const checkCameraPermission = async () => {
    try {
      const permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA;

      const result = await check(permission);

      switch (result) {
        case RESULTS.UNAVAILABLE:
          setCameraStatus('❌ Camera not available');
          break;
        case RESULTS.DENIED:
          setCameraStatus('⚠️ Permission denied');
          break;
        case RESULTS.GRANTED:
          setCameraStatus('✅ Permission granted');
          break;
        case RESULTS.BLOCKED:
          setCameraStatus('🚫 Permission blocked');
          break;
      }
    } catch (error) {
      console.error('Permission check error:', error);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA;

      const result = await request(permission);

      if (result === RESULTS.GRANTED) {
        setCameraStatus('✅ Permission granted!');
        Alert.alert('Success', 'Camera permission granted!');
      } else {
        setCameraStatus('❌ Permission denied');
        Alert.alert('Denied', 'Camera permission was denied');
      }
    } catch (error) {
      console.error('Permission request error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🍎 iOS CocoaPods Test</Text>
        <Text style={styles.subtitle}>
          Testing Podfile configuration with permissions
        </Text>

        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Camera Status:</Text>
          <Text style={styles.statusText}>{cameraStatus}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={checkCameraPermission}>
          <Text style={styles.buttonText}>Check Permission</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={requestCameraPermission}>
          <Text style={styles.buttonText}>Request Permission</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>✅ What This Tests:</Text>
          <Text style={styles.infoText}>
            • CocoaPods installation{'\n'}
            • Podfile configuration{'\n'}
            • Native module linking{'\n'}
            • iOS permissions setup{'\n'}
            • Info.plist modifications
          </Text>
        </View>

        <Text style={styles.helpText}>
          If this works, your iOS environment is properly configured!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  statusContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  statusText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#666',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#1565C0',
    lineHeight: 22,
  },
  helpText: {
    fontSize: 14,
    color: '#4caf50',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
});

export default App;