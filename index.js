import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import UserName from "UserName";
class App extends React.Component {
  render() {
    return (
      <div>
        <UserName store={store} />
      </div>
    );
  }
}

let store = createStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
