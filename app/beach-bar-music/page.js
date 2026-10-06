import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BeachBarPage() {
  return (
    <>
      <Header />

      <main className="beach-bar-page">

        {/* =========================
            TOP IMAGE BANNER
        ========================= */}

        <section className="beach-bar-banner">

          <div className="beach-bar-banner-image">
            <img
              src="/images/beach-bar-1.jpg"
              alt="Beach Bar Rum"
            />
          </div>

          <div className="beach-bar-banner-image">
            <img
              src="/images/beach-bar-2.jpg"
              alt="Beach Bar Rum"
            />
          </div>

          <div className="beach-bar-banner-image">
            <img
              src="/images/beach-bar-3.jpg"
              alt="Beach Bar Rum"
            />
          </div>

        </section>


        {/* =========================
            MAIN STORY
        ========================= */}

        <section className="beach-bar-story">

          <div className="beach-bar-story-inner">

            <h1>
              BEACH BAR RUM
            </h1>

            <p className="beach-bar-intro">
              Two iconic rockers have been busy—in the
              rum business!
            </p>

            <h2>
              Meet Beach Bar Rum.
            </h2>

            <p>
              Sammy Hagar has been dabbling in the
              spirits game for a few years and after
              chatting with his buddy Rick Springfield,
              he decided to relaunch the rum part of his
              portfolio and Rick came on board as a
              partner.
            </p>

            <p>
              “Sammy has had such amazing success in
              the spirit business and I've wanted to get
              into it for a while now. When this
              opportunity came along I thought it was a
              brilliant idea,” Rick adds.
            </p>

            <p>
              “And I am an Ernest Hemingway fan so of
              course I drink rum. I've tried a bunch of
              them and the Beach Bar brand is a cut above
              all the ones I tried — smoother and
              sweeter.”
            </p>

            <p>
              “Our first collaboration was a home run so
              we thought why not try it again,”
              Springfield says in reference to his 1981
              hit recording of the Hagar-penned
              “I've Done Everything For You”.
            </p>

            <p>
              “Rick and I go way back — he had a big hit
              with a song I wrote and we've been friends
              ever since,” says Sammy. “Now we're ready
              for our next hit with Beach Bar Rum!”
            </p>

            <p>
              The Beach Bar Rum range features three
              Puerto Rican made expressions: a basic
              white rum, Kola Spiced Rum, and Red Head
              Macadamia Nut Rum.
            </p>

            <p>
              The rums are distributed nationally and
              available to order online in select states.
            </p>


            <a
              href="#"
              className="beach-bar-button"
            >
              ORDER ONLINE
            </a>


            <p className="beach-bar-second-story">
              “Our story is simple. We're passionate
              about rum. Period. And when you are this
              passionate about something you take immense
              pride in it.
            </p>

            <p>
              The result, creating the finest Puerto
              Rican rum in the world. Beach Bar Rum is
              made from the purest ingredients and finest
              sugar cane in the Caribbean and is distilled
              3 times creating a superior taste.”
            </p>


            <a
              href="#"
              className="beach-bar-button"
            >
              LEARN MORE
            </a>

          </div>

        </section>


        {/* =========================
            LOWER IMAGE SECTION
        ========================= */}

        <section className="beach-bar-lower-images">

          <div className="beach-bar-lower-image">
            <img
              src="/images/beach-bar-4.jpg"
              alt="Beach Bar Rum"
            />
          </div>

          <div className="beach-bar-lower-image">
            <img
              src="/images/beach-bar-5.jpg"
              alt="Beach Bar Rum"
            />
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}