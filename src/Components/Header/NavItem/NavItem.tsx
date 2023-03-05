import { Link } from 'react-router-dom';
import { UsePath } from '../../../Hooks/UsePath';
import './NavItem.scss'

interface INavItemProps {
    number: string
    title: string
    path?: string
}

function NavItem({number, title, path}: INavItemProps) {

    const { IsCurrentPage } = UsePath()


    return (
        <li className={`navigation_item ${IsCurrentPage(`${path}`) ? 'active' : ''}`}>
            <Link to={`${path}`} className={`navigatipon_item-anchor`}>
                <span className="navigation_item-number">{number}</span>{title}
            </Link>
        </li>
    );
}

export default NavItem;