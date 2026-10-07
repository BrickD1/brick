import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-brand">
        RICK SPRINGFIELD
      </div>

      <div className="footer-socials">

       <a href="#" aria-label="Instagram">
          ◎
        </a>

        <a href="#" aria-label="YouTube">
          ▶
        </a>

        <a href="#" aria-label="TikTok">
          ♪
        </a>

        <a href="#" aria-label="X">
          X
        </a>

        <a href="#" aria-label="Spotify">
          ●
        </a>

        <a href="#" aria-label="Apple Music">
          
        </a>

        <a href="#" aria-label="Amazon Music">
          a
        </a>

        <a href="#" aria-label="Music">
          ▥
        </a>

      </div>

      <nav className="footer-links">

        <Link href="/about">
          CONTACT US
        </Link>

        <Link href="/access-rs">
          ACCESS RS - FAQ
        </Link>

        <Link href="/about">
          RETURNS
        </Link>

        <Link href="/about">
          FAN SITES
        </Link>

        <Link href="/about">
          TERMS AND CONDITIONS
        </Link>

        <Link href="/about">
          PRIVACY POLICY
        </Link>

        <Link href="/about">
          ACCESSIBILITY
        </Link>

      </nav>

      <div className="footer-copyright">
        © 2026, <span>RICK SPRINGFIELD</span> POWERED by{" "}
        <a href="#" className="footer-onelive">
          ONELIVE
        </a>
      </div>

    </footer>
  );
}