// import { ConfigProvider } from "antd"
import { Provider } from "react-redux"
import { setupStore } from "./store/store"

import MainContent from "./component/MainContent/component"

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <MainContent title="mk" />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
      </Provider>
  )
}

export default App
