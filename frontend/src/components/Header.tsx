import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar">
      <nav className="nav0">
        <ul>
          <li className="nav1">
            <Link href="/">Accueil</Link>
          </li>
          <li className="nav1">
            <Link href="/foots">Formules et Tarifs</Link>
          </li>
          <li className="nav2">
            <Link href="/presentation">A propos</Link>
          </li>
          <li className="nav3">
            <Link href="/programme">Programme</Link>
          </li>
          <li className="nav3">
            <Link href="/blog">Notre Blog</Link>
          </li>
          <li className="nav3">
            <Link href="/contact">Contacte</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
