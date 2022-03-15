import { useEffect, useState } from "react"
import { getGits } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        datos: [],
        loading: true
    });
    useEffect(() => {
        getGits(category)
            .then(img => {
                setTimeout(() => {
                    setState({
                        datos: img,
                        loading: false
                    });
                }, 1500);
            });
    }, [category]);

    return state;
}
