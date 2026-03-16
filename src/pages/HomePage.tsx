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
        <title>Virtual Digital Hub - Best Digital Marketing & Growth Agency</title>
        <meta name="description" content="Virtual Digital Hub is a top digital growth studio helping brands scale through Shopify development, Google Ads, Meta Ads, and SEO." />
        <meta name="keywords" content="Digital Growth Studio, Virtual Digital Hub, Best marketing agency in Pakistan, Shopify marketing agency, Google Ads agency, Meta Ads expert, eCommerce scaling, Top digital marketing agency Pakistan, Shopify developers Pakistan, eCommerce growth agency, online marketing agency, search engine optimization strategy, ROAS optimization, performance marketing agency, B2B digital marketing, B2C marketing strategies, digital marketing consultation, Meta Ads for eCommerce, Google PPC management, Facebook ads management, Instagram ads expert, digital marketing services near me, scaling eCommerce brands, revenue growth strategies, increase online sales, targeted advertising agency, digital branding experts, conversion rate optimization CRO, landing page optimization, digital marketing solutions, business growth agency, marketing ROI improvement, TikTok ads agency, video marketing agency, top rated Shopify experts, Shopify store optimization, eCommerce revenue growth, D2C marketing agency, direct to consumer marketing, data driven marketing strategy, eCommerce growth consultants, digital media buying agency, performance marketing specialists USA, digital marketing agency UK, global eCommerce scaling, outsource digital marketing, best SEO agency, local SEO experts, Facebook marketing partners, Google premier partners, TikTok eCommerce marketing" />
        <meta property="og:title" content="Virtual Digital Hub - Best Digital Marketing & Growth Agency" />
        <meta property="og:description" content="Scale your business with expert Shopify, Google Ads, and Meta Ads strategies by Virtual Digital Hub." />
        <meta property="og:type" content="website" />
      </Helmet>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <ServicesSnapshot />
      </motion.div>
      <ResultsStrip />
      <TestimonialsStrip />
      <LeadMagnet />
    </>
  );
};

export default HomePage;

