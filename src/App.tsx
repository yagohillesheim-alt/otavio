/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Identification } from "./components/Identification";
import { About } from "./components/About";
import { PerformanceFamily } from "./components/PerformanceFamily";
import { Modalities } from "./components/Modalities";
import { Method } from "./components/Method";
import { Quiz } from "./components/Quiz";
import { SocialProof } from "./components/SocialProof";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Header />
      <main>
        <Hero />
        <Identification />
        <About />
        <PerformanceFamily />
        <Quiz />
        <Modalities />
        <Method />
        <SocialProof />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

