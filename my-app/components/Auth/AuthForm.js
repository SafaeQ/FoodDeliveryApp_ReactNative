import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import PrimaryButton from '../../components/button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Name"
          keyboardType="email-address"
        />
        <Input
          label="Email"
          keyboardType="email-address"
        />
        <Input
          label="Password"
          secure
        />
        <Input
          label="Address"
          secure
        />
        <Input
          label="Number"
          secure
        />
        <View style={styles.buttons}>
          <PrimaryButton title={'Signup'} onPress={()=> {console.log('clicked');}} />
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 20,
    marginLeft: 84,
    marginRight: 81,
  },
});