import React, { useContext, useEffect, useState } from 'react';
import '../../styles/plusminusbtn/plusminusbtn.css'
import UserContext from '../userContext';

const PlusMinusBtn = ({ onInputref, value=1 , size = "big", dispatchAdd, dispatchSub, dispatchInput }) => {
  // sub, add, onHandleChange, value,
  const [val, setVal] = useState(value)
  const { dispatch } = useContext(UserContext)

  // console.log(dispatchAdd)

  // const bb = (val) => {
  //   dispatch({...dispatchInput, payload: val})
  // }

  const handleChange = (e) => {
    const inputVal = e.currentTarget.value
    setVal(inputVal)
    if (dispatchInput) dispatch({...dispatchInput, payload: inputVal})
  }
  
  const add = () => {
    setVal(parseInt(val) + 1)
    if (dispatchAdd) dispatch(dispatchAdd)
  }
  
  const sub = () => {
    setVal(val > 1 ? parseInt(val) - 1 : val)
    if (dispatchSub) dispatch(dispatchSub)
  }

  useEffect(()=> {
    if (onInputref) onInputref(val)
  }, [val])


  useEffect(()=> {
    if (value > 1) setVal(value)
    return function cleanUp(){}
  }, [value])

    const button = (size) => {
        // return {padding: size === "small" ? ".5rem" : "1.5rem"} 
        return {padding: size === "small" && ".5rem"};
    }

    const input = (size) => {
      // const p = size === "small" ?  ".5rem" : ".9rem"
      // const w = size === "small" ? "10rem" : "25rem"
      // const f = size === "small" ? "1.5rem" : "2rem"
      // return {padding: p, width: w, fontSize: f}

      const p = size === "small" &&  ".5rem";
      const w = size === "small" && "10rem";
      const f = size === "small" && "1.5rem";
      return {padding: p, width: w, fontSize: f}
    }
    

    return (
        <div className="plus_minus-btn">
          <button style={button(size)} className="remove" onClick={sub}>
          <i className="fa-solid fa-minus"></i>
          </button>
          <input style={input(size)} value={val} onChange={handleChange} type="number" />
          <button style={button(size)} className="add" onClick={add}>
          <i className="fa-solid fa-plus"></i>
          </button>
        </div>
    );
};

export default PlusMinusBtn;