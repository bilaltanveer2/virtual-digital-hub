import { Helmet } from 'react-helmet-async';
import ResultsStrip from '../sections/ResultsStrip';

const ResultsPage = () => {
  return (
    <>
      <Helmet>
        <title>Client Results & Case Studies | Virtual Digital Hub</title>
        <meta name="description" content="See the measurable revenue impact and growth results we've achieved for Shopify brands, DTC stores, and service businesses." />
        <meta name="keywords" content="marketing outcomes, Shopify branding results, DTC stores marketing, digital agency case studies, Virtual Digital Hub results, eCommerce success stories, digital marketing portfolio, ROAS achievements, online revenue growth examples, marketing campaign performance, Facebook ads case study, Google ads case study, Shopify store scaling results, client revenue generated, digital marketing success metrics, conversion rate optimization results, SEO case studies, online brand growth proof, marketing agency testimonials, performance marketing results, B2B marketing success, B2C eCommerce growth, digital advertising ROI, past marketing projects, eCommerce business scaling, measurable digital marketing impact, Shopify expert portolio, advertising success stories" />
        <meta property="og:title" content="Client Results & Case Studies | Virtual Digital Hub" />
      </Helmet>
      <section className="section">
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
            Client Results
          </p>
          <h1 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Marketing outcomes we&apos;re proud of</h1>
          <p style={{ fontSize: 15, color: '#cbd5f5' }}>
            Every engagement is engineered around one thing: measurable revenue impact. Explore a snapshot of the
            Shopify brands, DTC stores and service businesses we&apos;ve guided to sustainable growth.
          </p>
        </div>
      </section>
      <ResultsStrip />
    </>
  );
};

export default ResultsPage;

