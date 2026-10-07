"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

const relatedProducts = [
  {
    name: "ACCESS-RS MEMBERSHIP 2026",
    price: "$59.95",
    image: "/images/access-rs-membership.jpg",
  },
  {
    name: "2024 AUTOMATIC TOUR SOFT RICK SPRINGFIELD T-SHIRT",
    price: "$39.99",
    image: "/images/shop-product-1.jpg",
  },
  {
    name: "WORKING CLASS DOG RINGER T-SHIRT",
    price: "$19.99",
    oldPrice: "$39.99",
    sale: true,
    image: "/images/shop-product-2.jpg",
  },
  {
    name: "2024 TOUR VINTAGE SOFT RICK SPRINGFIELD T-SHIRT",
    price: "$39.99",
    image: "/images/shop-product-3.jpg",
  },
];

const concertDates = [
  "OCT 09, 2026 — BOSSIER CITY, LA",
  "OCT 10, 2026 — TERRYTOWN, LA",
  "OCT 16, 2026 — LARCHWOOD, IA",
  "OCT 17, 2026 — RIVERSIDE, IA",
  "OCT 23, 2026 — HONOLULU, HI",
  "OCT 24, 2026 — HONOLULU, HI",
  "OCT 25, 2026 — HONOLULU, HI",
  "NOV 21, 2026 — NEW BUFFALO, MI",
  "DEC 03, 2026 — BENSALEM, PA",
  "DEC 04, 2026 — MASHANTUCKET, CT",
  "DEC 05, 2026 — HUNTINGTON, NY",
  "DEC 11, 2026 — DETROIT, MI",
];

export default function MeetRickPage() {
  const [quantity, setQuantity] = useState(1);
  const [attendeeName, setAttendeeName] = useState("");
  const [attendeePhone, setAttendeePhone] = useState("");
  const [concertDate, setConcertDate] = useState("");

  const WHATSAPP_NUMBER = "16507413365";

const message =
  `Hello, how do I make my payment on here for VIP Backstage Meet & Greet?\n\n` +
  `Attendee Name: ${attendeeName || "Not provided"}\n` +
  `Phone Number: ${attendeePhone || "Not provided"}\n` +
  `Concert Date: ${concertDate || "Not selected"}\n` +
  `Quantity: ${quantity}`;

const whatsappUrl =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Header />

      {/* STORE CATEGORY BAR */}

      <nav className="meet-rick-store-nav">
        <Link href="/meet-rick" className="active">
          MEET RICK
        </Link>

        <Link href="/shop">
          APPAREL
        </Link>

        <Link href="/shop">
          MUSIC/VIDEO
        </Link>

        <Link href="/shop">
          COOL GEAR
        </Link>

        <Link href="/shop">
          NEW MERCH
        </Link>

        <Link href="/shop">
          BOOKS
        </Link>

        <Link href="/shop">
          SALE
        </Link>

        <Link href="/shop">
          GIFT CARD
        </Link>
      </nav>


      <main className="meet-rick-page">

        {/* PRODUCT */}

        <section className="meet-rick-product">

          <div className="meet-rick-product-grid">

            {/* LEFT IMAGE */}

            <div className="meet-rick-image-column">

              <div className="meet-rick-main-image">
                <img
                  src="/images/vip.jpg"
                  alt="VIP Backstage Meet & Greet"
                />
              </div>

            </div>


            {/* RIGHT INFORMATION */}

            <div className="meet-rick-info">

              <h1>
                VIP BACKSTAGE
                <br />
                MEET-N-GREET
                <br />
                WITH RICK
                <br />
                SPRINGFIELD
              </h1>


              <div className="meet-rick-price">
                $500.00
              </div>


              <div className="shipping-note">
                Shipping calculated at checkout.
              </div>


              <p className="installment-note">
                4 interest-free installments may be
                available at checkout.
              </p>


              <div className="meet-rick-instruction">
                PLEASE ENTER THE NAME OF THE
                <br />
                MEET &amp; GREET ATTENDEE
                <br />
                AND PHONE NUMBER
              </div>


              {/* NAME */}

              <div className="meet-rick-field">

                <label>
                  Attendee Name
                </label>

                <input
                  type="text"
                  value={attendeeName}
                  onChange={(event) =>
                    setAttendeeName(event.target.value)
                  }
                  placeholder=""
                />

              </div>


              {/* PHONE */}

              <div className="meet-rick-field">

                <label>
                  Attendee Phone Number
                </label>

                <input
                  type="tel"
                  value={attendeePhone}
                  onChange={(event) =>
                    setAttendeePhone(event.target.value)
                  }
                  placeholder=""
                />

                <p>
                  Format: 123-456-7890, (123) 456-7890, or
                  1234567890
                </p>

              </div>


              {/* CONCERT DATE */}

              <div className="meet-rick-field">

                <label>
                  Concert Date
                </label>

                <select
                  value={concertDate}
                  onChange={(event) =>
                    setConcertDate(event.target.value)
                  }
                >
                  <option value="">
                    Select your concert date
                  </option>

                  {concertDates.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>

              </div>


              {/* QUANTITY */}

              <div className="meet-rick-field">

                <label>
                  Quantity
                </label>

                <div className="meet-rick-quantity">

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) =>
                        Math.max(1, current - 1)
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) =>
                        current + 1
                      )
                    }
                  >
                    +
                  </button>

                </div>

              </div>


              {/* PAYMENT */}

              <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="meet-rick-buy-button"
