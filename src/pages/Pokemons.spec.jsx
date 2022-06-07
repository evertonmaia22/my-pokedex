import { render } from "@testing-library/react";
import { Pokemons } from "./Pokemons";


jest.mock('react-router-dom', () =>{
    return{
        useNavigate(){
            return {
                asPath:'/'
            }
        }
    }
})

test('Pokemons renders correctly', () => {
    const { debug } = render(
        <Pokemons />
    )
    debug()
})