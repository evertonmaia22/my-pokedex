import ashPikachuImg from '../../assets/ashPikachu.svg'
import { Container } from './styles'

export function ContentContact() {

    return(
        <div>
            <Container>
            <img src={ashPikachuImg} alt="AshAndPikachu" />
            <h1>Entre em Contato!</h1>
            <a href="https://www.linkedin.com/in/everton-maia-566689235/"><button>Entrar em contato</button></a>
            </Container>
        </div>

    )
    
}