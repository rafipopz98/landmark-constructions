import GlobalState from "@/context";
import Footer from "../components/Footer/Footer";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Landmark Constructions | Transforming spaces into places",
  description:
    "Welcome to Landmark Construction, the epitome of architectural innovation. We are the avant-garde of 3D house design, interior elegance, and 3D exterior grandeur. Our portfolio showcases homes where sustainable design meets contemporary aesthetics - a fusion of nature and technology. From eco-friendly smart homes to modern luxury villas, our creations redefine living. We engineer spaces that breathe with vitality, connecting residents to the beauty of their surroundings. Experience architectural finesse, where minimalism meets opulence and tradition harmonizes with the future. Embark on a journey with us, and let's design your dreams.",
  
};
const nunito = Nunito({ subsets: ["latin"] });

import logo from "../../public/logo.png";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={nunito.className}>
        <GlobalState>
          {children}
          <Footer />
        </GlobalState>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          async
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          async
        ></script>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
      </body>
    </html>
  );
}
