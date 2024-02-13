import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = (props) => {
  const [busca, setBusca] = useState("");

  return (
    <>
      <header className="cabecalho">
        <nav>
          <div className="cabecalho_container">
            <ul className="cabecalho_esquerda">
              <li>
                <img
                  onClick={() => window.location.reload()}
                  className="logo"
                  src="../assets/Desktop/Logo desktop.png"
                />
              </li>
              <li>
                <Link
                  className="link_desktop"
                  to="/"
                  onClick={() => window.location.assign()}
                >
                  Home
                </Link>
              </li>
              <li>
                <a className="link_desktop" href="#">
                  Novidades
                </a>
              </li>
              <li>
                <a className="link_desktop" href="#">
                  Promoções
                </a>
              </li>
            </ul>
            <div className="menu_esquerda">
              <input type="checkbox" id="menu" className="botao_hamburguer" />
              <label htmlFor="carrinho">
                <img className="cart_mobile " src="../assets/Cart.svg" />
              </label>
              <label htmlFor="menu" className="botao_rotulo">
                <span className="cabecalho_menu-hamburguer"></span>
              </label>

              <ul className="cabecalho_mobile">
                <li className="fechar">
                  <label htmlFor="menu">
                    <img src="../../../assets/Mobile/navbar-mobile/fechar.svg" />
                  </label>
                </li>
                <li>
                  <a className="home" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="mobile_link" href="#">
                    Nossas lojas
                  </a>
                </li>
                <li>
                  <a className="mobile_link" href="#">
                    Novidades
                  </a>
                </li>
                <li>
                  <a className="mobile_link" href="#">
                    Promoções
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="cabecalho_direita">
            <form
              className="cabecalho_form"
              onSubmit={(e) => {
                e.preventDefault(), props.pesquisarProduto(busca);
              }}
            >
              <li className="cabecalho_item_input">
                <input
                  type="text"
                  placeholder="Digite o produto"
                  onChange={(e) => setBusca(e.target.value.toLowerCase())}
                />
              </li>
              <li className="cabecalho_item_button">
                <button className="cabecalho_button"> Buscar </button>
              </li>
            </form>

            <label htmlFor="carrinho">
              <img className="cart_desktop " src="../assets/Cart.svg" />
            </label>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
