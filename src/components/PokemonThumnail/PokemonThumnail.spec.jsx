import { render } from "@testing-library/react";
import  PokemonThumnail  from ".";


test('ContentContact renders correctly', () => {
    const { debug } = render(
        <PokemonThumnail />
    )
    debug()
})
