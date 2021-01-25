import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../../css/header/Header.css';
import styled from '@emotion/styled';
import { AuthButton } from '../../components';
import { logo, search } from '../../assets';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: #fff;
  z-index: 999999;
  align-items: center;
  padding: 0 20px;
  position: relative;
  border-bottom: 1px solid #eee;
}
`;

function Header() {
  const history = useHistory();

  return (
    <Container>
      <img
        style={{ height: '35px', cursor: 'pointer' }}
        src={logo}
        onClick={() => {
          history.push('/');
        }}
        alt='logo'
      />
      <div className='nav'>
        <Link to='/Search'>
          <img src={search} className='search' alt='search' />
        </Link>
        <AuthButton>로그인</AuthButton>
      </div>
    </Container>
  );
}

export default Header;
