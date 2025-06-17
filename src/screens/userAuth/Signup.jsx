import { Alert, StyleSheet } from 'react-native'
import AuthContent from '../../components/Auth/AuthContent';
import { createUser } from '../../utils/auth';
import { useState } from 'react';
import LoadingOverlay from '../../ui/LoadingOverlay';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../store/auth-store';


const Signup = () => {
  const [isAuthenticating, setAuthenticating] = useState(false);

  const dispatch = useDispatch();

  const signupHandler = async ({ username, email, password }) => {
    setAuthenticating(true);
    try {
      const userData = await createUser(email, password, username);
      dispatch(authenticate(userData));
    }
    catch (error) {
      Alert.alert('Authentication failed!', 'Could not signed You in.', 'please check credenatials');
    }
    finally {
      setAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message='creating User...' />
  }
  return <AuthContent onAuthenticate={signupHandler} isLogin={false} />;
}

export default Signup;

const styles = StyleSheet.create({

})