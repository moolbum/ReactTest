import React from 'react';
import InputInfo from './InputInfo';

const InputList = ({ data, onRemove, onUpdata }) => {
  return (
    <div>
      {data.map(info => {
        return (
          <InputInfo
            key={info.id}
            info={info}
            onRemove={onRemove}
            onUpdata={onUpdata}
          />
        );
      })}
    </div>
  );
};

InputList.defaultProps = {
  data: [],
};

export default React.memo(InputList);
