import Style from "./Header.module.css"

function Header() {
    return(
        <header className={Style.inicio}>
            <nav>
                <a href="">Home</a>
                <a href="">Quem somos</a>
                <a href="">Instrumentos</a>
                <a href="">Endereço</a>
                <a href="">Contato</a>
            </nav>
        </header>
    )
}
export default Header