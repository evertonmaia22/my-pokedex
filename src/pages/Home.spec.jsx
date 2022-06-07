import { render } from "@testing-library/react";
import { Home } from "./Home";


jest.mock('react-router-dom', () =>{
    return{
        useNavigate(){
            return {
                asPath:'/'
            }
        }
    }
})

test('Home renders correctly', () => {
    const { debug } = render(
        <Home />
    )
    debug()
})
