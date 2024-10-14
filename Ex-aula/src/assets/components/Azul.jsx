import Style from "./Azul.module.css"
import Branco from "./Branco"
import guitarrinha from "../images/guitarrinha.jpg"
function Azul() {
    return(
        <>
        <div className={Style.azul}>
            <Branco foto={guitarrinha} texto="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE"></Branco>
            <Branco foto={guitarrinha} texto="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE"></Branco>
            <Branco foto={guitarrinha} texto="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE"></Branco>
            <Branco foto={guitarrinha} texto="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE"></Branco>
            
        </div>
        </>
    )
}
export default Azul