
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Achievements from '../components/Achievements';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Achievements />
      <Gallery />
      <Contact />
    </Layout>
  );
};

export default Index;
