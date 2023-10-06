import React, { Suspense } from "react"
import { Button } from "antd"
//@ts-ignore
const MainContent = React.lazy(() => import("remoteApp/MainContent"));

export const Header = () => {
    return (
        <>
            <Button>Click</Button>
            <Suspense fallback={<>loading...</>}>
                <MainContent title="Test federation" />
            </Suspense>
        </>
    )
};
