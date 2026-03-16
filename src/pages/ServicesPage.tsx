import { Helmet } from 'react-helmet-async';

const services = [
  {
    name: 'Shopify Store Development',
    summary: 'High-performing storefronts optimized for speed, UX and conversion.',
    benefits: [
      'Custom theme or high-quality theme setup',
      'Conversion-focused product pages & bundles',
      'Checkout, upsell and post-purchase flows',
    ],
    process: ['Discovery & audit', 'Architecture & wireframes', 'Design & build', 'QA, launch, optimization'],
    results: 'Higher conversion rate, increased AOV and a faster, more scalable store.',
  },
  {
    name: 'Google Ads Management',
    summary: 'Capture high-intent demand with profitable search & shopping campaigns.',
    benefits: [
      'Advanced keyword & query sculpting',
      'Smart Shopping / Performance Max structure',
      'Full-funnel tracking & attribution',
    ],
    process: ['Account audit', 'Structure design', 'Creative & copy', 'Ongoing testing & scaling'],
    results: 'Consistent, profitable traffic with clear CAC and ROAS targets.',
  },
  {
    name: 'Meta Ads (Facebook & Instagram)',
    summary: 'Cold prospecting and remarketing systems that build demand and revenue.',
    benefits: [
      'Creative concepts & testing frameworks',
      'Audience and bidding strategy',
      'Landing page alignment & CRO',
    ],
    process: ['Creative & messaging mapping', 'Campaign build', 'Testing roadmap', 'Scale & refine'],
    results: 'Improved blended ROAS, stronger creative insights, and consistent scaling potential.',
  },
  {
    name: 'TikTok Ads Marketing',
    summary: 'Native, scroll-stopping creatives that convert attention into customers.',
    benefits: [
      'UGC & creator-style content',
      'Creative angles built from customer research',
      'Fast feedback loops for creative iteration',
    ],
    process: ['Audience & creative research', 'Content planning', 'Campaign launch', 'Creative sprints'],
    results: 'Incremental revenue from a fast-growing channel and a library of winning creatives.',
  },
  {
    name: 'SEO Optimization',
    summary: 'Technical and content SEO that compounds over time.',
    benefits: [
      'Technical site audit & fixes',
      'Content strategy & on-page optimization',
      'Internal linking and schema',
    ],
    process: ['Audit & keyword discovery', 'Technical implementation', 'Content rollout', 'Monitoring & refinement'],
    results: 'Higher-quality organic traffic, stronger authority and more revenue from search.',
  },
  {
    name: 'Social Media Marketing',
    summary: 'Strategic content and campaigns that nurture and convert your audience.',
    benefits: [
      'Content pillars & planning',
      'Platform-native formats',
      'Analytics & growth experiments',
    ],
    process: ['Brand & audience mapping', 'Content calendar', 'Publishing & engagement', 'Reporting'],
    results: 'Stronger brand presence and more touchpoints with high-intent buyers.',
  },
  {
    name: 'Conversion Optimization',
    summary: 'Systematic experimentation across your funnel.',
    benefits: [
      'Landing page & funnel audits',
      'A/B testing roadmap',
      'Improved UX & offer structure',
    ],
    process: ['Analytics & heatmaps', 'Hypothesis & test design', 'Implementation', 'Learnings & roll-out'],
    results: 'Higher conversion rate across all paid and organic traffic.',
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Virtual Digital Hub</title>
        <meta name="description" content="Explore our digital marketing services including Shopify Development, Google Ads, Meta Ads, TikTok Ads, and SEO optimization." />
        <meta name="keywords" content="Shopify Store Development, Google Ads Management, Meta Ads, Facebook Ads, TikTok Ads Marketing, SEO Optimization, Social Media Marketing, Conversion Optimization, Virtual Digital Hub services, custom Shopify theme setup, eCommerce store builder, conversion focused product pages, Google smart shopping, performance max campaigns, Facebook cold prospecting, Facebook remarketing systems, Instagram ads strategy, TikTok UGC content creation, TikTok native creatives, technical SEO audit, on-page SEO strategy, eCommerce internal linking, social media content pillars, brand audience mapping, funnel conversion auditing, eCommerce A/B testing, digital marketing services USA, digital marketing services UK, digital marketing services UAE, high performance marketing services, data driven ad management, paid media scaling, growth marketing solutions" />
        <meta property="og:title" content="Our Services | Virtual Digital Hub" />
        <meta property="og:description" content="Professional digital growth services: Shopify, Paid Ads, SEO, and CRO." />
      </Helmet>
      <section className="section">
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
          Services
        </p>
        <h1 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Digital growth services we provide</h1>
        <p style={{ fontSize: 15, color: '#cbd5f5', marginBottom: 24 }}>
          We design, build and manage complete growth systems across paid media, SEO, CRO and Shopify so you can focus
          on product and operations.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 18,
          }}
        >
          {services.map((service) => (
            <article
              key={service.name}
              className="gradient-border"
              style={{
                borderRadius: 22,
                padding: 1,
              }}
            >
              <div
                style={{
                  borderRadius: 20,
                  background: 'rgba(15,23,42,0.96)',
                  padding: 18,
                  fontSize: 13,
                }}
              >
                <h2 style={{ fontSize: 18, marginBottom: 6 }}>{service.name}</h2>
                <p style={{ color: '#9ca3af', marginBottom: 10 }}>{service.summary}</p>
                <h3 style={{ fontSize: 13, marginBottom: 4 }}>Benefits</h3>
                <ul style={{ paddingLeft: 18, marginTop: 0, marginBottom: 8 }}>
                  {service.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: 13, marginBottom: 4 }}>Process</h3>
                <ul style={{ paddingLeft: 18, marginTop: 0, marginBottom: 8 }}>
                  {service.process.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: 13, marginBottom: 4 }}>Expected results</h3>
                <p style={{ color: '#9ca3af', marginBottom: 12 }}>{service.results}</p>
                <a href="/contact" className="btn btn--ghost">
                  Talk about this service
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesPage;

