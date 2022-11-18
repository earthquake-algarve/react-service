import './footer.css'

const Footer = () => {
    return (
        <div className="footer-div">
        <div className="frame-div" />
        <div className="frame-div1">
          <div className="selecione-um-pais">Selecione um pais</div>
          <div className="frame-div2">
            <img
              className="icoutline-greater-than-icon"
              alt=""
              src="img/icon-greater-than.svg"
            />
            <img
              className="twemojiflag-portugal-icon"
              alt=""
              src="/img/icon-flag-portugal.svg"
            />
            <div className="portugal-div">Portugal</div>
          </div>
        </div>
        <div className="contactar-condicoes-legais-pol-div">
          <span className="contactar-condicoes-legais-pol-span">
            <p className="contactar-p">Contactar</p>
            <p className="contactar-p">Condicoes legais</p>
            <p className="contactar-p">Politica de privacidade</p>
            <p className="contactar-p">Politica de cookies</p>
            <p className="contactar-p">Gerir preferencias</p>
            <p className="contactar-p">Registo empresas</p>
            <p className="contactar-p">Quem somos?</p>
            <p className="contactar-p">Equipa Editorial</p>
            <p className="careers-p">Careers</p>
          </span>
        </div>
        <div className="informacoes-div">Informações</div>
        <div className="siga-nos-em-div">Siga-nos em</div>
        <div className="social-icons-div">
          <img
            className="akar-iconsfacebook-fill"
            alt=""
            src="/img/icons-facebook.svg"
          />
          <img
            className="akar-iconsfacebook-fill"
            alt=""
            src="/img/icons-twitter.svg"
          />
          <img
            className="akar-iconsfacebook-fill"
            alt=""
            src="/img/icons-pinterest.svg"
          />
          <img
            className="akar-iconsfacebook-fill"
            alt=""
            src="/img/icons-instagram.svg"
          />
        </div>
      </div>
    )
} 

export default Footer;