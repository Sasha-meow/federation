import { ConfigProvider, Layout } from "antd"
import { Provider } from "react-redux"
//@ts-ignore
import React from "react"
import { setupStore } from "./store/store"
//@ts-ignore
const MainContent = React.lazy(() => import("remoteApp/MainContent"));
import { Header } from "./component/Header/component";

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{ token: { colorPrimary: "#fc03e3" } }}>
        <Layout>
          <Header />
          <MainContent title="Test federation" />
        </Layout>
      </ConfigProvider>
    </Provider>
  )
}

export default App
