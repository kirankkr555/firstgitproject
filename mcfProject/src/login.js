import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  background,
} from 'react-native';
import styles from './css';


const Login = () => {
  return (

    <View style={styles.Container}>

      <Image source={require('../assets/images/logo.png')} style={styles.mclogostyle} />

      <Text style={styles.admintext}>ADMIN</Text>
      <TextInput placeholder="username" style={styles.inputstyle} />
      <TextInput placeholder="password" secureTextEntry={true} style={styles.inputstyle} />
      <Text></Text>
      <TouchableOpacity style={styles.touchablestyle}>
        <Text style={styles.loginbtnstyles} >LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

