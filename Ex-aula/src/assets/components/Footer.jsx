import Style from "./Footer.module.css"
import insta from "../images/insta.png"
import whats from "../images/whats.png"
import face from "../images/face.png"
function Footer() {
    return(
        <>
            <div className={Style.baixo}>
                <h4>Nossa Loja - Instrumentos Musicais</h4>
                <p>Rua Tito, 54 - lapa</p>
                <p>São Paulo - Brasil</p>
                <div className={Style.redes}>
                    <img src={insta} alt="" />
                    <img src={face} alt="" />
                    <img src={whats} alt="" />
                </div>
            </div>
        </>
    )
}
export default Footer