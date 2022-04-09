import Head from 'next/head'
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Footer from '../components/Footer';

export default function Gallery() {
  return (
    <div className="bg-ketic">
      <main className="bg-ketic">
        <Header />
        <LandingPage />
      </main>
      <Footer />
    </div>
  )}
