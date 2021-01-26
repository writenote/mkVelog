import React from 'react';
import styled from '@emotion/styled';
import '../../css/auth/auth.css';
import { clear } from '../../assets';
import { useHistory, Link } from 'react-router-dom';

const Container = styled.div``;

function Signin() {
  const history = useHistory();
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
            <input placeholder='이메일을 입력하세요.' />
            <button>로그인</button>
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
