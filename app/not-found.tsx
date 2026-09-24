import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="page-width not-found">
      <p className="eyebrow">404 / A loose end</p>
      <h1>
        This page didn’t
        <br />
        make the cut.
      </h1>
      <p>The link may have changed. There’s still plenty of work to explore.</p>
      <Link className="button button-dark" href="/">
        Back to the portfolio ↗
      </Link>
    </main>
  );
}
