import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CreatureWrapper = styled.div`
    position: relative;
    transition: top, left ;
    width: 1.5rem;
    height: 1.5rem;
    transition-duration:  500ms;
    transition-timing-function: linear;
`;
const CreatureHorns = styled.div`
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background-color: red;
    transform: translate(0%, -50%);
    clip-path: polygon(0% 0%, 50% 100%, 100% 0%, 100% 100%, 0% 100%);
`;

const CreatureBody = styled.div`
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: red;
`;
export default function Creature(props) {
  const { x, y } = props;
  return (
    <CreatureWrapper style={{ left: `${x}px`, top: `${y}px` }}>
      <CreatureHorns />
      <CreatureBody />
    </CreatureWrapper>
  );
}

Creature.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};
