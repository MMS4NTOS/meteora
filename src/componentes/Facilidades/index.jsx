import './Facilidades.css'

const Facilidades = () => {
    return (
      <section className="facilidades">
        <h2 className="facilidades_h">Conheça todas nossas facilidades</h2>
        <div className="facilidades_itens">
          <div className="facilidade_item">
            <img
              src="../../../assets/Desktop/Ícones/pix.png"
              alt="Símbolo do pix"
            />
            <div className="item_descricao">
              <h3 className="descricao_titulo">PAGUE PELO PIX</h3>
              <p className="descricao_p">Ganhe 5% OFF em pagamentos via PIX</p>
            </div>
          </div>
          <div className="facilidade_item">
            <img
              src="../../../assets/Desktop/Ícones/troca.png"
              alt="Imagem de duas setas se encontrando"
            />
            <div className="item_descricao">
              <h3 className="descricao_titulo">TROCA GRÁTIS</h3>
              <p className="descricao_p">Fique livre para trocar em até 30 dias.</p>
            </div>
          </div>
          <div className="facilidade_item">
            <img
              src="../../../assets/Desktop/Ícones/sustentabilidade.png"
              alt="Imagem de uma flor"
            />
            <div className="item_descricao">
              <h3 className="descricao_titulo">SUSTENTABILIDADE</h3>
              <p className="descricao_p">Moda responsável que respeita o meio ambiente</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Facilidades;