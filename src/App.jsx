import Banner from "./componentes/Banner"
import Categorias from "./componentes/Categorias"
import Facilidades from "./componentes/Facilidades";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header"
import Newsletter from "./componentes/Newsletter";
import Produtos from "./componentes/Produtos"
import { useEffect, useState } from "react";

function App() {

  const [listaProdutos, setListaProdutos] = useState([]);
  
  const [listaOriginal, setListaOriginal] = useState([])

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


  return (
    <>
      <Header
        pesquisarProduto={pesquisarProduto}/>
      <Banner />
      <Categorias filtrarProduto={filtrarProduto} />
      <Produtos listaProdutos={listaProdutos} />
      <Facilidades />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App
