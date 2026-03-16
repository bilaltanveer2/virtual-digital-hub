export type ResultItem = {
  id: number;
  clientName: string;
  projectType: string;
  beforeMetric: string;
  afterMetric: string;
  revenueGrowth: string;
  roas: string;
  conversionIncrease: string;
  imageUrls?: string[];
};

export type Testimonial = {
  id: number;
  clientName: string;
  company: string;
  role?: string;
  photoUrl?: string;
  rating: number;
  quote: string;
};

export type StaffMember = {
  id: string | number;
  name: string;
  post: string;
  work?: string; // what they do (e.g. "Web Developer")
  experience: string;
  photoUrl: string;
  order?: number;
  active?: boolean;
};

export type PortfolioItem = {
  id: number;
  title: string;
  clientName: string;
  industry: string;
  problem: string;
  strategy: string;
  result: string;
  thumbnailUrl?: string;
  imageUrls?: string[];
};

export type PricingTier = {
  id: number;
  tier: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

