import React, { Component } from 'react';
import styled from 'styled-components';

class Fourth extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    return (
      <Wrap>
        <h1>4번</h1>
      </Wrap>
    );
  }
}

export default Fourth;

const Wrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
`;
