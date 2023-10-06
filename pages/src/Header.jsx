import GlobalNav from './GlobalNav';
import './Header.css';
import ThemeSwitcher from './ThemeSwitcher';

function Header({ setPage, theme, toggleTheme }) {
    return (
        <header className="header">
            <a href="#main" class="skip-link" tabindex="1">Skip</a>
            <img
                src="./maomao.png"
                className="header__logo"
                alt="Mimi Logo"
            />
            <h1 className="header__title">
                Welcom to Mimi World
            </h1>
            
            <ThemeSwitcher className="header__theme-swichter" theme={theme} toggleTheme={toggleTheme}/>
            <GlobalNav className="header__nav" setPage={ setPage }/>
        </header>
    );
}
export default Header;