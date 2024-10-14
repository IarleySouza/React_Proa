import Style from "./Meio.module.css"
import Red from "./Red"
import fotos from "../images/loja.jpg"
function Meio() {
    return(
        <>
            <div className={Style.inicio}>
                <Red texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda unde odit vitae, nesciunt sed illo libero adipisci facere, fuga natus quo pariatur eius molestiae odio ratione, molestias ullam non tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius ea labore quae laudantium? Provident, rerum at! Sit corporis illum ex asperiores hic aperiam eius neque omnis, eveniet odit magni."/>
                <Red foto={fotos}/>
            </div>
        </>
    )
}
export default Meio