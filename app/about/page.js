import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>

        <section className="page-hero">

          <p className="eyebrow">
            ABOUT
          </p>

          <h1>
            OUR STORY
          </h1>

          <p>
            Welcome to the official website.
          </p>

        </section>


        <section className="about-section">

          <div className="about-image">
            PHOTO
          </div>


          <div className="about-content">

            <p className="eyebrow">
              THE EXPERIENCE
            </p>

            <h2>
              MUSIC.
              <br />
              PERFORMANCE.
              <br />
              CONNECTION.
            </h2>

            <p>
              This website is designed to bring
              together upcoming shows, merchandise
              and exclusive VIP experiences.
            </p>

            <p>
              More information about the artist,
              brand and experience can be added here.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}