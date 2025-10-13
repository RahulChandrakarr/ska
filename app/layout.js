import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "SKA Group - Building the Future, Today",
  description: "SKA Group is a leading construction company in Chhattisgarh, delivering quality infrastructure solutions with decades of excellence. Your trusted partner for exceptional construction projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-raleway antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
