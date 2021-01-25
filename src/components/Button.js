import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding-left: 0.8em;
  padding-right: 0.8em;

  font-size: 1em;
  font-weight: bold;

  height: 2em;

  border: 0.15em solid #2e2e2e;
  color: black;

  border-radius: 1.1em;

  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background-color: #a4a4a4;
    color: white;
  }

  cursor: pointer;
`;

export const AuthButton = ({ style, children }) => {
  return (
    <StyledButton style={{ ...style }} width='6em'>
      {children}
    </StyledButton>
  );
};
