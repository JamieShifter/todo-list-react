import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Input from "../../Input";
import searchQueryParamName from "../../searchQueryParamName";
import { Wrapper } from "./styled";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = (event) => {
        const searchParams = new URLSearchParams(location.search)

        if (event.target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, event.target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    return (
        <>
            <Wrapper>
                <Input
                    placeholder="Filtruj zadania"
                    value={query || ""}
                    onChange={onInputChange}
                />
            </Wrapper>
        </>
    )
}