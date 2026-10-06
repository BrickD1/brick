import Header from "../../components/Header";
import Footer from "../../components/Footer";

const videos = [
  {
    title: "LOSE MYSELF",
    image: "/images/video-1.jpg",
  },
  {
    title: "AUTOMATIC",
    image: "/images/video-2.jpg",
  },
  {
    title: "IN THE LAND OF THE BLIND",
    image: "/images/video-3.jpg",
  },
  {
    title: "THE VOODOO HOUSE",
    image: "/images/video-4.jpg",
  },
  {
    title: "DOWN",
    image: "/images/video-5.jpg",
  },
  {
    title: "JESSIE'S GIRL",
    image: "/images/video-6.jpg",
  },
  {
    title: "DANCE THIS WORLD AWAY",
    image: "/images/video-7.jpg",
  },
];

function VideoCard({ video }) {
  return (
    <article className="video-card">
      <h2>{video.title}</h2>

      <a
        href="#"
        className="video-thumbnail"
        aria-label={`Play ${video.title}`}
      >
        <img
          src={video.image}
          alt={video.title}
        />

        <span className="video-play-button">
          <span className="video-play-triangle"></span>
        </span>
      </a>
    </article>
  );
}

export default function VideoPage() {
  return (
    <>
      <Header />

      <main className="video-page">

        <section className="video-intro">
          <h1>VIDEO</h1>

          <p>
            More videos coming soon!
          </p>
        </section>

        <section className="video-list">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              video={video}
            />
          ))}
        </section>

      </main>

      <Footer />
    </>
  );
}