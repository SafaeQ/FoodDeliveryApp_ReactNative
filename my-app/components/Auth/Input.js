import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors  from '../../constants/colors';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        // autoCapitalize={false}
        // autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'balck',
    marginBottom: 4,
    fontSize: 18,
    marginTop: 30,
    textAlign: 'center'
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    // backgroundColor: Colors.primary200,
    color: Colors.primary200,
    borderRadius: 4,
    fontSize: 20,
    marginLeft: 22,
    marginRight: 22,
    borderWidth: 1,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});