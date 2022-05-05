import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import PrimaryButton from '../../components/button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Email Address"
          // onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          // value={enteredEmail}
          keyboardType="email-address"
          // isInvalid={emailIsInvalid}
        />
        <Input
          label="Password"
          // onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          // value={enteredPassword}
          // isInvalid={passwordIsInvalid}
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
    marginTop: 12,
  },
});