import { Button } from "antd";
import { useGetPokemonsQuery } from "../../api/pokemons";
import { useMemo } from "react";

export const ButtonCustom = () => {
    const { isFetching, isError, refetch } = useGetPokemonsQuery(undefined);

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