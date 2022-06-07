import { useNavigate } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { Container } from './styles'


export function Header(){

    const navigate = useNavigate();
    
    return(
        <Container>
            
        <div>
            <img onClick={() => navigate ("/")} src={logoImg} alt="logoPokemon" />
            <div>
                <nav>
                    <a href='/Home' onClick={() => navigate("/Home")}>Home</a>
                </nav>
                <nav>
                     <a href='/Pokemons' onClick={() => navigate("/Pokemons")}> Pokemons</a>
                </nav>
                <nav>
                    <a href='/Contact' onClick={() => navigate("/Contact")}>Contato</a>
                </nav>
            </div>    
                
        </div>
        </Container>
    )
}