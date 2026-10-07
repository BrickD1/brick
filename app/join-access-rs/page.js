"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WHATSAPP_NUMBER = "16507413365";

const membershipBenefits = [
  "Access to presale tickets",
  "Access-RS member merchandise pack",
  "Monthly video update from Rick",
  "Access to member-only 'Ask Rick' feature",
  "Access to Rick's blog",
  "Member-only fan forum",
  "Exclusive member-only merchandise offers",
  "Seasonal discounts in the official online store",
  "Other member-only content and opportunities, when available",
];

const membershipOptions = [
  {
    name: "ACCESS-RS MEMBERSHIP 2026",
    price: "$500.00",
  },
  {
    name: "ACCESS-RS MEMBERSHIP VIP 2026",
    price: "$1,500.00",
  },
  {
    name: "ACCESS-RS MEMBERSHIP VVIP 2026",
    price: "$3,000.00",
  },
];

export default function JoinAccessRSPage() {
  const [selectedMembership, setSelectedMembership] = useState(null);

  function getWhatsAppUrl(membership) {
    const message =
      `Hello, how do I make my payment on here for ${membership.name}?\n\n` +
      `Membership: ${membership.name}\n` +
      `Price: ${membership.price}`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  }

  return (
    <>
      <Header />

      <main className="join-access-page">

        {/* ACCESS-RS INTRO */}

        <section className="join-access-main">

          {/* LEFT SIDE */}

          <div className="join-access-image-column">

            <img
              src="/images/access-rs-join.jpg"
              alt="Access-RS Exclusive Fan Access"
              className="join-access-image"
            />

          </div>


          {/* RIGHT SIDE */}

          <div className="join-access-content">

            <h1>
              ACCESS-RS
            </h1>

            <ul className="access-benefits">

              {membershipBenefits.map(
                (benefit, index) => (
                  <li key={index}>
                    {benefit}
                  </li>
                )
              )}

            </ul>

            <p className="join-existing-member">
              DON'T HAVE A MEMBERSHIP?
              <br />
              GET YOURS BELOW.
            </p>

            <Link
              href="/access-rs"
              className="join-login-button"
            >
              MEMBERS LOGIN
            </Link>

          </div>

        </section>


        {/* MEMBERSHIP PRODUCTS */}

        <section className="membership-product">

          <div className="membership-product-image">

            <img
              src="/images/access-rs-membership.jpg"
              alt="Access-RS Membership 2026"
            />

          </div>


          <div className="membership-product-info">

            {membershipOptions.map((membership) => (

              <div
                className="membership-option"
                key={membership.name}
              >

                <p className="membership-label">
                  RICK SPRINGFIELD MERCHANDISE
                </p>

                <h2>
                  {membership.name}
                </h2>

                <p className="membership-price">
                  {membership.price}
                </p>

                <button
                  type="button"
                  className="membership-cart-button"
                  onClick={() =>
                    setSelectedMembership(membership)
                  }
                >
                  BUY NOW
                </button>

                <Link
                  href="#"
                  className="membership-details-link"
                >
                  View full details →
                </Link>

              </div>

            ))}

          </div>

        </section>

      </main>


      {/* PAYMENT CONFIRMATION */}

      {selectedMembership && (

        <div className="membership-payment-overlay">

          <div className="membership-payment-box">

            <button
              type="button"
              className="membership-payment-close"
              onClick={() =>
                setSelectedMembership(null)
              }
              aria-label="Close"
            >
              ×
            </button>

            <p className="membership-payment-small">
              ACCESS-RS MEMBERSHIP
            </p>

            <h2>
              {selectedMembership.name}
            </h2>

            <p className="membership-payment-price">
              {selectedMembership.price}
            </p>

            <p className="membership-payment-text">
              You will be taken to WhatsApp to arrange
              payment for this membership.
            </p>

            <a
              href={getWhatsAppUrl(selectedMembership)}
              target="_blank"
              rel="noopener noreferrer"
              className="membership-payment-whatsapp"
            >
              CONTINUE TO WHATSAPP
            </a>

            <button
              type="button"
              className="membership-payment-cancel"
              onClick={() =>
                setSelectedMembership(null)
              }
            >
              CANCEL
            </button>

          </div>

        </div>

      )}

      <Footer />
    </>
  );
}