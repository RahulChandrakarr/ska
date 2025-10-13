import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "SKA Group - Building the Future, Today",
  description: "SKA Group is a leading construction company in Chhattisgarh, delivering quality infrastructure solutions with decades of excellence. Your trusted partner for exceptional construction projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
