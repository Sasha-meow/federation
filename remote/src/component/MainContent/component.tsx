import { ConfigProvider, Layout, Typography } from "antd"
import { useMemo } from "react";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";
import { ButtonCustom } from "../ButtonCustom/component";

const { Title } = Typography;
const { Header, Content } = Layout;

const MainContent = ({ title }: { title: string }) => {
    const store = useMemo(() => setupStore(), []);

    return (
        <Provider store={store}>
            <ConfigProvider theme={{ token: { colorPrimary: "#fc03e3" } }}>
                <Layout>
                    <Header style={{ backgroundColor: "transparent" }}>
                        <Title>
                            {title}
                        </Title>
                    </Header>
                    <Content>
                        <ButtonCustom />
                    </Content>
                </Layout>
            </ConfigProvider>
        </Provider>
    )
};

export default MainContent;
