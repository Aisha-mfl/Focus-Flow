import axios from 'axios';



const API_KEY = 'AIzaSyBS0PJhNrzFWk6PZJnwIlLKYDGHd_3EuvM';
const DATABASE_URL =
  'https://expense-tracker-71bde-default-rtdb.firebaseio.com';

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  console.log(url);

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  return {
    token: response.data.idToken,
    email: response.data.email,
    userId: response.data.localId,
  };
};

export const createUser = async (email, password, username) => {
  try {
    const authData = await authenticate('signUp', email, password);
    console.log('userdata', authData);

    const userData = {
      username: username,
      email: email,
    };

    const url = `${DATABASE_URL}/User/${authData.userId}.json?auth=${authData.token}`;
    await axios.post(url, userData);

    return {
      ...authData,
      username: username,
    };
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const authData = await authenticate('signInWithPassword', email, password);
    const userProfile = await getUserProfile(authData.userId , authData.token);
    console.log('user', userProfile);

    return {
      ...authData,
      username: userProfile.username,
    };
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (userId, token) => {
  try {
    const url = `${DATABASE_URL}/User/${userId}.json?auth=${token}`;
    const response = await axios.get(url);
    console.log('USER', response);

    if (!response.data) {
      throw new Error('User profile not found!');
    }
    const userData = response.data;

    if (typeof userData === 'object' && Object.keys(userData).length === 1) {
      const nestedKey = Object.keys(userData)[0];
      return {
        username: userData[nestedKey].username,
      };
    }
    return {
      username: userData.username,
    };
  } catch (error) {
    throw error;
  }
};
