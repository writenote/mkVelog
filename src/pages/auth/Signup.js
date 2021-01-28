import React, { useState } from 'react';
import styled from '@emotion/styled';
import '../../css/auth/auth.css';
import { clear } from '../../assets';
import { useHistory, Link } from 'react-router-dom';
import { Auth } from '../../stores/Auth';

const Container = styled.div``;

function Signup() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, onSignup } = Auth();

  const Signup = async (event) => {
    event.preventDefault();
    onSignup(email, password);
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
          <h2>회원가입</h2>
          <h4>이메일로 회원가입</h4>
          <form onSubmit={Signup}>
            <input
              name='email'
              type='email'
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              required
              placeholder='이메일을 입력하세요.'
            />
            <input
              name='password'
              type='password'
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              required
              placeholder='비밀번호를 입력하세요.'
            />
            <button>회원가입</button>
          </form>
          <span>에러:: {error}</span>
        </div>
        <div>
          <p>소셜 계정으로 회원가입</p>
          <span>
            계정이 이미 있으신가요?{' '}
            <Link to='/signup' className='link'>
              로그인
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
