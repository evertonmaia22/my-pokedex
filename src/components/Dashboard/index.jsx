import { Container } from './styles'
import bannerCompleteImg from '../../assets/bannerComplete.svg'
import { useNavigate } from 'react-router-dom'

export function Dashboard(){

    const navigate = useNavigate();

    return (
        <Container>
        <div>
            
            <h1>Qual Pokémon você <span className='selectedBg'>escolheria</span>?</h1>
            <p>Você pode saber o tipo do Pokémon, seus pontos fortes,fracos e habilidades.</p>
            <button onClick={() => navigate("/Pokemons")}>Veja os pokemons</button>           
            <img src= { bannerCompleteImg } alt= 'banner-pokemon' />
                
        </div>
        </Container>
    )
}