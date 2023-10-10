import './Header.css'

const Header = () => {
    return (
      <header className="cabecalho">
        <nav>
          <div className='cabecalho_container'>
            <ul className="cabecalho_esquerda">
              <li>
                <img
                  className="logo"
                  src="../assets/Desktop/Logo desktop.png"
                />
              </li>
              <li>
                <a className="link_desktop" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="link_desktop" href="#">
                  Nossas lojas
                </a>
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
            <input type="checkbox" id="menu" className="botao_hamburguer" />
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
          <ul className="cabecalho_direita">
            <li className='cabecalho_item_input'>
              <input type="text" placeholder="Digite o produto" />
            </li>
            <li className='cabecalho_item_button'>
              <button className="cabecalho_button"> Buscar </button>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;