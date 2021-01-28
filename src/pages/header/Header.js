import React, { Fragment, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../../css/header/Header.css';
import styled from '@emotion/styled';
import { AuthButton } from '../../components';
import { logo, search } from '../../assets';
import { Auth } from '../../stores/Auth';

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

  const { user, signState, signOut } = Auth();

  useEffect(() => {
    signState();
  }, [user]);

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
        {user === false ? <LoggedHeader signOut={signOut} /> : <UnLoggedHeader />}
      </div>
    </Container>
  );
}

const LoggedHeader = ({ signOut }) => {
  return (
    <Fragment>
      <Link to='/write'>
        <AuthButton>글쓰기</AuthButton>
      </Link>
      <div>
        <button onClick={() => signOut()}>로그아웃</button>
      </div>
    </Fragment>
  );
};

const UnLoggedHeader = () => {
  return (
    <Fragment>
      <Link to='/signin'>
        <AuthButton>로그인</AuthButton>
      </Link>
    </Fragment>
  );
};

export default Header;
