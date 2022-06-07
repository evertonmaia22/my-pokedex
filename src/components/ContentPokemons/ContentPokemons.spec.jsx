import { render } from "@testing-library/react";
import { ContentPokemons } from ".";
import { SearchBar } from "../../components/SearchBar";


test('ContentPokemons renders correctly', () => {
    const { debug } = render(    
        <ContentPokemons>
            <SearchBar />
        </ContentPokemons>    
    )
    debug()
})






