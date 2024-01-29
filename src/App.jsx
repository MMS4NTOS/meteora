import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Categorias from "./componentes/Categorias";
import Facilidades from "./componentes/Facilidades";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Newsletter from "./componentes/Newsletter";
import Produtos from "./componentes/Produtos";
import Carrinho from "./componentes/Carrinho";

function App() {

  const [listaProdutos, setListaProdutos] = useState([]);
  
  const [listaOriginal, setListaOriginal] = useState([]);

  
  const [meuCarrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem("Carrinho")) || []);

  useEffect(() => {
    const listarProdutos = async () => {
      const endPointAPI = `https://mms4ntos.github.io/meteoraProdutos.json`;
      try {
        const resp = await fetch(
          endPointAPI
        );
        const data = await resp.json();
        setListaOriginal(data)
        setListaProdutos(data)
      } catch (err) {
        console.log(err);
      }
    };
    listarProdutos();
  }, []); 


   function filtrarProduto(categoria) {
  
    
    const arr =  listaOriginal.filter(produto =>  produto.Categoria == categoria)
    setListaProdutos(arr)
    
  }

   function pesquisarProduto(texto) {

      const arr = listaOriginal.filter(produto =>
        JSON.stringify(produto).toLowerCase().includes(texto)
        )
      setListaProdutos(arr);
   }

   const addToCart = (produto) => {
    setCarrinho(prev => [...prev, {...produto, quantidade: 1}])
    localStorage.setItem(
      "Carrinho",
      JSON.stringify([...meuCarrinho, { ...produto, quantidade: 1 }])
    );
   }

   const alterarQuantidade = (produtoRecebido, operacao) => {
      const arr = meuCarrinho.map((produtoAtual) => {
        if (produtoRecebido.Nome == produtoAtual.Nome && operacao === "+") {
          produtoAtual.quantidade++;
        } 
        else if (produtoRecebido.Nome == produtoAtual.Nome && operacao === "-") {
          produtoAtual.quantidade--;  
        }
        return produtoAtual;
      });
      localStorage.setItem("Carrinho", JSON.stringify(arr));
      setCarrinho(arr)
    }


    const removerDoCarrinho = (produtoRecebido) => {

        const arr = meuCarrinho.filter(
          produtoAtual => produtoAtual.Nome !== produtoRecebido
        );
        localStorage.setItem("Carrinho", JSON.stringify(arr));
        setCarrinho(arr)
    }

  return (
    <>
      <BrowserRouter>
        <Carrinho  minhasCompras={meuCarrinho} alterarQuantidade={(produto, operacao) => alterarQuantidade(produto, operacao)} removerDoCarrinho={(produto) => removerDoCarrinho(produto)}/>
        <Header pesquisarProduto={pesquisarProduto} />
        <Banner />

        <Routes>
          <Route
            path="/"
            element={<Categorias filtrarProduto={filtrarProduto} />}
          >
            <Route index element={<Produtos listaProdutos={listaProdutos} adicionarCarrinho={(produto) => addToCart(produto)}            
            />}                
           />
          </Route>
          <Route path="/carrinho" element={<div>Meu carrinho</div>} />
          <Route path="*" element={<div> 404</div>} />
        </Routes>

        <Facilidades />
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
