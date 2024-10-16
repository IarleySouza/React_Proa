import Style from "./Header.module.css"
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header className={Style.inicio}>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='Quem somos'>Quem somos</Link></li>
                    <li><Link to='Instrumentos'>Instrumentos</Link></li>
                    <li><Link to='Endereco'>Endereço</Link></li>
                    <li><Link to='Contato'>Contato</Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}
export default Header