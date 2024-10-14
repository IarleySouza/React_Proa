import Style from "./Branco.module.css"
function Branco({ foto, texto }) {
    return (
        <>
            <div className={Style.branco}>
                <div>
                    <img src={foto} alt="foto" />
                </div>
                <p> {texto} </p>
                <p className={Style.vermelho} >R$ 989,50</p>
            </div>
        </>
    )
}
export default Branco