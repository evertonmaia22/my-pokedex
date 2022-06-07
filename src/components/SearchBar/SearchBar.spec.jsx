import { render } from "@testing-library/react";
import { SearchBar } from ".";


test('SearchBar renders correctly', () => {
    const { debug } = render(
        <SearchBar />
    )
    debug()
})