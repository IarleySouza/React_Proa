import Style from "./Red.module.css"
function Red({ foto, texto }) {
    return (
        <div className={Style.red}>
            {foto ? <img src={foto} alt="imagem" /> : <> <h2>Nossa loja - Instrumentos Musicais</h2> <p className={Style.tex}>{texto}</p></> }
        </div>
    )
}
export default Red