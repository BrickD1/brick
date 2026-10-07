"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WHATSAPP_NUMBER = "16157413365";

const apparelProducts = [
  {
    name: "BIG HITS TANK TOP",
    price: "$49.99",
    image: "/images/shop-product-1.jpg",
  },
  {
    name: "AIN'T THAT THE WAY TANK",
    price: "$49.99",
    image: "/images/shop-product-2.jpg",
  },
  {
    name: "LOUD NOISES T-SHIRT",
    price: "$74.99",
    oldPrice: "$39.99",
    sale: true,
    image: "/images/shop-product-3.jpg",
  },
  {
    name: "LOSE MYSELF T-SHIRT",
    price: "$99.99",
    image: "/images/shop-product-4.jpg",
  },
];

const coolGearProducts = [
  {
    name: "FAN NOTEPAD",
    price: "$7.99",
    image: "/images/shop-gear-1.jpg",
  },
  {
    name: "CAN KOOZIE",
    price: "$9.99",
    image: "/images/shop-gear-2.jpg",
  },
  {
    name: "COLLECTOR KOOZIE",
    price: "$9.99",
    image: "/images/shop-gear-3.jpg",
  },
  {
    name: "GUITAR PICKS",
    price: "$9.99",
    image: "/images/shop-gear-4.jpg",
  },
];

const musicProducts = [
  {
    name: "VINYL ALBUM",
    price: "$59.99",
    image: "/images/shop-music-1.jpg",
  },
  {
    name: "CD COLLECTION",
    price: "$39.99",
    image: "/images/shop-music-2.jpg",
  },
  {
    name: "AUTOGRAPHED CD",
    price: "$50.00",
    image: "/images/shop-music-3.jpg",
  },
  {
    name: "CD / DVD COLLECTION",
    price: "$100.00",
    image: "/images/shop-music-4.jpg",
  },
];

function ProductCard({ product, onBuy }) {
  return (
    <article className="store-product-card">

      <button
        type="button"
        className="store-product-buy"
        onClick={() => onBuy(product)}
      >

        <div className="store-product-image">

          {product.sale && (
            <span className="store-sale-badge">
              Sale
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <h3>
          {product.name}
        </h3>

        <div className="store-product-price">

          {product.oldPrice && (
            <span className="store-old-price">
              {product.oldPrice}
            </span>
          )}

          <span>
            {product.price}
          </span>

        </div>

        <span className="store-buy-label">
          BUY NOW
        </span>

      </button>

    </article>
  );
}


function ProductSection({
  title,
  products,
  onBuy,
}) {
  return (
    <section className="store-product-section">

      <div className="store-section-inner">

        <h2 className="store-section-title">
          {title}
        </h2>

        <div className="store-product-grid">

          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onBuy={onBuy}
            />
          ))}

        </div>

        <div className="store-view-all-wrap">

          <button
            type="button"
            className="store-view-all"
          >
            VIEW ALL
          </button>

        </div>

      </div>

    </section>
  );
}


export default function ShopPage() {

  const [selectedProduct, setSelectedProduct] =
    useState(null);


  function getWhatsAppUrl(product) {

    const message =
      `Hello, how do I make my payment on here for ${product.name}?\n\n` +
      `Product: ${product.name}\n` +
      `Price: ${product.price}`;

    return (
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message)
    );
  }


  return (
    <>
      <Header />

      <main className="store-page">

        {/* =========================
            STORE HERO
        ========================= */}

        <section className="store-banner">

          <img
            src="/images/shop-banner.jpg"
            alt="Official merchandise"
          />

        </section>


        {/* =========================
            STORE CATEGORY NAV
        ========================= */}

        <nav className="store-category-nav">

          <div className="store-category-inner">

            <Link href="/meet-rick">
              MEET RICK
            </Link>

            <a href="#apparel">
              APPAREL
            </a>

            <a href="#music">
              MUSIC/VIDEO
            </a>

            <a href="#cool-gear">
              COOL GEAR
            </a>

            <a href="#new-merch">
              NEW MERCH
            </a>

            <a href="#books">
              BOOKS
            </a>

            <a href="#sale">
              SALE
            </a>

            <a href="#gift-card">
              GIFT CARD
            </a>

          </div>

        </nav>


        {/* =========================
            APPAREL
        ========================= */}

        <div id="apparel">

          <ProductSection
            title="APPAREL"
            products={apparelProducts}
            onBuy={setSelectedProduct}
          />

        </div>


        {/* =========================
            MEET RICK
        ========================= */}

        <section className="store-meet-section">

          <div className="store-meet-inner">

            <div className="store-meet-image">

              <img
                src="/images/vip.jpg"
                alt="VIP Backstage Meet & Greet"
              />

            </div>

            <div className="store-meet-content">

              <p className="store-small-heading">
                VIP EXPERIENCE
              </p>

              <h2>
                MEET RICK
              </h2>

              <p>
                Have you been a fan since the beginning?
                Or have you recently discovered the music?
                Either way, make your concert experience
                unforgettable with a special VIP Backstage
                Meet &amp; Greet.
              </p>

              <p className="store-meet-price">
                $500.00
              </p>

              <Link
                href="/meet-rick"
                className="store-black-button"
              >
                BUY NOW
              </Link>

            </div>

          </div>

        </section>


        {/* =========================
            COOL GEAR
        ========================= */}

        <div id="cool-gear">

          <ProductSection
            title="COOL GEAR"
            products={coolGearProducts}
            onBuy={setSelectedProduct}
          />

        </div>


        {/* =========================
            MUSIC / VIDEO
        ========================= */}

        <div id="music">

          <ProductSection
            title="MUSIC/VIDEO"
            products={musicProducts}
            onBuy={setSelectedProduct}
          />

        </div>


        {/* =========================
            BOTTOM STORE SPACE
        ========================= */}

        <section className="store-bottom-space">
        </section>

      </main>


      {/* =========================
          WHATSAPP PAYMENT POPUP
      ========================= */}

      {selectedProduct && (

        <div className="store-payment-overlay">

          <div className="store-payment-box">

            <button
              type="button"
              className="store-payment-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close"
            >
              ×
            </button>

            <p className="store-payment-small">
              RICK SPRINGFIELD STORE
            </p>

            <h2>
              {selectedProduct.name}
            </h2>

            <p className="store-payment-price">
              {selectedProduct.price}
            </p>

            <p className="store-payment-text">
              You will be taken to WhatsApp to arrange
              payment for this item.
            </p>

            <a
              href={getWhatsAppUrl(selectedProduct)}
              target="_blank"
              rel="noopener noreferrer"
              className="store-payment-whatsapp"
            >
              CONTINUE TO WHATSAPP
            </a>

            <button
              type="button"
              className="store-payment-cancel"
              onClick={() => setSelectedProduct(null)}
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