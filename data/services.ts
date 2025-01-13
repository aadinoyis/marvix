type PackageDetails = {
  packageName: string;
  price: string;
  details: string[];
};

type ServiceCategory = {
  title: string;
  package: {
    basic: PackageDetails;
    growth: PackageDetails;
    premium: PackageDetails;
  }
};

type DiscountBundle = {
  packageName: string;
  price: string;
  details: string[];
};

type Services = {
  contentCreation: ServiceCategory;
  brandingGraphicsDesign: ServiceCategory;
  ppcAdvertising: ServiceCategory;
  emailMarketingAutomation: ServiceCategory;
  webDesignDevelopment: ServiceCategory;
  discountsBundles: ServiceCategory;
};

export const services: Services = {
  contentCreation: {
    title: "Content Creation",
    package: {
      basic: {
        packageName: "Basic Package",
        price: "₦100,000/month",
        details: [
          "10 social media posts (graphics + captions).",
          "5 blog articles/Web contents (500–700 words).",
          "Basic content calendar."
        ]
      },
      growth: {
        packageName: "Growth Package",
        price: "₦250,000/month",
        details: [
          "18 social media posts (graphics + captions).",
          "8 blog articles/Web content (700–1,000 words).",
          "Comprehensive content calendar.",
          "Hashtag research + audience insights."
        ]
      },
      premium: {
        packageName: "Premium Package",
        price: "₦450,000/month",
        details: [
          "30+ social media posts (graphics, captions, videos).",
          "12 blog articles (1,000+ words).",
          "Strategy session + analytics reports.",
          "Content promotion/boosting.",
          "Email newsletter content (2 emails/month)."
        ]
      }
    }
  },
  brandingGraphicsDesign: {
    title: "Branding & Graphics Design",
    package: {

      basic: {
        packageName: "Basic Package",
        price: "₦100,000",
        details: [
          "Logo design (3 options).",
          "Business card design.",
          "Brand color palette.",
          "Social media designs [8 templates]"
        ]
      },
      growth: {
        packageName: "Growth Package",
        price: "₦250,000",
        details: [
          "Logo design (5 options + revisions).",
          "Complete brand style guide.",
          "Branded templates (letterhead, business card design).",
          "Social media designs [12 templates]"
        ]
      },
      premium: {
        packageName: "Premium Package",
        price: "₦350,000",
        details: [
          "Logo design (unlimited revisions).",
          "Full corporate branding (style guide, stationery, templates, packaging design).",
          "Brand mockups and presentation.",
          "Social media designs [20 templates]"
        ]
      }
    }
  },
  ppcAdvertising: {
    title: "PPC Advertising",
    package: {

      basic: {
        packageName: "Basic Package",
        price: "₦150,000/month",
        details: [
          "Budget recommendation (₦50,000–₦100,000).",
          "1 platform (Google Ads or Facebook Ads or TikTok Ads).",
          "Campaign setup + basic reporting."
        ]
      },
      growth: {
        packageName: "Growth Package",
        price: "₦250,000/month",
        details: [
          "Budget recommendation (₦100,000–₦300,000).",
          "2 platforms (Google Ads, Facebook, or LinkedIn Ads or Tiktok Ads).",
          "Campaign optimization + detailed reporting."
        ]
      },
      premium: {
        packageName: "Premium Package",
        price: "₦600,000/month",
        details: [
          "Budget recommendation (₦500,000+).",
          "Multi-platform campaigns.",
          "A/B testing + advanced analytics.",
          "Ongoing optimization + conversion tracking."
        ]
      }
    }
  },
  emailMarketingAutomation: {
    title: "Email Marketing & Automation",
    package: {

      basic: {
        packageName: "Basic Package",
        price: "₦120,000/month",
        details: [
          "2 email campaigns (design + content).",
          "Email list segmentation.",
          "Basic analytics/reporting."
        ]
      },
      growth: {
        packageName: "Growth Package",
        price: "₦300,000/month",
        details: [
          "4–6 email campaigns.",
          "Drip campaigns for nurturing leads.",
          "Email template design.",
          "In-depth analytics."
        ]
      },
      premium: {
        packageName: "Premium Package",
        price: "₦700,000/month",
        details: [
          "8+ email campaigns.",
          "Advanced automation workflows.",
          "Email copywriting optimized for conversions.",
          "Performance tracking + recommendations."
        ]
      }
    }
  },
  webDesignDevelopment: {
    title: "Web Design & Development",
    package: {
      basic: {
        packageName: "Basic Package",
        price: "₦300,000",
        details: [
          "1–3 pages (e.g., home, about, contact).",
          "Responsive design.",
          "Basic SEO optimization."
        ]
      },
      growth: {
        packageName: "Growth Package",
        price: "₦600,000",
        details: [
          "5–7 pages (e.g., services, portfolio, blog).",
          "Custom features (contact forms, animations).",
          "SEO-optimized.",
          "Basic content upload."
        ]
      },
      premium: {
        packageName: "Premium Package",
        price: "₦1,200,000+",
        details: [
          "10+ pages.",
          "E-commerce integration (if needed).",
          "Custom development (features, animations).",
          "Full SEO strategy + analytics integration.",
          "Website maintenance (3 months)."
        ]
      }
    }
  },
  discountsBundles: {
    title: "Discounts & Bundles ",
    package: {
      basic: {
        packageName: "Starter Bundle",
        price: "₦250,000/month",
        details: [
          "Basic Content Creation + Branding.",
          "Free consultation call."
        ]
      },
      growth: {
        packageName: "Growth Bundle",
        price: "₦400,000/month",
        details: [
          "Growth Content Creation + PPC Advertising.",
          "Email Marketing (Basic)."
        ]
      },
      premium: {
        packageName: "Premium Bundle",
        price: "₦1,000,000+/month",
        details: [
          "Premium Content Creation + Web Development.",
          "PPC Advertising + Email Marketing (Premium).",
          "Exclusive 24/7 support."
        ]
      },
    }
  },
};