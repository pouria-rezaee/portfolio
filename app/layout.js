import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "پورتفولیوی پوریا",
  description: "پورتفولیوی شخصی پوریا، توسعه‌دهنده وب",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
