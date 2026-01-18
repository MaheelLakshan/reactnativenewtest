// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ScrollView,
// } from 'react-native';


// const PayHerePayment = () => {
//   const [amount, setAmount] = useState('50.00');
//   const [firstName, setFirstName] = useState('Saman');
//   const [lastName, setLastName] = useState('Perera');
//   const [email, setEmail] = useState('samanp@gmail.com');
//   const [phone, setPhone] = useState('0771234567');

//   const initiatePayment = () => {
//     const paymentObject = {
//       sandbox: true,
//       merchant_id: '1211149',
//       notify_url: 'http://sample.com/notify',
//       order_id: 'Order_' + new Date().getTime(),
//       items: 'Test Payment from React Native',
//       amount: amount,
//       currency: 'LKR',
//       first_name: firstName,
//       last_name: lastName,
//       email: email,
//       phone: phone,
//       address: 'No.1, Galle Road',
//       city: 'Colombo',
//       country: 'Sri Lanka',
//       delivery_address: 'No. 46, Galle road, Kalutara South',
//       delivery_city: 'Kalutara',
//       delivery_country: 'Sri Lanka',
//       custom_1: '',
//       custom_2: '',
//     };

//     PayHere.startPayment(
//       paymentObject,
//       (paymentId) => {
//         console.log('Payment Completed', paymentId);
//         Alert.alert('Success', `Payment completed! ID: ${paymentId}`);
//       },
//       (errorData) => {
//         console.log('Payment Error', errorData);
//         Alert.alert('Payment Error', errorData);
//       },
//       () => {
//         console.log('Payment Dismissed');
//         Alert.alert('Dismissed', 'Payment was cancelled');
//       },
//     );
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>💳 PayHere Payment</Text>
//       <Text style={styles.subtitle}>Test PayHere Integration</Text>

//       <View style={styles.form}>
//         <Text style={styles.label}>Amount (LKR)</Text>
//         <TextInput
//           style={styles.input}
//           value={amount}
//           onChangeText={setAmount}
//           keyboardType="decimal-pad"
//           placeholder="50.00"
//         />

//         <Text style={styles.label}>First Name</Text>
//         <TextInput
//           style={styles.input}
//           value={firstName}
//           onChangeText={setFirstName}
//           placeholder="First Name"
//         />

//         <Text style={styles.label}>Last Name</Text>
//         <TextInput
//           style={styles.input}
//           value={lastName}
//           onChangeText={setLastName}
//           placeholder="Last Name"
//         />

//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholder="email@example.com"
//         />

//         <Text style={styles.label}>Phone</Text>
//         <TextInput
//           style={styles.input}
//           value={phone}
//           onChangeText={setPhone}
//           keyboardType="phone-pad"
//           placeholder="0771234567"
//         />

//         <TouchableOpacity style={styles.payButton} onPress={initiatePayment}>
//           <Text style={styles.payButtonText}>Pay Now - LKR {amount}</Text>
//         </TouchableOpacity>

//         <View style={styles.infoBox}>
//           <Text style={styles.infoTitle}>🔒 Test Mode</Text>
//           <Text style={styles.infoText}>
//             This is using PayHere Sandbox mode.{'\n'}
//             Use test card: 4916217501611292{'\n'}
//             Expiry: Any future date{'\n'}
//             CVV: Any 3 digits
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   form: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#555',
//     marginBottom: 8,
//     marginTop: 12,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     backgroundColor: '#fafafa',
//   },
//   payButton: {
//     backgroundColor: '#4CAF50',
//     padding: 16,
//     borderRadius: 8,
//     marginTop: 24,
//     alignItems: 'center',
//   },
//   payButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   infoBox: {
//     backgroundColor: '#fff3cd',
//     padding: 16,
//     borderRadius: 8,
//     marginTop: 20,
//     borderWidth: 1,
//     borderColor: '#ffc107',
//   },
//   infoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#856404',
//     marginBottom: 8,
//   },
//   infoText: {
//     fontSize: 13,
//     color: '#856404',
//     lineHeight: 20,
//   },
// });

// export default PayHerePayment;