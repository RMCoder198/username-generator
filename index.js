import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import UserNameApp from "./components/containers/UserNameApp";
import NameGenerator from './reducers/NameGenerator';
class App extends React.Component {
  render() {
    return (
      <div>
        <UserNameApp store={store} />
      </div>
    );
  }
}

let store = createStore(NameGenerator);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
