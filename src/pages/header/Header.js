import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../../css/header/Header.css';
import styled from '@emotion/styled';
import { AuthButton } from '../../components';
import { logo, search } from '../../assets';

const Container = styled.div``;

function Header() {
  const history = useHistory();

  return (
    <Container>
      <img
        src={logo}
        onClick={() => {
          history.push('/');
        }}
        alt='logo'
      />
      <Link to='/Search'>
        <img src={search} alt='search' width='35em' />
      </Link>
      <AuthButton>로그인</AuthButton>
    </Container>
  );
}

export default Header;
