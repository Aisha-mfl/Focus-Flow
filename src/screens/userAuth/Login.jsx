import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../ui/LoadingOverlay';

import { useDispatch } from 'react-redux';
import { authenticate } from '../../store/auth-store';
import { login } from '../../utils/auth';

const Login = () => {

  const [isAuthenticating, setAuthenticating] = useState(false);

  const dispatch = useDispatch();

  const loginHandler = async ({ email, password }) => {
    setAuthenticating(true);
    try {
      const userData = await login(email, password);
      console.log('userData', userData);
      dispatch(authenticate(userData));
    }
    catch (error) {
      Alert.alert('Authentication failed!', 'Could not logged You in.', 'please check credenatials');
    }
    finally {
      setAuthenticating(false);

    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message='Loggin You in' />
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;

}

export default Login;

const styles = StyleSheet.create({})