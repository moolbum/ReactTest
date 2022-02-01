import React from 'react';
import styled from 'styled-components';

const MyName = ({ name }) => {
  return (
    <div>
      <Text>안녕하세요 제 이름은 {name} 입니다.</Text>
    </div>
  );
};

MyName.defaultProps = {
  name: '기본이름',
};

export default MyName;

const Text = styled.p`
  margin-top: 15px;
  font-size: 30px;
`;
