import './Categorias.css'

const Categorias = () => {

    const listaCategorias = [
        {Nome:'Camisetas',
         url: '../../../assets/Desktop/Categorias/Camiseta.png' 
        },
        {Nome:'Bolsas',
         url: '../../../assets/Desktop/Categorias/Bolsa.png' 
        },
        {Nome:'Calçados',
         url: '../../../assets/Desktop/Categorias/tenis.png' 
        },
        {Nome: 'Calças',
         url: '../../../assets/Desktop/Categorias/calça.png' 
        },
        {Nome:'Casacos',
        url: '../../../assets/Desktop/Categorias/Jaqueta.png' 
        },
        {Nome: 'Óculos',
        url: '../../../assets/Desktop/Categorias/óculos.png' 
    }       
       ]


    return (
      <>
        <section>
          <h2 className="categorias_titulo">Busque por categoria:</h2>
          <div className="categorias">
            {listaCategorias.map((categoria) => (
              <div key={categoria.Nome} className="categoria_card">
                <img
                  className="categoria_imagem"
                  src={categoria.url}
                  alt={categoria.Nome}
                />
                <p className="categoria_texto">{categoria.Nome}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    );
}

export default Categorias;