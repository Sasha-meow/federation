import { ConfigProvider, Layout } from "antd"
import { Header } from "./component/Header/component";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#fc03e3" } }}>
      <Layout>
        <Header />
      </Layout>
    </ConfigProvider>
  )
}

export default App
