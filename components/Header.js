import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* ANNOUNCEMENT BAR */}

      <div className="announcement">
        THE ALL NEW ACCESS-RS IS HERE! -{" "}
        <span>READ MORE →</span>
      </div>


      {/* MAIN HEADER */}

      <header className="site-header">

        <div className="header-inner">


          {/* LOGO */}

          <Link
            href="/"
            className="logo"
          >
            RICK SPRINGFIELD
          </Link>


          {/* DESKTOP NAVIGATION */}

          <nav className="main-nav">

            <Link
              href="/shows"
              className="active-nav"
            >
              SHOWS
            </Link>

            <Link href="/shop">
              STORE
            </Link>

            <Link href="/access-rs">
               ACCESS-RS
            </Link>

            <Link href="/beach-bar-music">
               BEACH BAR RUM
            </Link>

            <Link href="/about">
              NEWS
            </Link>

            <Link href="/about">
              VIDEO
            </Link>

          </nav>


          {/* RIGHT SIDE ICONS */}

          <div className="header-actions">

            <button
              type="button"
              className="icon-button"
              aria-label="Search"
            >
              <span className="search-icon"></span>
            </button>


            <button
              type="button"
              className="icon-button"
              aria-label="Account"
            >
              <span className="account-icon"></span>
            </button>


            <button
              type="button"
              className="icon-button"
              aria-label="Cart"
            >
              <span className="cart-icon"></span>
            </button>


            {/* MOBILE MENU */}

            <button
              type="button"
              className="mobile-menu-button"
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>

        </div>

      </header>
    </>
  );
}