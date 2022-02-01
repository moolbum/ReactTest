import React from 'react';
import InputInfo from './InputInfo';

const InputList = ({ data, onRemove, id }) => {
  return (
    <div>
      {data.map(info => {
        return <InputInfo key={info.id} info={info} onRemove={onRemove} />;
      })}
    </div>
  );
};

InputList.defaultProps = {
  data: [],
};

export default InputList;
