import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const shows = [
  {
    date: "OCT 09, 2026",
    city: "Bossier City LA",
    venue: "Horseshoe Casino",
    type: "Rick Springfield Full Band Show",
  },
  {
    date: "OCT 10, 2026",
    city: "Terrytown LA",
    venue: "Terrytown Food Truck Festival",
    type: "Rick Springfield Full Band Show FREE SHOW!",
  },
  {
    date: "OCT 16, 2026",
    city: "Larchwood IA",
    venue: "Grand Falls Casino",
    type: "Rick Springfield Full Band Show",
  },
  {
    date: "OCT 17, 2026",
    city: "Riverside IA",
    venue: "Riverside Casino",
    type: "Rick Springfield Full Band Show",
  },
  {
    date: "OCT 23, 2026",
    city: "Honolulu HI",
    venue: "Blue Note Hawaii",
    type: "Rick Springfield Acoustic Show",
  },
  {
    date: "OCT 24, 2026",
    city: "Honolulu HI",
    venue: "Blue Note Hawaii",
    type: "Rick Springfield Acoustic Show",
  },
];

const storeProducts = [
  {
    name: "CAN KOOZIE - LOUD NOISES",
    price: "$9.99",
    image: "/images/home-store-1.jpg",
  },
  {
    name: "KEYCHAIN - I WANT MY 80S",
    price: "$6.99",
    oldPrice: "$9.99",
    image: "/images/home-store-2.jpg",
    sale: true,
  },
  {
    name: "RETRO 1982 CONCERT RAGLAN",
    price: "$29.99",
    oldPrice: "$39.99",
    image: "/images/home-store-3.jpg",
    sale: true,
  },
  {
    name: "RICK SPRINGFIELD TOTE BAG",
    price: "$19.99",
    image: "/images/home-store-4.jpg",
  },
];

