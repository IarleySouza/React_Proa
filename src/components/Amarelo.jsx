import Style from './Amarelo.module.css'
import Verde from './Verde'
import Cor from './Cor'
function Amarelo() {
    return(
        <>
            <div className={Style.amar}>
                <Verde></Verde>
                <Cor></Cor>

            </div>
        </>
    )
}
export default Amarelo