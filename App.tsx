import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

function App(): React.JSX.Element {
  const [deviceInfo, setDeviceInfo] = useState({
    brand: '',
    model: '',
    systemVersion: '',
    appVersion: '',
    buildNumber: '',
  });

  useEffect(() => {
    const getDeviceInfo = async () => {
      try {
        setDeviceInfo({
          brand: await DeviceInfo.getBrand(),
          model: await DeviceInfo.getModel(),
          systemVersion: await DeviceInfo.getSystemVersion(),
          appVersion: await DeviceInfo.getVersion(),
          buildNumber: await DeviceInfo.getBuildNumber(),
        });
      } catch (error) {
        console.error('Error getting device info:', error);
      }
    };

    getDeviceInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>🔧 Environment Test</Text>
          <Text style={styles.subtitle}>
            If you see device info below, your environment is working!
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Brand:</Text>
            <Text style={styles.value}>{deviceInfo.brand || 'Loading...'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Model:</Text>
            <Text style={styles.value}>{deviceInfo.model || 'Loading...'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>OS Version:</Text>
            <Text style={styles.value}>{deviceInfo.systemVersion || 'Loading...'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>App Version:</Text>
            <Text style={styles.value}>{deviceInfo.appVersion || 'Loading...'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Build Number:</Text>
            <Text style={styles.value}>{deviceInfo.buildNumber || 'Loading...'}</Text>
          </View>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            ✅ Native modules are working correctly!
          </Text>
          <Text style={styles.helpText}>
            If you see this, the issue is likely with PayHere library, not your
            environment.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    width: 120,
  },
  value: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  resultContainer: {
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  helpText: {
    fontSize: 14,
    color: '#558b2f',
  },
});

export default App;