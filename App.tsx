import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';
// @ts-ignore - PayHere doesn't have TypeScript definitions
import PayHere from '@payhere/payhere-mobilesdk-reactnative';


function App(): React.JSX.Element {
  const [amount, setAmount] = useState('50.00');
  const [firstName, setFirstName] = useState('Saman');
  const [lastName, setLastName] = useState('Perera');
  const [email, setEmail] = useState('samanp@gmail.com');
  const [phone, setPhone] = useState('0771234567');

  const initiatePayment = () => {
    const paymentObject = {
      sandbox: true,
      merchant_id: '1211149',
      notify_url: 'http://sample.com/notify',
      order_id: 'Order_' + new Date().getTime(),
      items: 'Test Payment from React Native',
      amount: amount,
      currency: 'LKR',
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      address: 'No.1, Galle Road',
      city: 'Colombo',
      country: 'Sri Lanka',
      delivery_address: 'No. 46, Galle road, Kalutara South',
      delivery_city: 'Kalutara',
      delivery_country: 'Sri Lanka',
      custom_1: '',
      custom_2: '',
    };

    PayHere.startPayment(
      paymentObject,
      (paymentId) => {
        console.log('Payment Completed', paymentId);
        Alert.alert('Success! 🎉', `Payment completed!\nPayment ID: ${paymentId}`);
      },
      (errorData) => {
        console.log('Payment Error', errorData);
        Alert.alert('Payment Error ❌', errorData);
      },
      () => {
        console.log('Payment Dismissed');
        Alert.alert('Cancelled', 'Payment was cancelled by user');
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>💳 PayHere Payment Test</Text>
          <Text style={styles.subtitle}>
            iOS & Android Payment Gateway Integration
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Amount (LKR)</Text>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              placeholder="50.00"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="email@example.com"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholder="0771234567"
            />
          </View>

          <TouchableOpacity style={styles.payButton} onPress={initiatePayment}>
            <Text style={styles.payButtonText}>💰 Pay LKR {amount}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.testInfoBox}>
          <Text style={styles.testInfoTitle}>🧪 Test Mode Active</Text>
          <Text style={styles.testInfoText}>
            Using PayHere Sandbox Environment
          </Text>
          <View style={styles.divider} />
          <Text style={styles.testCardTitle}>Test Card Details:</Text>
          <Text style={styles.testCardText}>
            💳 Visa: 4916217501611292{'\n'}
            💳 Master: 5307732125531696{'\n'}
            💳 Amex: 371449635398431{'\n'}
            📅 Expiry: Any future date{'\n'}
            🔒 CVV: Any 3 digits
          </Text>
        </View>

        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>✅ Integration Status</Text>
          <Text style={styles.statusText}>
            • PayHere SDK: Installed{'\n'}
            • Android: Configured{'\n'}
            • iOS: Configured{'\n'}
            • Ready to test payments!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#fafafa',
    color: '#1a1a1a',
  },
  payButton: {
    backgroundColor: '#00b894',
    padding: 18,
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#00b894',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  testInfoBox: {
    backgroundColor: '#fff3cd',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ffc107',
  },
  testInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 4,
  },
  testInfoText: {
    fontSize: 14,
    color: '#856404',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#ffc107',
    marginVertical: 12,
  },
  testCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#856404',
    marginBottom: 8,
  },
  testCardText: {
    fontSize: 13,
    color: '#856404',
    lineHeight: 22,
  },
  statusBox: {
    backgroundColor: '#d4edda',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#28a745',
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#155724',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 14,
    color: '#155724',
    lineHeight: 24,
  },
});

export default App;