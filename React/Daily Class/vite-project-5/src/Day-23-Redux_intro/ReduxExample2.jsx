import { useSelector } from "react-redux";

const ReduxExample2 = () => {
  const counter = useSelector((state) => state.meraCounter);
  console.log("ReduxExample2: ", counter);
  return (
    <>
      <p>I'm a Redux Example2 {counter.value}</p>
    </>
  );
};

export default ReduxExample2;

/* main.js file ------

import React from 'react'
import ReactDOM from 'react-dom/client'


import ReduxExample from "./Day-23-Redux_intro/ReduxExample";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReduxExample2 from "./Day-23-Redux_intro/ReduxExample2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <ReduxExample />
      <ReduxExample2 />
    </Provider>
  </>
); */