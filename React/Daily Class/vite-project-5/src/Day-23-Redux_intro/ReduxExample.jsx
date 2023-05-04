import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Counter.Slice";

const ReduxExample = () => {
  const counter = useSelector((state) => state.meraCounter);
  const dispatch = useDispatch();
  return (
    <>
      <p>I'm a Redux Example {counter.value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default ReduxExample;