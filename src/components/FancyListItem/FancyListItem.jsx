import React from 'react';
import styled from 'styled-components';

const FancyListItem = (props) => {
  const { left, right, blank } = props;

  const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 0 8px;

    @media only screen and (min-width: 768px) {
      margin: 0 0 12px;
    }

    &:last-of-type {
      margin: 0;
    }
  `

  const Text = styled.div`
    font-size: 12px;
    line-height: 16px;

    @media only screen and (min-width: 768px) {
      font-size: 15px;
      line-height: 22px;
    }
  `

  const Fill = styled.div`
    box-sizing: border-box;
    flex-grow: 1;
    padding: 0 10px;
  `

  const FillInner = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    border-bottom: 1px solid #000;
  `

  return (
    <Container>
      <Text>{ left }</Text>
      { !blank ? <Fill>
        <FillInner>
        </FillInner>
      </Fill> : null }
      <Text>{ right }</Text>
    </Container>
  )
}

export default FancyListItem;