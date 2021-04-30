import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonLink = styled(Link)`
    background-color: red;  
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem;
    padding: 1rem;
    text-decoration: none;
    :hover{
      background-color: green;
    }
`;

export default function Default() {
  return (
    <>
      <ButtonLink to="/test">TESTLINK0</ButtonLink>
      <ButtonLink to="/test1">TESTLINK1</ButtonLink>
      <ButtonLink to="/test2">TESTLINK2</ButtonLink>
      <ButtonLink to="/test3">TESTLINK3</ButtonLink>
      <ButtonLink to="/test4">TESTLINK4</ButtonLink>
      <ButtonLink to="/test5">TESTLINK5</ButtonLink>
      <ButtonLink to="/test6">TESTLINK6</ButtonLink>

    </>

  );
}
