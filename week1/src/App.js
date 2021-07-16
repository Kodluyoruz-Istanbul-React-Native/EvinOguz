import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
      email:'',
      password:'',
  };

  render() {
      const {email,password} = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Image style={styles.logo} source={require('./img/logo.jpg')} />

        <TextInput
          placeholder="Telefon veya e-posta"
          placeholderTextColor="#cccccc"
          style={styles.textInput}
          onChangeText={e => this.setState({email: e})}></TextInput>
        <TextInput
          placeholder="Şifre"
          placeholderTextColor="#cccccc"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={p => this.setState({password: p})}></TextInput>
        <TouchableOpacity
          style={styles.buttonSignIn}
          onPress={() => {
            email == 'Evin' && password == '1234'
              ? Alert.alert('Giriş başarılı')
              : Alert.alert('E-posta veya şifre hatalı');
          }}>
          <Text style={styles.buttonSignInText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Şifreni mi Unuttun?</Text>
        </TouchableOpacity>
        <Text style={{color: '#cccccc', marginTop: 40, marginBottom: 40}}>
          {' '}
          ──────── VEYA ────────
        </Text>
        <TouchableOpacity style={styles.buttonAccount}>
          <Text style={styles.buttonAccountText}>
            Yeni Facebook Hesabı Oluştur
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 100,
  },
  textInput: {
    width: '80%',
    height: 50,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderColor: '#cccccc',
    fontSize: 18,
  },
  buttonSignIn: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    backgroundColor: '#2667FF',
    borderRadius: 5,
  },
  buttonSignInText: {
    color: 'white',
    fontSize: 18,
  },
  buttonAccount: {
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    backgroundColor: '#018C1F',
    borderRadius: 5,
  },
  buttonAccountText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize: 16,
  },
});
export default App;
