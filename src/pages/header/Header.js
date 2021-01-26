import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../../css/header/Header.css';
import styled from '@emotion/styled';
import { AuthButton } from '../../components';
import { logo, search } from '../../assets';

const Container = styled.div`
  top: 0;
  left: 0;
  display: flex;
  height: 100px;
  align-items: center;
  padding: 0 4em;
  position: relative;
  border-bottom: 1px solid #eee;

  margin-left: auto;
  margin-right: auto;
}
`;

function Header() {
  const history = useHistory();

  return (
    <Container>
      <img
        style={{ height: '1.6em', cursor: 'pointer' }}
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
        <Link to='/signin'>
          <AuthButton>로그인</AuthButton>
        </Link>
      </div>
    </Container>
  );
}

export default Header;
