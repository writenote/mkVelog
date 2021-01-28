import { useState } from 'react';
import { firebase, authService } from '../firebase';
import { useHistory } from 'react-router-dom';

export const Auth = () => {
  const [user, setUser] = useState(true);
  const [error, setError] = useState('');

  const history = useHistory();

  const onSignin = async (email, password) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        authService.signInWithEmailAndPassword(email, password);
        return history.push('/');
      })
      .catch((error) => {
        setError(error.message);
        return false;
      });
  };

  const onSignup = async (email, password) => {
    try {
      await authService.createUserWithEmailAndPassword(email, password);
      return history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const signState = () => {
    //유저 정보를 담음. 로그인 상태 아니면 null
    //글 쓸 때 함수 수정해서 쓸 수 있을 듯.?
    let userData = firebase.auth().currentUser;
    if (userData) {
      setUser(true);
    } else {
      setUser(false);
    }
    return user;
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('잘가요!');
      })
      .catch((error) => {
        setError(error.message);
      });
    return (window.location.href = '/');
  };

  return {
    user,
    error,
    onSignin,
    onSignup,
    signState,
    signOut,
  };
};
