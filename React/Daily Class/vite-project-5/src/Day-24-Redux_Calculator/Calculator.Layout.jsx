import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearAction, DivAction, MulAction, SubAction, addAction } from "./Calculator.slice";

const Calculator = () => {
  const result = useSelector((state) => state.meraCalculator.value); // as it is a key-value object pair
  const dispatch = useDispatch();  //dispatch is on the way are parcel is dispatched from its location

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const onAddNums = () => {
    // Ready to travel via dispatch
    dispatch(addAction({ num1, num2 })); // we are passing it as object as if pass normally it will only reflect for one only.
  };

  const onSubNums = () =>{
    dispatch(SubAction({num1,num2}));
  };

  const onMulNums = () => {
    dispatch(MulAction({num1,num2}));
  };

  const onDivNums = () => {
    dispatch(DivAction({num1,num2}));
  };

  const allClearNums = () => {
    dispatch(ClearAction({num1,num2}));
  };

  return (
    <div>
      <h2>MY CALCULATOR</h2>
      <p>First Number : {num1}</p>
      <p>Second Number : {num2}</p>
      <strong><p>Result : {result}</p></strong>
      <div>
        
        <input
          value={num1}
          type="text"
          placeholder="Enter first number"
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div>
        <input
          value={num2}
          type="text"
          placeholder="Enter second number"
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onAddNums}>Addition + </button>
      </div>
      <div>
        <button onClick={onSubNums}>Subtraction -</button>
      </div>

      <div>
        <button onClick={onMulNums}>Multiplication *</button>
      </div>
      
      <div>
        <button onClick={onDivNums}>Division / </button>
      </div>

      <div>
      <button onClick={allClearNums}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;


/* main.js file -----

import Calculator from './Day-24-Redux_Calculator/Calculator.Layout';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Calculator />
    </Provider>
  </>
); */ 

/* store.js file -----
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Day-23-Redux_intro/Counter.Slice";
import CalculatorSlice from "../Day-24-Redux_Calculator/Calculator.slice";

export const store = configureStore({
  reducer: {
    meraCounter: CounterSlice,
    meraCalculator: CalculatorSlice,
  },
});*/
