import React from 'react';
import "./style.css"

const UseState = () => {
  const initialData = 11;
  const [myNum, setMyNum] = React.useState(initialData);

  return (
    <>
      <div className='cenetr_div'>
        <p>{ myNum }</p>
        <div className='button2' onClick={() => setMyNum(myNum +1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='button2' onClick={() => (myNum > 0 ? setMyNum(myNum -1) : setMyNum(0))}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
