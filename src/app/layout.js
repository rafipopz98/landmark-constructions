import GlobalState from "@/context";
import Footer from "../components/Footer/Footer";
import "./globals.css";
import { Nunito } from "next/font/google";

const company = "Landmark Construction";
const keywords = [
  "House building services",
  "3D exterior design",
  "Architectural home design",
  "Residential construction",
  "Home construction company",
  "Custom home builders",
  "Modern home design",
  "Luxury home construction",
  "Contemporary house designs",
  "Exterior renovation",
  "Affordable home builders",
  "Premium house construction",
  "Expert architects",
  "Home improvement services",
  "Sustainable home design",
  "Residential builders",
  "Interior and exterior design",
  "Building contractors",
  "Renovation and remodeling",
  "Dream home construction",
  "Residential architecture",
  "3D home modeling",
  "Affordable housing",
  "House renovation services",
  "Vastu-compliant designs",
  "Innovative building solutions",
  "Quality construction work",
  "Interior design consultancy",
  "Exterior remodeling",
  "Energy-efficient homes",
  "Custom house plans",
  "Landmark Construction India",
  "Top construction companies",
  "Home renovation experts",
  "Best architectural designs",
  "Affordable luxury homes",
  "Modern house construction",
  "Elegant home designs",
  "Turnkey construction solutions",
  "Landmark Construction projects",
  "Sustainable architecture",
  "Creative house layouts",
  "Budget-friendly home construction",
  "Renowned architectural firm",
  "Expert home construction",
  "Landmark construction portfolio",
  "House construction specialists",
  "Premium home builders",
  "Expertise in home architecture",
  "Quality craftsmanship",
  "Architectural innovation",
  "Exterior design transformation",
  "Luxury living spaces",
  "Energy-efficient housing",
  "Customized home designs",
  "Best house building services",
  "Interior and exterior transformations",
  "Landmark construction projects in India",
  "Smart home design solutions",
  "Contemporary house plans",
  "Building permits and approvals",
  "Competitive construction pricing",
  "Sustainable housing solutions",
  "Dream home creation",
  "Architectural brilliance",
  "Modern living spaces",
  "Exterior facelift",
  "Custom home design solutions",
  "Residential construction projects",
  "Experienced construction team",
  "Creative house planning",
  "Beautiful home exteriors",
  "Cost-effective house building",
  "Innovative architectural designs",
  "Premium house renovation",
  "Quality home construction",
  "Artistic exterior designs",
  "Smart home renovation",
  "Customized house layouts",
  "Environmentally friendly architecture",
  "Affordable construction solutions",
  "Expert home remodeling",
  "Custom house remodeling",
  "Architectural expertise",
  "Quality interior design",
  "Exterior design experts",
  "Energy-efficient construction",
  "Luxury home renovations",
  "Innovative house plans",
  "Dream home remodeling",
  "Top architectural services",
  "Quality exterior renovation",
  "Sustainable home construction",
  "Affordable architectural designs",
  "Interior design specialists",
  "Exterior design makeovers",
  "Modern home remodeling",
  "Elegant home exteriors",
  "Architectural design trends",
  "Luxury home construction trends",
];

export const metadata = {
  title: "Landmark Constructions | Transforming spaces into places",
  description: `Welcome to ${company}, your one-stop destination for ${keywords
    .slice(0, 5)
    .join(", ")}, and more. We specialize in creating ${keywords
    .slice(6, 10)
    .join(
      ", "
    )} to turn your dreams into reality. Our expert architects provide innovative solutions for ${keywords
    .slice(11, 15)
    .join(", ")}. Explore our portfolio for ${keywords
    .slice(16, 20)
    .join(
      ", "
    )} and see our commitment to quality construction work. Whether it's ${keywords
    .slice(21, 25)
    .join(", ")} or ${keywords
    .slice(26, 30)
    .join(", ")}, we've got you covered. Contact ${company} for ${keywords
    .slice(31, 35)
    .join(", ")} and let us bring your dream home to life.`,
  keywords: [
    "House building services",
    "3D exterior design",
    "Architectural home design",
    "Residential construction",
    "Home construction company",
    "Custom home builders",
    "Modern home design",
    "Luxury home construction",
    "Contemporary house designs",
    "Exterior renovation",
    "Affordable home builders",
    "Premium house construction",
    "Expert architects",
    "Home improvement services",
    "Sustainable home design",
    "Residential builders",
    "Interior and exterior design",
    "Building contractors",
    "Renovation and remodeling",
    "Dream home construction",
    "Residential architecture",
    "3D home modeling",
    "Affordable housing",
    "House renovation services",
    "Vastu-compliant designs",
    "Innovative building solutions",
    "Quality construction work",
    "Interior design consultancy",
    "Exterior remodeling",
    "Energy-efficient homes",
    "Custom house plans",
    "Landmark Construction India",
    "Top construction companies",
    "Home renovation experts",
    "Best architectural designs",
    "Affordable luxury homes",
    "Modern house construction",
    "Elegant home designs",
    "Turnkey construction solutions",
    "Landmark Construction projects",
    "Sustainable architecture",
    "Creative house layouts",
    "Budget-friendly home construction",
    "Renowned architectural firm",
    "Expert home construction",
    "Landmark construction portfolio",
    "House construction specialists",
    "Premium home builders",
    "Expertise in home architecture",
    "Quality craftsmanship",
    "Architectural innovation",
    "Exterior design transformation",
    "Luxury living spaces",
    "Energy-efficient housing",
    "Customized home designs",
    "Best house building services",
    "Interior and exterior transformations",
    "Landmark construction projects in India",
    "Smart home design solutions",
    "Contemporary house plans",
    "Building permits and approvals",
    "Competitive construction pricing",
    "Sustainable housing solutions",
    "Dream home creation",
    "Architectural brilliance",
    "Modern living spaces",
    "Exterior facelift",
    "Custom home design solutions",
    "Residential construction projects",
    "Experienced construction team",
    "Creative house planning",
    "Beautiful home exteriors",
    "Cost-effective house building",
    "Innovative architectural designs",
    "Premium house renovation",
    "Quality home construction",
    "Artistic exterior designs",
    "Smart home renovation",
    "Customized house layouts",
    "Environmentally friendly architecture",
    "Affordable construction solutions",
    "Expert home remodeling",
    "Custom house remodeling",
    "Architectural expertise",
    "Quality interior design",
    "Exterior design experts",
    "Energy-efficient construction",
    "Luxury home renovations",
    "Innovative house plans",
    "Dream home remodeling",
    "Top architectural services",
    "Quality exterior renovation",
    "Sustainable home construction",
    "Affordable architectural designs",
    "Interior design specialists",
    "Exterior design makeovers",
    "Modern home remodeling",
    "Elegant home exteriors",
    "Architectural design trends",
    "Luxury home construction trends",
  ],
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
