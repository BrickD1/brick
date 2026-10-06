"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAccessOpen(false);
  };

  return (
    <>
      <div className="announcement">
        THE ALL NEW ACCESS-RS IS HERE! -{" "}
        <span>READ MORE →</span>
      </div>

      <header className="site-header">

        <div className="header-inner">

          {/* LOGO */}

          <Link
            href="/"
            className="logo"
            onClick={closeMenu}
          >
            RICK SPRINGFIELD
          </Link>


          {/* DESKTOP NAVIGATION */}

          <nav className="main-nav">

            <Link href="/shows">
              SHOWS
            </Link>

            <Link href="/shop">
              STORE
            </Link>

            <div className="desktop-nav-dropdown">

              <button
                type="button"
                className="desktop-dropdown-button"
                onClick={() => setAccessOpen(!accessOpen)}
              >
                ACCESS-RS
                <span className="nav-arrow">⌄</span>
              </button>

              {accessOpen && (
                <div className="desktop-dropdown-menu">

                  <Link
                    href="/access-rs"
                    onClick={() => setAccessOpen(false)}
                  >
                    MEMBERS-ONLY
                  </Link>

                  <Link
                    href="/join-access-rs"
                    onClick={() => setAccessOpen(false)}
                  >
                    JOIN
                  </Link>

                </div>
              )}

            </div>


            <Link href="/beach-bar-music">
              BEACH BAR RUM
            </Link>

            <Link href="/news">
              NEWS
            </Link>

            <Link href="/video">
              VIDEO
            </Link>

          </nav>


          {/* HEADER ACTIONS */}

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


            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              className={`mobile-menu-button ${
                menuOpen ? "menu-open" : ""
              }`}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>

        </div>


        {/* MOBILE NAVIGATION PANEL */}

        <div
          className={`mobile-navigation ${
            menuOpen ? "mobile-navigation-open" : ""
          }`}
        >

          <nav className="mobile-nav">

            <Link
              href="/shows"
              onClick={closeMenu}
            >
              SHOWS
            </Link>


            <Link
              href="/shop"
              onClick={closeMenu}
            >
              STORE
            </Link>


            {/* ACCESS-RS */}

            <div className="mobile-access">

              <button
                type="button"
                className="mobile-access-button"
                onClick={() =>
                  setAccessOpen(!accessOpen)
                }
              >
                <span>
                  ACCESS-RS
                </span>

                <span
                  className={
                    accessOpen
                      ? "mobile-access-arrow open"
                      : "mobile-access-arrow"
                  }
                >
                  +
                </span>

              </button>


              <div
                className={
                  accessOpen
                    ? "mobile-access-links open"
                    : "mobile-access-links"
                }
              >

                <Link
                  href="/access-rs"
                  onClick={closeMenu}
                >
                  MEMBERS-ONLY
                </Link>

                <Link
                  href="/join-access-rs"
                  onClick={closeMenu}
                >
                  JOIN
                </Link>

              </div>

            </div>


            <Link
              href="/beach-bar-music"
              onClick={closeMenu}
            >
              BEACH BAR RUM
            </Link>


            <Link
              href="/news"
              onClick={closeMenu}
            >
              NEWS
            </Link>


            <Link
              href="/video"
              onClick={closeMenu}
            >
              VIDEO
            </Link>

          </nav>

        </div>

      </header>
    </>
  );
}