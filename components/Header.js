"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        THE ALL NEW ACCESS-RS IS HERE! - <span>READ MORE →</span>
      </div>

      <header className="rs-header">

        <div className="rs-header-bar">

          <Link
            href="/"
            className="rs-logo"
            onClick={() => setOpen(false)}
          >
            RICK SPRINGFIELD
          </Link>


          {/* DESKTOP NAV */}

          <nav className="rs-desktop-nav">

            <Link href="/shows">SHOWS</Link>

            <Link href="/shop">STORE</Link>

            <div className="rs-desktop-access">

              <button
                type="button"
                onClick={() => setAccessOpen(!accessOpen)}
              >
                ACCESS-RS
              </button>

              {accessOpen && (
                <div className="rs-desktop-access-menu">
                  <Link href="/access-rs">MEMBERS-ONLY</Link>
                  <Link href="/join-access-rs">JOIN</Link>
                </div>
              )}

            </div>

            <Link href="/beach-bar-music">
              BEACH BAR RUM
            </Link>

            <Link href="/news">NEWS</Link>

            <Link href="/video">VIDEO</Link>

          </nav>


          {/* DESKTOP ICONS */}

          <div className="rs-desktop-icons">

            <span>⌕</span>
            <span>♙</span>
            <span>♧</span>

          </div>


          {/* MOBILE BUTTON */}

          <button
            type="button"
            className="rs-menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>


        {/* MOBILE MENU */}

        <div className={open ? "rs-mobile-menu show" : "rs-mobile-menu"}>

          <Link
            href="/shows"
            onClick={() => setOpen(false)}
          >
            SHOWS
          </Link>

          <Link
            href="/shop"
            onClick={() => setOpen(false)}
          >
            STORE
          </Link>


          <button
            type="button"
            className="rs-mobile-access"
            onClick={() => setAccessOpen(!accessOpen)}
          >
            <span>ACCESS-RS</span>
            <strong>
              {accessOpen ? "−" : "+"}
            </strong>
          </button>


          {accessOpen && (
            <div className="rs-mobile-submenu">

              <Link
                href="/access-rs"
                onClick={() => setOpen(false)}
              >
                MEMBERS-ONLY
              </Link>

              <Link
                href="/join-access-rs"
                onClick={() => setOpen(false)}
              >
                JOIN
              </Link>

            </div>
          )}


          <Link
            href="/beach-bar-music"
            onClick={() => setOpen(false)}
          >
            BEACH BAR RUM
          </Link>

          <Link
            href="/news"
            onClick={() => setOpen(false)}
          >
            NEWS
          </Link>

          <Link
            href="/video"
            onClick={() => setOpen(false)}
          >
            VIDEO
          </Link>

        </div>

      </header>
    </>
  );
}