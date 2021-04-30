import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Creatures from '../Creatures';

const Container = styled.div`
  display: flex;
  position:absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const CreatureContainer = styled.div`
    display: flex;
    position:relative;
    flex-grow: 20;
    width: 100%;
`;

export default function Default() {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setMouse({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    const newX = (x + mouse.x) / 2;
    const newY = (y + mouse.y) / 2;
    setTimeout(() => { setX(newX); setY(newY); }, 500);
  }, [x, y]);

  return (
    <Container>
      <CreatureContainer onMouseMove={onMouseMove}>
        <Creatures.Basic x={x} y={y} />
      </CreatureContainer>
    </Container>
  );
}