>
  BUY NOW
</a>


              {/* NOTICE */}

              <div className="meet-rick-small-notice">

                Please review the Meet &amp; Greet details
                carefully before finalizing your purchase.

                <br />
                <br />

                <strong>
                  Concert tickets are NOT included.
                </strong>

              </div>


              <div className="meet-rick-share">
                ↗ &nbsp; SHARE
              </div>

            </div>

          </div>

        </section>


        {/* RELATED MERCHANDISE */}

        <section className="meet-rick-related">

          <h2>
            YOU MAY ALSO LIKE
          </h2>

          <div className="meet-rick-related-grid">

            {relatedProducts.map((product) => (

              <div
                className="meet-rick-related-card"
                key={product.name}
              >

                <div className="related-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  {product.sale && (
                    <span className="related-sale">
                      Sale
                    </span>
                  )}

                </div>

                <h3>
                  {product.name}
                </h3>

                <div className="related-price">

                  {product.oldPrice && (
                    <span className="old-price">
                      {product.oldPrice}
                    </span>
                  )}

                  <span>
                    {product.price}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ACCESS-RS PROMOTION */}

        <section className="meet-rick-access">

          <div className="meet-rick-access-overlay">

            <div className="meet-rick-access-content">

              <h2>
                JOIN ACCESS-RS
              </h2>

              <p className="access-login">
                Already a Member?{" "}
                <Link href="/access-rs">
                  Log in
                </Link>
              </p>

              <p className="access-intro">
                Join ACCESS-RS for access to ticket
                pre-sale codes, exclusive content,
                and more.
              </p>

              <h3>
                PREMIUM MEMBERSHIP
              </h3>

              <ul>

                <li>
                  First access to presale tickets
                  and ticket fan packages
                </li>

                <li>
                  Exclusive ACCESS-RS member
                  merchandise pack
                </li>

                <li>
                  Monthly video update from Rick
                </li>

                <li>
                  Access to member-only
                  "Ask Rick" feature
                </li>

                <li>
                  Access to Rick's blog
                </li>

                <li>
                  Access to the member-only
                  fan message board
                </li>

                <li>
                  Exclusive member-only
                  merchandise offers
                </li>

                <li>
                  Seasonal discounts in the
                  official online store
                </li>

                <li>
                  Other member-only content and
                  opportunities, when available
                </li>

              </ul>

              <Link
                href="/join-access-rs"
                className="meet-rick-access-button"
              >
                BUY NOW
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}