import React, { useState } from 'react';
import styled from '@emotion/styled';
import '../../css/auth/auth.css';
import { clear } from '../../assets';
import { useHistory, Link } from 'react-router-dom';
import { firestore } from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

const Container = styled.div``;

function Signin() {
  const history = useHistory();

  const [eamil, setEamil] = useState('');
  const handleClick = () => {};
  const handleChange = (e) => {
    setEamil(e.target.value);
  };

  const actionCodeSettings = {
    url: 'velogtest.firebaseapp.com',
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios',
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12',
    },
    dynamicLinkDomain: 'example.page.link',
  };

  function emailLinkSend(email, { actionCodeSettings }) {
    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
        console.log('test____ss');
      })
      .catch((error) => {
        console.log(error.code);
      });
  }

  function emailLinkComplete() {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      firebase
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch((error) => {
          console.log(error.code);
        });
    }
  }

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <Container>
      <div className='popup'>
        <div className='exit'>
          <img
            src={clear}
            className='clear'
            alt='clear'
            onClick={() => {
              history.push('/');
            }}
          />
        </div>
        <div className='contents'>
          <h2>로그인</h2>
          <h4>이메일로 로그인</h4>
          <form>
            <input value={eamil} onChange={handleChange} placeholder='이메일을 입력하세요.' />
            <button onClick={handleClick}>로그인</button>
          </form>
        </div>
        <div>
          <p>소셜 계정으로 로그인</p>
          <span>
            아직 회원이 아니신가요?{' '}
            <Link to='/signup' className='link'>
              회원가입
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Signin;
