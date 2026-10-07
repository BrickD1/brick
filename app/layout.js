import "./globals.css";

export const metadata = {
  title: "Rick Springfield",
  description: "Rick Springfield — Music, Shows, News, Merchandise and More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}