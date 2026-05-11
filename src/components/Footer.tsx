export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        © {year} Bowmont Boxing Club · Hand wraps required · Respect the bell
      </p>
    </footer>
  );
}
