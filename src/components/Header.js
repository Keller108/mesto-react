import logoPath from '../images/logo_clr_white.svg';

function Header() {
    return (
        <header className="header">
            <a href="#" target="_self">
                <img src={logoPath} alt="Логотип Mesto" className="logo" />
            </a>
        </header>
    )
}

export default Header;