const newsArticles = [
  {
    title: "Rick Springfield on The Joe Rogan Experience Podcast",
    excerpt:
      "Rick Springfield joins Joe Rogan on The Joe Rogan Experience Podcast!",
    image: "/images/news-1.jpg",
  },
  {
    title: "The Locustz are back with a Record Store Day release!",
    excerpt:
      "The Locustz are back with a special Record Store Day limited edition vinyl LP release!",
    image: "/images/news-2.jpg",
  },
  {
    title: "Sammy & Rick June Concerts!",
    excerpt:
      "Rick Springfield will be teaming up with Sammy Hagar in June for six shows that are not to be missed!",
    image: "/images/news-3.jpg",
  },
  {
    title: "Rick Performs on New Year's Rockin' Eve",
    excerpt:
      "Watch Rick's performance from Dick Clark's New Year's Rockin' Eve!",
    image: "/images/news-4.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="home-page">

        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="home-hero">

          <img
            src="/images/home-hero.jpg"
            alt="Live concert performance"
            className="home-hero-image"
          />

          <div className="home-hero-content">

            <h1>
              LIVE CONCERTS!
            </h1>

            <div className="home-hero-buttons">

              <Link
                href="/shows"
                className="home-red-button"
              >
                TICKETS &amp; VIP MEET-N-GREETS
              </Link>

              <Link
                href="/shows"
                className="home-red-button"
              >
                SEE ALL SHOW DATES
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            UPCOMING SHOWS
            ===================================================== */}

        <section className="home-shows">

          <div className="home-section-heading">
            <h2>UPCOMING SHOWS</h2>
          </div>

          <div className="home-show-list">

            {shows.map((show, index) => (
              <article
                className="home-show-row"
                key={index}
              >

                <div className="home-show-date">
                  {show.date}
                </div>

                <div className="home-show-details">

                  <div className="home-show-city">
                    {show.city}
                  </div>

                  <div className="home-show-venue">
                    {show.venue}
                  </div>

                  <div className="home-show-type">
                    {show.type}
                  </div>

                </div>

                <div className="home-show-buttons">

                  <a
                    href="#"
                    className="home-ticket-button"
                  >
                    TICKETS
                  </a>

                  <Link
                    href="/meet-rick"
                    className="home-meet-button"
                  >
                    MEET RICK
                  </Link>

                </div>

              </article>
            ))}

          </div>

          <div className="home-shows-link">
            <Link href="/shows">
              SEE ALL SHOW DATES
            </Link>
          </div>

        </section>


        {/* =====================================================
            ACCESS-RS
            ===================================================== */}

        <section className="home-access">

          <div className="home-access-inner">

            <div className="home-access-image">
              <img
                src="/images/access-rs-join.jpg"
                alt="Access-RS"
              />
            </div>

            <div className="home-access-content">

              <h2>JOIN ACCESS-RS</h2>

              <p className="home-access-intro">
                Join the all-new ACCESS-RS for access
                to ticket pre-sale codes, exclusive
                content, and more.
              </p>

              <ul>
                <li>Access to presale tickets</li>
                <li>Member-only merchandise pack</li>
                <li>Monthly video update from Rick</li>
                <li>Access to member-only &quot;Ask Rick&quot; feature</li>
                <li>Access to Rick&apos;s blog</li>
                <li>Member-only fan forum</li>
                <li>Member-only merchandise offers</li>
                <li>Seasonal discounts in the official online store</li>
              </ul>

              <Link
                href="/join-access-rs"
                className="home-black-button"
              >
                JOIN
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            BIG HITS
            ===================================================== */}

        <section className="home-big-hits">

          <div className="home-big-hits-inner">

            <h2>BIG HITS! ORDER NOW!</h2>

            <p>
              &quot;Big Hits: Rick Springfield&apos;s Greatest Hits,
              Vol. 2&quot; is a career-spanning retrospective
              featuring Rick&apos;s more recent recording output.
            </p>

            <div className="home-big-hits-grid">

              <div className="home-big-hit-card">
                <img
                  src="/images/big-hits-vinyl.jpg"
                  alt="Big Hits vinyl"
                />

                <a href="#">
                  2 LP VINYL
                </a>
              </div>

              <div className="home-big-hit-card">
                <img
                  src="/images/big-hits-special.jpg"
                  alt="Big Hits special edition"
                />

                <a href="#">
                  SPECIAL EDITION
                </a>
              </div>

              <div className="home-big-hit-card">
                <img
                  src="/images/big-hits-cd.jpg"
                  alt="Big Hits CD"
                />

                <a href="#">
                  CD
                </a>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            OFFICIAL STORE
            ===================================================== */}

        <section className="home-store">

          <div className="home-store-inner">

            <div className="home-store-heading">

              <h2>OFFICIAL STORE</h2>

              <Link href="/shop">
                VIEW ALL
              </Link>

            </div>

            <div className="home-store-grid">

              {storeProducts.map((product, index) => (
                <article
                  className="home-store-card"
                  key={index}
                >

                  <div className="home-store-image">

                    {product.sale && (
                      <span>Sale</span>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>

                  <h3>
                    {product.name}
                  </h3>

                  <div className="home-store-price">

                    {product.oldPrice && (
                      <del>
                        {product.oldPrice}
                      </del>
                    )}

                    <strong>
                      {product.price}
                    </strong>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            VIDEO
            ===================================================== */}

        <section className="home-video">

          <div className="home-video-inner">

            <h2>
              Watch the video for Rick Springfield&apos;s
              latest single &quot;Lose Myself&quot; below!
            </h2>

            <Link
              href="/video"
              className="home-video-image"
            >

              <img
                src="/images/video-1.jpg"
                alt="Lose Myself"
              />

              <span className="home-video-play">
                <span></span>
              </span>

            </Link>

          </div>

        </section>


        {/* =====================================================
            NEWS
            ===================================================== */}

        <section className="home-news">

          <div className="home-news-inner">

            <div className="home-news-heading">

              <h2>RICK NEWS</h2>

              <Link href="/news">
                VIEW ALL
              </Link>

            </div>

            <div className="home-news-grid">

              {newsArticles.map((article, index) => (
                <article
                  className="home-news-card"
                  key={index}
                >

                  <Link
                    href="/news"
                    className="home-news-image"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                    />
                  </Link>

                  <h3>
                    <Link href="/news">
                      {article.title}
                    </Link>
                  </h3>

                  <p>
                    {article.excerpt}
                  </p>

                </article>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            SUBSCRIBE
            ===================================================== */}

        <section className="home-subscribe">

          <div className="home-subscribe-inner">

            <h2>SUBSCRIBE</h2>

            <p>
              Get updates on Rick&apos;s upcoming shows,
              music, merchandise, more!
            </p>

            <form className="home-subscribe-form">

              <input
                type="email"
                placeholder="Email"
                aria-label="Email address"
              />

              <button type="submit">
                →
              </button>

            </form>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}