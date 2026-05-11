import { Outlet } from 'react-router-dom';
import '../styles/sections.css';
import './Layout.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div id="top">
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <div className="app-wrap">
        <main id="main-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
