import { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {

    const [cadastro, setCadastro] = useState(false)

    return (
      <section className="newsletter">
        <div className="news_container">
          <h3 className="news_h">
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na
            primeira compra? Cadastre-se!
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault(), setCadastro(true);
            }}
            className="news_form"
          >
            <input
              required={true}
              className="news_input"
              type="e-mail"
              placeholder="Digite seu e-mail"
            ></input>
            <button className="news_button">Enviar</button>
          </form>
        </div>
        {cadastro ? (
          <dialog className="modal_news">
            <div className="modal_titulo">
              <div className="modal_titulo_direita">
                <img
                  src="../../../assets/../../../assets/check-circle.svg"
                  alt="foto produto"
                />
                <h2>E-mail cadastrado com sucesso!</h2>
              </div>
              <img
                onClick={() => setCadastro(false)}
                src="../../../assets/../../../assets/x.svg"
                alt="X"
              />
            </div>
            <div className="modal_conteudo">
              <p className="descricao_modal_news">
                Em breve você receberá novidades exclusivas da Meteora!
              </p>
            </div>
          </dialog>
        ) : (
          ""
        )}
      </section>
    );
}

export default Newsletter;