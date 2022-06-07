import { render } from "@testing-library/react";
import { Contact } from "./Contact";


jest.mock('react-router-dom', () =>{
    return{
        useNavigate(){
            return {
                asPath:'/'
            }
        }
    }
})

test('Contact renders correctly', () => {
    const { debug } = render(
        <Contact />
    )
    debug()
})
