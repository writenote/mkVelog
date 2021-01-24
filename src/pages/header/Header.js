import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { logo, search } from '../../assets';

const Container = styled.div``;

function Header() {

  const history = useHistory();

  return (
  <Container>
    <img src={logo} onClick={() => { history.push('/'); }} alt='logo'></img>
    <Link to='/Search'><img src={search} /></Link>
    <button>로그인</button>
  </Container>
  );
}

export default Header