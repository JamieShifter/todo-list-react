import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


export const useQueryParameter = (query_parameter) => {
    const location = useLocation();
    return (new URLSearchParams(location.search).get(query_parameter));
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    function replaceQueryParameter({ key, value }) {
        const searchParams =  new URLSearchParams(location.search)
        searchParams.set(key, value);
        const urlRemainder = "?" + searchParams.toString()
        history.push(`${location.pathname}${value ? urlRemainder : ""}`)

    }
    return replaceQueryParameter;
};