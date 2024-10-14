import Style from "./Form.module.css";
import insta from "../images/insta.png"
import face from "../images/face.png"
import whats from "../images/whats.png"
function Form() {
    return (
        <div className={Style.principal}>
            <div className={Style.form}>
                <form action="java.sp" method="post">
                    <label htmlFor="inome">Entre com seu nome:</label> <br />
                    <input type="text" name="nome" id="inome" placeholder="Digite seu nome aqui:" required /> <br /><br />

                    <label htmlFor="iemail">Entre com seu email:</label> <br />
                    <input type="email" name="email" id="iemail" placeholder="Digite seu email aqui:" required /> <br /><br />

                    <label htmlFor="message">Faça seu pedido aqui:</label> <br />
                    <textarea name="message" id="message" rows="8" cols="20" placeholder="Faça seu pedido por aqui:" required></textarea> <br /><br />

                    <input type="submit" value="Enviar" />
                </form>
            </div>
            <div className={Style.redes_sociais}>
                <h3>Acesse também nossas redes sociais:</h3>
                <div>
                    <img src={face} alt="" />
                    <img src={whats} alt="" />
                    <img src={insta} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Form;
