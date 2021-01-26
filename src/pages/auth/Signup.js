import React from 'react';
import styled from '@emotion/styled';
import '../../css/auth/auth.css';
import { clear } from '../../assets';
import { useHistory, Link } from 'react-router-dom';

const Container = styled.div``;

function Signup() {
  const history = useHistory();

  return (
    <Container>
      <div className='popup'>
        <div className='exit'>
          <img
            src={clear}
            cursor='pointer'
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
          <form>
            <input placeholder='이메일을 입력하세요.' />
            <button>회원가입</button>
          </form>
        </div>
        <div>
          <p>소셜 계정으로 회원가입</p>
        </div>
        <span>
          계정이 이미 있으신가요?{' '}
          <Link to='/signin' className='link'>
            로그인
          </Link>
        </span>
      </div>
    </Container>
  );
}

export default Signup;
