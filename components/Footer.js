import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-grid">

        <div>
          <div className="footer-logo">
            RICK SPRINGFIELD
          </div>

          <p>
            Official experience, tickets and merchandise.
          </p>
        </div>

        <div>
          <h3>EXPLORE</h3>

          <Link href="/shows">Shows</Link>
          <Link href="/shop">Merch</Link>
          <Link href="/meet-rick">Meet Rick</Link>
          <Link href="/about">About</Link>
        </div>

        <div>
          <h3>HELP</h3>

          <Link href="/about">Contact</Link>
          <Link href="/about">FAQ</Link>
          <Link href="/meet-rick">VIP Information</Link>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 RICK SPRINGFIELD. All rights reserved.
      </div>

    </footer>
  );
}