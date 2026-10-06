import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const memberBenefits = [
  "First access to presale tickets and ticket fan packages",
  "Exclusive Access-RS member merchandise pack",
  "Monthly video update from Rick",
  "Access to member-only 'Ask Rick' feature",
  "Access to Rick's blog",
  "Access to the member-only fan message board",
  "Exclusive member-only merchandise offers",
  "Seasonal discounts in the official online store",
  "Other member-only content and opportunities, when available",
];

export default function AccessRSPage() {
  return (
    <>
      <Header />

      <main className="members-only-page">

        {/* MEMBER NAVIGATION */}

        <nav className="member-nav">

          <div className="member-nav-inner">

            <Link href="/access-rs">
              MEMBER HOME
            </Link>

            <Link href="#">
              RICK'S BLOG
            </Link>

            <Link href="#">
              PRESALE CODE
            </Link>

            <Link href="#">
              ASK RICK
            </Link>

            <Link href="#">
              VIDEO
            </Link>

            <Link href="#">
              FAN FORUM
            </Link>

          </div>

        </nav>


        {/* RESTRICTED AREA */}

        <section className="members-restricted">

          <p className="members-page-title">
            ACCESS-RS
          </p>

          <div className="members-lock">
            🔒
          </div>

          <h1>
            THIS PAGE IS RESTRICTED
            <br />
            TO ACCESS-RS MEMBERS
          </h1>

          <p className="members-login-message">
            Login below, or join Access-RS to get access
            to the benefits below plus more!
          </p>


          <ul className="members-benefits">

            {memberBenefits.map(
              (benefit, index) => (
                <li key={index}>
                  {benefit}
                </li>
              )
            )}

          </ul>


          <div className="members-actions">

            <Link
              href="#"
              className="member-login-button"
            >
              LOGIN
            </Link>

            <Link
              href="/join-access-rs"
              className="member-buy-button"
            >
              BUY MEMBERSHIP
            </Link>

          </div>


          <Link
            href="#"
            className="forgot-password"
          >
            Forgot your password?
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}