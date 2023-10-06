import { Button } from "antd";
import { useMemo } from "react";
//@ts-ignore
import { useDispatch } from "react-redux";
//@ts-ignore
import { baseApi, useGetPokemonsQuery } from "../../api";

export const ButtonCustom = () => {
    // const dispatch = useDispatch();
    const { refetch } = useGetPokemonsQuery(undefined);

    const content = useMemo(() => {
        return "Click!";
    }, []);

    const handleClick = async () => {
        refetch();
        //@ts-ignore
        // const { data } = await dispatch(baseApi.endpoints.getPokemons.initiate(undefined));
        // console.log(data);
    }

    return (
        <Button onClick={handleClick}>
            {content}
        </Button>
    )
}