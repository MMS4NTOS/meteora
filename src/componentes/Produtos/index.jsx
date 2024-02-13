import { useEffect, useState } from "react";
import Modal from "../Modal";
import "./Produtos.css";

const Produtos = (props) => {
  const [produto, setProduto] = useState(false);

  return (
    <>
      <section className="produtos">
        <h2 className="produtos_titulo"> Produtos que estão bombando: </h2>
        <div className="lista_produtos">
          {props.listaProdutos.map((produto) => (
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
                onClick={() => {
                  setProduto(produto);
                }}
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
            preco={produto.Preço}
            fecharModal={() => setProduto(false)}
            produto={produto}
            adicionarCarrinho={(recebi) => props.adicionarCarrinho(recebi)}
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Produtos;
