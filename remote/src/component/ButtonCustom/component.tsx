import { Button } from "antd";
import { useGetCompaniesQuery } from "../../api/companies";
import { useMemo } from "react";

export const ButtonCustom = () => {
        const { isFetching, isError, refetch } = useGetCompaniesQuery(undefined);

    const content = useMemo(() => {
        if (isFetching) {
            return "loading...";
        }

        if (isError) {
            return "ERROR!";
        }

        return "Click!";
    }, [isFetching, isError]);

    return (
        <Button onClick={() => refetch()}>
            {content}
        </Button>
    )
}