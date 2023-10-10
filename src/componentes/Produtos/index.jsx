import { useState } from "react";
import Modal from "../Modal";
import "./Produtos.css";

const Produtos = () => {

    const listaProdutos = [
      {
        Imagem: "../../../assets/Desktop/Cards/Camiseta.png",
        Nome: "Camiseta Conforto",
        Descrição:
          "Multicores e tamanhos. Tecido de algodão 100% fresquinho para o verão. Modelagem unissex.",
        Preço: 70.0,
      },
      {
        Imagem: "../../../assets/Desktop/Cards/Calça.png",
        Nome: "Calça Alfaiataria",
        Descrição:
          "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
        Preço: 180.0,
      },
      {
        Imagem: "../../../assets/Desktop/Cards/Tenis.png",
        Nome: "Tênis Chunky",
        Descrição:
          "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
        Preço: 250.0,
      },
      {
        Imagem: "../../../assets/Desktop/Cards/Jaqueta.png",
        Nome: "Jaqueta Jeans",
        Descrição:
          "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
        Preço: 150.0,
      },
      {
        Imagem: "../../../assets/Desktop/Cards/Bolsa.png",
        Nome: "Bolsa coringa",
        Descrição:
          "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
        Preço: 120.0,
      },
      {
        Imagem: "../../../assets/../../../assets/Desktop/Cards/óculos.png",
        Nome: "Óculos Redondo",
        Descrição:
          "Armação metálica em grafite com lentes arredondadas. Sem erro!",
        Preço: 120.00,
      },
    ];

    const [produto, setProduto] = useState(false)
   
    return (
      <>
        <section className="produtos">
          <h2 className="produtos_titulo"> Produtos que estão bombando: </h2>
          <div className="lista_produtos">
            {listaProdutos.map((produto) => (
              <div key={produto.Nome} className="produto_item">
                <img
                  className="produto_imagem"
                  src={produto.Imagem}
                  alt={produto.Nome}
                />
                <h3 className="produto_nome">{produto.Nome}</h3>
                <p className="produto_descricao">{produto.Descrição}</p>
                <h4 className="produto_preco">R$ {produto.Preço}</h4>
                <button
                  onClick={() => {setProduto(produto)}}
                  className="produto_botao"
                >
                  Ver mais
                </button>
              </div>
            ))}
          </div>
          {produto ? (
            <Modal
              nome={produto.Nome}
              imagem={produto.Imagem}
              descricao={produto.Descrição}
              preco={produto.preco}
              fecharModal = {() => setProduto(false)}
            />
          ) : (
            ""
          )}
        </section>
      </>
    );
}

export default Produtos;