import { View , Text} from 'react-native';
import AuthForm from '../components/Auth/AuthForm';

function SignupScreen() {

  return (
    <>
    <View>
      <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }} > Sign Up</Text>
    </View>

    <AuthForm />
    </>
  );
}

export default SignupScreen;

