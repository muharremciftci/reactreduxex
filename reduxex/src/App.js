import React from "react";
import { Provider } from "react-redux";
import store from "./store/index.js";
import {Counter, Buttons } from "./components";


function App() {
  return (
    <Provider store={store}>
    <Counter/>
    <br/>
    <Buttons/>
    </Provider>
  );
}

export default App;
