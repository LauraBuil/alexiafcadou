import logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <Link to={'/'} className="header__content">
                <img src={logo} alt='logo' className='header__content__logo'/>
                <h1 className="header__content__title">ALEXIA F. <br/><span className="blue header__title__name">CADOU</span></h1>
            </Link>
            <nav className="header__nav">
                <Link className="header__nav__item" to={'/'}>Home</Link>
                <Link className="header__nav__item" to={'/about'}>About</Link>
            </nav>
        </header>
    );
}