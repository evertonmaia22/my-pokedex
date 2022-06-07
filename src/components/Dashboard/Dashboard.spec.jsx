import { render } from "@testing-library/react";
import { Dashboard } from ".";


jest.mock('react-router-dom', () =>{
    return{
        useNavigate(){
            return {
                asPath:'/'
            }
        }
    }
})

test('Dashboard renders correctly', () => {
    const { debug } = render(
        <Dashboard />
    )
    debug()
})