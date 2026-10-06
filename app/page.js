import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* HERO */}

        <section className="hero">

          <div className="hero-content">

            <p className="eyebrow">
              VIP EXPERIENCE
            </p>

            <h1>
              MEET<br />
              BRAND NAME
            </h1>

            <p className="hero-text">
              Experience an unforgettable backstage
              VIP experience.
            </p>

            <Link
              href="/meet-rick"
              className="primary-button"
            >
              EXPLORE THE EXPERIENCE
            </Link>

          </div>

        </section>


        {/* VIP EXPERIENCE */}

        <section className="experience-section">

          <div className="section-heading">
            <p className="eyebrow">
              THE EXPERIENCE
            </p>

            <h2>
              VIP BACKSTAGE
              <br />
              MEET &amp; GREET
            </h2>
          </div>


          <div className="experience-grid">

            <div className="image-placeholder">
              <span>
                VIP PHOTO
              </span>
            </div>


            <div className="experience-content">

              <p className="product-label">
                VIP EXPERIENCE
              </p>

              <h3>
                Meet &amp; Greet
              </h3>

              <p className="price">
                $500.00
              </p>

              <p className="description">
                Meet your favorite artist backstage
                and enjoy a memorable VIP experience
                before the show.
              </p>

              <div className="notice">
                Concert/show ticket is sold separately.
              </div>

              <WhatsAppButton />

            </div>

          </div>

        </section>


        {/* SHOWS */}

        <section className="shows-section">

          <div className="section-heading">

            <p className="eyebrow">
              LIVE
            </p>

            <h2>
              UPCOMING SHOWS
            </h2>

          </div>


          <div className="show-preview">

            <div>
              <p className="show-date">
                OCT 09, 2026
              </p>

              <h3>
                Bossier City, LA
              </h3>

              <p>
                Horseshoe Casino
              </p>
            </div>

            <Link
              href="/shows"
              className="secondary-button"
            >
              VIEW SHOWS
            </Link>

          </div>

        </section>


        {/* MERCH */}

        <section className="merch-section">

          <div className="section-heading">

            <p className="eyebrow">
              OFFICIAL
            </p>

            <h2>
              MERCHANDISE
            </h2>

            <p>
              Explore the latest merchandise and
              official products.
            </p>

            <Link
              href="/shop"
              className="primary-button"
            >
              SHOP NOW
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}