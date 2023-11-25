import Header from "./components/header/Header";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/AboutUs";
import SocialMedia from "./components/socialMedia/SocialMedia";
import Cards from "./components/cards/Cards";
import HeroSection from "./components/heroSection/HeroSection";
import Footer from './components/footer/Footer'
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Cards />
      <SocialMedia />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
