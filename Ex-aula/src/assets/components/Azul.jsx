import Style from "./Azul.module.css"
import Branco from "./Branco"
function Azul() {
    return(
        <>
        <div className={Style.azul}>
            <Branco></Branco>
            <Branco></Branco>
            <Branco></Branco>
            <Branco></Branco>
        </div>
        </>
    )
}
export default Azul