import './Header.scss'
import logo from "./Icons/logo.svg"
import hamburguer from "./Icons/icon-hamburger.svg"
import close from "./Icons/icon-close.svg"
import NavItem from './NavItem/NavItem';
import { useState } from 'react';


function Header() {

    const [isOpen, setIsOpen] = useState('burguer_bar')
    const [isClose, setIsClose] = useState('close')
    const [isVisible, setIsVisible] = useState('header_navigatation-mobile')
    
    function updateMenu() {
        if (isVisible === 'header_navigatation-mobile') {
            setIsOpen('burguer_bar inactive')
            setIsClose('close activated')
            setIsVisible('header_navigatation-mobile active')
        } else {
            setIsOpen('burguer_bar')
            setIsClose('close')
            setIsVisible('header_navigatation-mobile')
        }

    }

    function resetMenu() {
        setIsOpen('burguer_bar')
        setIsClose('close')
        setIsVisible('header_navigatation-mobile')
    }

    return (<>
        <div className="Header">
            <a className='header_logo' href="/"><img className='header_logo-image' src={logo} alt="Logo" /></a>

            <img onClick={updateMenu} className={`${isOpen}`} src={hamburguer} alt="Open Menu"/>
            <img onClick={updateMenu} className={`${isClose}`} src={close} alt="Close menu" />
            <nav className="header_navigatation">
                <ul className="header_navigation-list">
                    <NavItem 
                        number='00'
                        title='Home'
                        path='/'
                    />
                    <NavItem 
                        number='01'
                        title='Destination'
                        path='/Destination'
                    />
                    <NavItem 
                        number='02'
                        title='Crew'
                        path='/Crew'
                    />
                    <NavItem 
                        number='03'
                        title='Technology'
                        path='/Technology'
                    />
                </ul>
            </nav>
        </div>
            <nav onClick={resetMenu}  className={`header_navigatation-mobile ${isVisible}`}>
                <ul className="header_navigation-list">
                <NavItem 
                    number='00'
                    title='Home'
                    path='/'
                />
                <NavItem 
                    number='01'
                    title='Destination'
                    path='/Destination'
                />
                <NavItem 
                    number='02'
                    title='Crew'
                    path='/Crew'
                />
                <NavItem 
                    number='03'
                    title='Technology'
                    path='/Technology'
                />
                </ul>
            </nav>
    </>);
}

export default Header;