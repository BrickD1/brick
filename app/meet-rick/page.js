import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

export default function MeetRickPage() {
  const message =
    "Hello, how do I make my payment on here for VIP Backstage Meet & Greet?";

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Header />

      <main>

        <section className="product-page">

          <div className="product-page-grid">

            {/* PRODUCT IMAGE */}

            <div className="product-main-image">
              <img
                src="/images/vip.jpg"
                alt="VIP Backstage Meet & Greet"
              />
            </div>


            {/* PRODUCT INFORMATION */}

            <div className="product-information">

              <p className="product-label">
                VIP BACKSTAGE EXPERIENCE
              </p>

              <h1>
                VIP Backstage
                <br />
                Meet &amp; Greet
              </h1>

              <div className="product-price">
                $500.00
              </div>


              <div className="product-description">

                <p>
                  Enjoy an unforgettable VIP Backstage
                  Meet &amp; Greet experience.
                </p>

                <p>
                  Meet your favorite artist, take a
                  memorable photo and enjoy a special
                  backstage experience before the show.
                </p>

              </div>


              {/* IMPORTANT NOTICE */}

              <div className="product-notice">

                <strong>
                  PLEASE NOTE
                </strong>

                <p>
                  Concert or show tickets are not
                  included with this purchase and must
                  be purchased separately.
                </p>

              </div>


              {/* CUSTOMER INFORMATION */}

              <div className="purchase-form">

                <h2>
                  Please enter the name of the
                  Meet &amp; Greet attendee and
                  phone number.
                </h2>


                <label>
                  ATTENDEE NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                />


                <label>
                  ATTENDEE PHONE NUMBER
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                />

                <p className="input-help">
                  Format: 123-456-7890, (123) 456-7890,
                  or 1234567890
                </p>


                <label>
                  CONCERT DATE
                </label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select your concert date
                  </option>

                  <option>
                    OCT 09, 2026 — BOSSIER CITY, LA
                  </option>

                  <option>
                    OCT 10, 2026 — TERRYTOWN, LA
                  </option>

                  <option>
                    OCT 16, 2026 — LARCHWOOD, IA
                  </option>

                  <option>
                    OCT 17, 2026 — RIVERSIDE, IA
                  </option>

                  <option>
                    OCT 24, 2026 — HONOLULU, HI
                  </option>

                  <option>
                    NOV 21, 2026 — NEW BUFFALO, MI
                  </option>

                </select>


                {/* QUANTITY */}

                <label>
                  QUANTITY
                </label>

                <div className="quantity-selector">

                  <button type="button">
                    −
                  </button>

                  <span>
                    1
                  </span>

                  <button type="button">
                    +
                  </button>

                </div>


                {/* WHATSAPP */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="payment-button"
                >
                  BUY NOW
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* DETAILS */}

        <section className="product-details-section">

          <div className="product-details-inner">

            <p className="eyebrow">
              VIP EXPERIENCE
            </p>

            <h2>
              MEET &amp; GREET DETAILS
            </h2>

            <div className="details-text">

              <p>
                Take your concert experience beyond
                the front row with a special VIP
                Backstage Meet &amp; Greet.
              </p>

              <p>
                This experience gives you the
                opportunity to meet the artist,
                take a photo and create a memorable
                moment before the show.
              </p>

              <p>
                VIP experiences are limited and
                availability may vary by concert date.
              </p>

              <p>
                <strong>
                  Please note:
                </strong>{" "}
                Concert tickets are not included
                with the VIP experience and must be
                purchased separately.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}