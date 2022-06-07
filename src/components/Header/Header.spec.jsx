import { render } from "@testing-library/react";
import { Header } from ".";


jest.mock('react-router-dom', () =>{
    return{
        useNavigate(){
            return {
                asPath:'/'
            }
        }
    }
})

test('header renders correctly', () => {
    const { debug } = render(
        <Header />
    )
    debug()
})


