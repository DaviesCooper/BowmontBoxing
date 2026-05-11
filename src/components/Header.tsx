import { NavLink } from 'react-router-dom';
import './Header.css';

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link is-active' : 'nav-link';

export function Header() {
  const links = [
    { to: '/about', label: 'About' },
    { to: '/coaches', label: 'Coaches' },
    { to: '/classes', label: 'Classes' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <NavLink className="site-header__logo-link" to="/" end>
          <img
            className="site-header__logo"
            src="/logo/Logo.png"
            alt="Bowmont Boxing Club. Est. 1983."
            width={200}
            height={72}
            decoding="async"
            fetchPriority="high"
          />
        </NavLink>
        <nav className="site-header__nav" aria-label="Primary">
          <ul className="nav-links">
            {links.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
