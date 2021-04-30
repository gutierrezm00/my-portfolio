/* eslint-disable */


import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Link from './Link';

const HeaderWrapper = styled.div` 
    width:100%;
    display: flex;
    flex-direction: row;
    
`;
export default function Default() {

  return (
    <HeaderWrapper>
      <Link to="/test">Test1</Link>
    </HeaderWrapper>
  );
}
