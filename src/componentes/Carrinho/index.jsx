import { useEffect, useState } from 'react';
import './Carrinho.css'

const Carrinho = ({ minhasCompras, alterarQuantidade, removerDoCarrinho}) => {

const [valorTotal, setValorTotal] = useState(0)
  
useEffect(() => {
      const valor = minhasCompras
        .map((produto) => produto.Preço * produto.quantidade)
        .reduce((a, b) => a + b, 0);
      setValorTotal(valor);
    
  })
  
  return (
    <>
      <input type="checkbox" id="carrinho" className="carrinho_aside" />
      <aside>
        <div className="carrinho_titulo">
          <h3> Carrinho de Compras </h3>

          <label htmlFor="carrinho">
            <img src="../../../assets/../../../assets/xWhite.svg" alt="X" />
          </label>
        </div>
        {minhasCompras.length > 0 ? (
          <ul className="lista_carrinho">
            {minhasCompras.map((produto) => (
              <li key={produto.Nome}>
                <div className="item_carrinho">
                  <div>
                    <img
                      className="cart_image"
                      alt={produto.Nome}
                      src={produto.Imagem}
                    />
                  </div>
                  <div className="item_carrinho_descricao">
                    <p className="item_carrinho_nome">{produto.Nome}</p>
                    <div className="quantidade_carrinho">
                      <div className="item_carrinho_quantidade">
                        <img
                          onClick={() => {
                            if (produto.quantidade > 1)
                              alterarQuantidade(produto, "-");
                            else removerDoCarrinho(produto.Nome);
                          
                            calcularValor();}  
                         }
                          className="botao_carrinho"
                          src="../../../assets/../../../assets/remove.svg"
                          alt="Remover um do carrinho"
                        />
                        <p className="quantidade_p"> {produto.quantidade} </p>
                        <img
                          className="botao_carrinho"
                          src="../../../assets/../../../assets/add.svg"
                          alt="Adicionar um ao carrinho"
                          onClick={() => {
                            alterarQuantidade(produto, "+");
                            calcularValor();
                          }}
                        />
                      </div>
                      <img
                        src="../../../assets/../../../assets/delete.svg"
                        alt="Remover item do carrinho"
                        onClick={() => {
                          removerDoCarrinho(produto.Nome);
                        }}
                      />
                    </div>

                    <p className="item_carrinho_preco">
                      R$ {produto.Preço * produto.quantidade}
                    </p>
                  </div>
                </div>
              </li>
            ))}
            
            <p className="item_carrinho_preco preco_total">
              
              TOTAL R$ {valorTotal}
            </p>
          </ul>
        ) : (
          <p className="item_carrinho_nome lista_carrinho">
            {" "}
            Por enquanto, não tem nada por aqui. Que tal dar uma olhada em
            nossos produtos?
          </p>
        )}
      </aside>
    </>
  );
};

export default Carrinho;