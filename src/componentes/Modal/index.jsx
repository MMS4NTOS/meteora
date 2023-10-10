
const Modal = (props) => {
  return (
    <dialog className="modal">
      <div className="modal_titulo">
        <div className="modal_titulo_direita">
          <img
            src="../../../assets/../../../assets/check-circle.svg"
            alt="foto produto"
          />
          <h2>Confira detalhes sobre o produto</h2>
        </div>
        <img
          onClick={props.fecharModal}
          src="../../../assets/../../../assets/x.svg"
          alt="X"
        />
      </div>
      <div className="modal_conteudo">
        <img src={props.imagem} alt="foto produto" />
        <div className="modal_conteudo_descricao">
          <h3 className="produto_nome">{props.nome}</h3>
          <p className="descricao_modal">{props.descricao}</p>

          <h4 className="produto_preco">{props.preco}</h4>
          <h5>Vendido e entregue por</h5>
          <fieldset className="descricao_radio radio_cores">
            <legend>Cores</legend>
            <div>
              <input
                type="radio"
                id="Azul-Claro"
                name="cor"
                value="Azul Claro"
              />
              <label htmlFor="Azul-Claro">Azul Claro</label>
            </div>

            <div>
              <input type="radio" id="Offwhite" name="cor" value="Offwhite" />
              <label htmlFor="Offwhite">Offwhite</label>
            </div>

            <div>
              <input type="radio" id="Preto" name="cor" value="Preto" />
              <label htmlFor="Preto">Preto</label>
            </div>
          </fieldset>
          <fieldset className="descricao_radio">
            <legend>Tamanho</legend>

            <div>
              <input type="radio" id="PP" name="tamanho" value="PP" />
              <label htmlFor="PP">PP</label>
            </div>

            <div>
              <input type="radio" id="P" name="tamanho" value="P" />
              <label htmlFor="P">P</label>
            </div>

            <div>
              <input type="radio" id="M" name="tamanho" value="M" />
              <label htmlFor="M">M</label>
            </div>

            <div>
              <input type="radio" id="G" name="tamanho" value="G" />
              <label htmlFor="G">G</label>
            </div>

            <div>
              <input type="radio" id="GG" name="tamanho" value="GG" />
              <label htmlFor="GG">GG</label>
            </div>
          </fieldset>
          <button className="produto_botao">Adicionar à sacola</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
