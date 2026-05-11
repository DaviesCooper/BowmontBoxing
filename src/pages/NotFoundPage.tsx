import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="section" aria-labelledby="notfound-heading">
      <h1 id="notfound-heading" className="section__heading">
        Wrong corner
      </h1>
      <p className="section__lead">
        That page is not in this gym. Head back to the home page or use the menu above.
      </p>
      <p>
        <Link className="button button--primary" to="/">
          Home
        </Link>
      </p>
    </section>
  );
}
