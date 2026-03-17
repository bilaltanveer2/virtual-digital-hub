import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection';
import ServicesSnapshot from '../sections/ServicesSnapshot';
import ResultsStrip from '../sections/ResultsStrip';
import TestimonialsStrip from '../sections/TestimonialsStrip';
import LeadMagnet from '../sections/LeadMagnet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Pakistan | SEO, Shopify & Ads | Virtual Digital Hub</title>

        <meta
          name="description"
          content="Virtual Digital Hub is a leading digital marketing agency in Pakistan offering SEO services, Shopify development, Google Ads, Meta Ads and TikTok marketing to grow your business."
        />

        {/* Focused keywords (NOT stuffing) */}
        <meta
          name="keywords"
          content="digital marketing agency in Pakistan, SEO services Pakistan, Shopify development, Google Ads agency, Meta Ads marketing, TikTok ads services"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://virtualdigitalhub.online/" />

        {/* Open Graph */}
        <meta property="og:title" content="Virtual Digital Hub - Digital Marketing Agency in Pakistan" />
        <meta property="og:description" content="Grow your business with SEO, Shopify development and paid ads marketing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtualdigitalhub.online/" />

      </Helmet>

      {/* ✅ SEO Headings (VERY IMPORTANT) */}
      <h1 style={{display: "none"}}>
        Digital Marketing Agency in Pakistan - Virtual Digital Hub
      </h1>

      <HeroSection />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <ServicesSnapshot />
      </motion.div>

      {/* Add SEO Content Section */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Digital Marketing Services to Grow Your Business</h2>
        <p>
          Virtual Digital Hub is a top digital marketing agency in Pakistan helping businesses grow through SEO, Shopify development and paid advertising. 
          We specialize in Google Ads, Meta Ads and TikTok marketing strategies designed to increase traffic, generate leads and boost revenue.
        </p>

        <h2>Why Choose Our Digital Marketing Agency?</h2>
        <p>
          Our team focuses on data-driven marketing strategies that deliver real results. Whether you need SEO services to rank higher on Google 
          or Shopify development to build a high-converting store, we provide complete digital marketing solutions tailored to your business needs.
        </p>
      </section>

      <ResultsStrip />
      <TestimonialsStrip />
      <LeadMagnet />
    </>
  );
};

export default HomePage;
