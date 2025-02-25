import logo from '../../assets/img/logo.png';
import {Link, useLocation} from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.includes(path)) return true;
        return false;
    };

    return (
        <header className='header'>
            <Link to={'/'} className="header__content">
                <img src={logo} alt='logo' className='header__content__logo'/>
                <h1 className="header__content__title">ALEXIA F. <br/><span className="blue header__content__title__name">CADOU</span></h1>
            </Link>
            <nav className="header__nav">
                <Link className={`header__nav__link ${isActive('/') ? 'active' : ''}`} to={'/'}>Home</Link>
                <Link className={`header__nav__link ${isActive('/about') ? 'active' : ''}`} to={'/about'}>About</Link>
            </nav>
        </header>
    );
}