import React from 'react';
import styled from '@emotion/styled';
import '../../css/Common.css';
import axios from 'axios';

const Container = styled.div``;

function Signup() {
  return (
    <Container>
      <div>
        <h2>회원가입</h2>
        <h4>이메일로 회원가입</h4>
        <form>
          <input placeholder='이메일을 입력하세요.' value='' />
          <button>회원가입</button>
        </form>
      </div>
      <div>
        <p>소셜 계정으로 회원가입</p>
        <span>
          계정이 이미 있으신가요? <p className='link'>로그인</p>
        </span>
      </div>
    </Container>
  );
}

export default Signup;
