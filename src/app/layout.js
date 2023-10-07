import GlobalState from "@/context";
import Footer from "../components/Footer/Footer";
import "./globals.css";
import { Nunito } from "next/font/google";


// export const metadata = {
//   title: "Landmark Constructions",
//   description: "Transforming spaces into places",
//   icons: [{ rel: "icon", url: logo }],
// };
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
