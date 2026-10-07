import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const shows = [
  {
    date: "OCT 09, 2026",
    city: "Bossier City LA",
    venue: "Horseshoe Casino",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
  {
    date: "OCT 10, 2026",
    city: "Terrytown LA",
    venue: "Terrytown Food Truck Festival",
    type: "Rick Springfield Full Band Show FREE SHOW!",
    tickets: "#",
  },
  {
    date: "OCT 16, 2026",
    city: "Larchwood IA",
    venue: "Grand Falls Casino",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
  {
    date: "OCT 17, 2026",
    city: "Riverside IA",
    venue: "Riverside Casino",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
  {
    date: "OCT 23, 2026",
    city: "Honolulu HI",
    venue: "Blue Note Hawaii",
    type: "Rick Springfield Acoustic Show",
    tickets: "#",
  },
  {
    date: "OCT 24, 2026",
    city: "Honolulu HI",
    venue: "Blue Note Hawaii",
    type: "Rick Springfield Acoustic Show",
    tickets: "#",
  },
  {
    date: "OCT 25, 2026",
    city: "Honolulu HI",
    venue: "Blue Note Hawaii",
    type: "Rick Springfield Acoustic Show",
    tickets: "#",
  },
  {
    date: "NOV 19, 2026",
    city: "Des Plaines IL",
    venue: "Rivers Casino Des Plaines",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
  {
    date: "NOV 20, 2026",
    city: "Des Plaines IL",
    venue: "Rivers Casino Des Plaines",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
  {
    date: "NOV 21, 2026",
    city: "New Buffalo MI",
    venue: "Four Winds Casino",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
  {
    date: "DEC 03, 2026",
    city: "Bensalem PA",
    venue: "Parx Casino - Xcite Center",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
  {
    date: "DEC 04, 2026",
    city: "Mashantucket CT",
    venue: "Foxwoods Resort & Casino",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
  {
    date: "DEC 05, 2026",
    city: "Huntington NY",
    venue: "The Paramount",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
  {
    date: "DEC 11, 2026",
    city: "Detroit MI",
    venue: "Sound Board Detroit",
    type: "Rick Springfield Full Band Show",
    tickets: "#",
  },
];

export default function ShowsPage() {
  return (
    <>
      <Header />

      <main className="shows-page">

        {/* TOP PHOTO STRIP */}

        <section className="shows-photo-strip">

          <div className="shows-photo">
            <img
              src="/images/shows-banner-1.jpg"
              alt="Live performance"
            />
          </div>

          <div className="shows-photo">
            <img
              src="/images/shows-banner-2.jpg"
              alt="Live performance"
            />
          </div>

          <div className="shows-photo">
            <img
              src="/images/shows-banner-3.jpg"
              alt="Live performance"
            />
          </div>

          <div className="shows-photo">
            <img
              src="/images/shows-banner-4.jpg"
              alt="Live performance"
            />
          </div>

          <div className="shows-photo">
            <img
              src="/images/shows-banner-5.jpg"
              alt="Live performance"
            />
          </div>

        </section>


        {/* PAGE TITLE */}

        <section className="shows-title">
          <h1>UPCOMING SHOWS</h1>
        </section>


        {/* SHOW LIST */}

        <section className="shows-list">

          {shows.map((show, index) => (

            <article
              className="show-row"
              key={index}
            >

              <div className="show-row-date">
                {show.date}
              </div>


              <div className="show-row-details">

                <div className="show-row-city">
                  {show.city}
                </div>

                <div className="show-row-venue">
                  {show.venue}
                </div>

                <div className="show-row-type">
                  {show.type}
                </div>

              </div>


              <div className="show-row-actions">

                <a
                  href={show.tickets}
                  className="tickets-button"
                >
                  TICKETS
                </a>

                <Link
                  href="/meet-rick"
                  className="meet-rick-button"
                >
                  MEET RICK
                </Link>

              </div>

            </article>

          ))}

        </section>


        {/* BOTTOM MESSAGE */}

        <section className="shows-bottom-message">

          <p>
            New individual show dates are added all
            year long, so be sure to check back often
            for new show announcements!
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}