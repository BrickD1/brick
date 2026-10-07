import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

export default function JoinAccessRSPage() {
  return (
    <>
      <Header />

      <main className="join-access-page">

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


        {/* MEMBERSHIP PRODUCT */}

        <section className="membership-product">

          <div className="membership-product-image">

            <img
              src="/images/access-rs-membership.jpg"
              alt="Access-RS Membership 2026"
            />

          </div>


          <div className="membership-product-info">

            <p className="membership-label">
              RICK SPRINGFIELD MERCHANDISE
            </p>

            <h2>
              ACCESS-RS
              <br />
              MEMBERSHIP
              <br />
              2026
            </h2>

            <p className="membership-price">
              $500.00
            </p>

            <button
              type="button"
              className="membership-cart-button"
            >
              BUY NOW
            </button>

            <Link
              href="#"
              className="membership-details-link"
            >
              View full details →
            </Link>


            <p className="membership-label">
              RICK SPRINGFIELD MERCHANDISE
            </p>

            <h2>
              ACCESS-RS
              <br />
              MEMBERSHIP VIP
              <br />
              2026
            </h2>

            <p className="membership-price">
              $1,500.00
            </p>

            <button
              type="button"
              className="membership-cart-button"
            >
              BUY NOW
            </button>

            <Link
              href="#"
              className="membership-details-link"
            >
              View full details →
            </Link>

            <p className="membership-label">
              RICK SPRINGFIELD MERCHANDISE
            </p>

            <h2>
              ACCESS-RS
              <br />
              MEMBERSHIP VVIP
              <br />
              2026
            </h2>

            <p className="membership-price">
              $3,000.00
            </p>

            <button
              type="button"
              className="membership-cart-button"
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

        </section>

      </main>

      <Footer />
    </>
  );
}