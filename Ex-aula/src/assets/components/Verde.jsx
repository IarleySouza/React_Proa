import Style from './Verde.module.css'
function Verde() {
    return (
        <>
            <div className={Style.ver}>
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2467873396454!2d-46.65739612512876!3d-23.667130965485608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ab45fbf8d3b%3A0xb2dfcda346daa181!2sBazar%20Tucano!5e0!3m2!1spt-BR!2sbr!4v1723818211160!5m2!1spt-BR!2sbr"
                    width="486" height="250" style={ {border: 0} } allowfullscreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Verde