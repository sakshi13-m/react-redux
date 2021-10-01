import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import history from "./redux/history";
import { ConnectedRouter } from "connected-react-router";
import InputFieldApp from "./components/inputField";
import { InputField } from "react-library";
import NameComponent from "./components/name";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <header className="App-header">
            <NameComponent />
            <InputField>
              <InputFieldApp />
            </InputField>
          </header>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
