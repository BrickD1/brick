import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const newsArticles = [
  {
    title: "Rick Springfield on The Joe Rogan Experience Podcast",
    date: "September 8, 2026",
    excerpt:
      "Rick Springfield joins Joe Rogan on The Joe Rogan Experience Podcast!",
    image: "/images/news-1.jpg",
  },
  {
    title: "The Locustz are back with a Record Store Day release!",
    date: "February 13, 2026",
    excerpt:
      "The Locustz are back with a special Record Store Day limited edition vinyl LP release!",
    image: "/images/news-2.jpg",
  },
  {
    title: "Sammy & Rick June Concerts!",
    date: "January 12, 2026",
    excerpt:
      "Rick Springfield will be teaming up with Sammy Hagar in June for six shows that are not to be missed!",
    image: "/images/news-3.jpg",
  },
  {
    title: "Rick Performs on New Year's Rockin' Eve",
    date: "January 2, 2026",
    excerpt:
      "Watch Rick's performance from Dick Clark's New Year's Rockin' Eve!",
    image: "/images/news-4.jpg",
  },
  {
    title: "New Rick Springfield Interview with Q104.3 NY",
    date: "November 7, 2025",
    excerpt:
      "Check out Rick's new interview on Q104.3 New York's Out of the Box with Jonathan JC Clarke!",
    image: "/images/news-5.jpg",
  },
  {
    title: "Fan Getaway Los Cabos, Mexico May 8-12, 2026!",
    date: "September 2, 2025",
    excerpt:
      "The final Fan Getaway brought Rick and friends together for a special experience in Los Cabos, Mexico.",
    image: "/images/news-6.jpg",
  },
];

function NewsCard({ article }) {
  return (
    <article className="news-card">
      <Link href="#" className="news-card-image">
        <img src={article.image} alt={article.title} />
      </Link>

      <div className="news-card-content">
        <Link href="#" className="news-card-title">
          {article.title}
        </Link>

        <div className="news-card-date">
          {article.date}
        </div>

        <p className="news-card-excerpt">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}

export default function NewsPage() {
  return (
    <>
      <Header />

      <main className="news-page">

        <section className="news-header">
          <h1>NEWS</h1>
        </section>

        <section className="news-grid">
          {newsArticles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
            />
          ))}
        </section>

        <nav className="news-pagination" aria-label="News pages">
          <span className="news-pagination-current">1</span>
          <Link href="#">2</Link>
          <Link href="#">3</Link>
          <span>...</span>
          <Link href="#">19</Link>
          <Link href="#" aria-label="Next page">
            →
          </Link>
        </nav>

      </main>

      <Footer />
    </>
  );
}