import React, { useState } from 'react';
import styled from '@emotion/styled';
import '../../css/auth/auth.css';
import { clear } from '../../assets';
import { useHistory, Link } from 'react-router-dom';
import { authService } from '../../firebase';

const Container = styled.div``;

function Signin() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [user, setUser] = useState('');

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await authService.signInWithEmailAndPassword(email, password);
      return history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const signState = () => {
    let user_state = localStorage.getItem('auth');
    if (!user_state) return;
    setUser(JSON.parse(user_state));
    return true;
  };

  const signOut = () => {
    localStorage.removeItem('auth');
    setUser(null);
    window.location.href = '/';
  };

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
          <form onSubmit={onSubmit}>
            <input
              name='email'
              type='email'
              value={email}
              onChange={onChange}
              required
              placeholder='이메일을 입력하세요.'
            />
            <input
              name='password'
              type='password'
              value={password}
              onChange={onChange}
              required
              placeholder='비밀번호를 입력하세요.'
            />
            <button>로그인</button>
          </form>
          <span>에러:: {error}</span>
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
