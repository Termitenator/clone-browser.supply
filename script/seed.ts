import { db } from "../lib/firebase";
import { Template } from "../types/template";
import { Customer } from "../types/customer";

const templates: Template[] = [
  {
    id: "selene",
    name: "Selene",
    category: "AI SAAS",
    price: 129,
    currency: "USD",
    badge: "NEW",
    headline:
      "An AI analytics website template built for data-driven SaaS companies",
    description:
      "Selene is a premium Framer template built for AI analytics platforms and data-driven SaaS companies who want to look intelligent, trustworthy, and attract teams ready to make smarter decisions from day one.",
    quote: "Perfect for: AI startups & analytics platforms.",
    thumbnailUrl:
      "https://framerusercontent.com/images/TokDxzj31tnZjhNato5Dt2DCM.png?width=3456&height=2168",
    demoUrl: "https://browser.supply/templates/selene",
    purchaseUrl: "https://browser.supply/templates/selene#buy",
    createdAt: new Date().toISOString(),
  },
  {
    id: "zenna",
    name: "Zenna",
    category: "YOGA STUDIO",
    price: 129,
    currency: "USD",
    badge: null,
    headline: "A yoga studio website template that fills your classes",
    description:
      "Zenna is a premium Framer template designed for online yoga instructors & studios ready to attract students, sell classes and programs, and grow a business that flows as naturally as their practice.",
    quote: "Perfect for: Yoga studios & fitness trainers.",
    thumbnailUrl:
      "https://framerusercontent.com/images/ayWCXsxNhjvjov4HuQ6WmcTuc.png?width=3456&height=2170",
    demoUrl: "https://browser.supply/templates/zenna",
    purchaseUrl: "https://browser.supply/templates/zenna#buy",
    createdAt: new Date().toISOString(),
  },
  {
    id: "traction",
    name: "Traction",
    category: "SMMA",
    price: 129,
    currency: "USD",
    badge: null,
    headline: "The SMMA website template built to win clients",
    description:
      "Traction is a premium Framer template built for social media marketing agencies that want to look credible, results-driven, and attract high-value clients from day one.",
    quote: "Perfect for: SMMA owners & digital marketing agencies.",
    thumbnailUrl:
      "https://framerusercontent.com/images/fUQEGcE8mHItmliwyV59BT7zhzc.png?width=3456&height=2168",
    demoUrl: "https://browser.supply/templates/traction",
    purchaseUrl: "https://browser.supply/templates/traction#buy",
    createdAt: new Date().toISOString(),
  },
  {
    id: "meraas",
    name: "Meraas",
    category: "REAL ESTATE",
    price: 129,
    currency: "USD",
    badge: "POPULAR",
    headline: "Launch your real estate website today",
    description:
      "Meraas is a premium Framer template built for real estate agencies who want to look professional, trustworthy, and attract premium clients from day one.",
    quote: "Perfect for: Real estate agents & property consultants.",
    thumbnailUrl:
      "https://framerusercontent.com/images/gMRKj7MnQ7vklFNpBD1HhZKo0.png?width=3456&height=2166",
    demoUrl: "https://browser.supply/templates/meraas",
    purchaseUrl: "https://browser.supply/templates/meraas#buy",
    createdAt: new Date().toISOString(),
  },
  {
    id: "editr",
    name: "Editr",
    category: "VIDEO EDITING AGENCY",
    price: 129,
    currency: "USD",
    badge: null,
    headline: "A video editing agency website template that sells your work",
    description:
      "Editr is a premium Framer template built for video editing agencies who want to look professional, results-driven, and attract content creators from day one. Perfect for video editors, content agencies, and creative studios.",
    quote: "Perfect for: Video editors & content and media agencies.",
    thumbnailUrl:
      "https://framerusercontent.com/images/1NC2TMtH0wowAIyc7hrQrUOio.png?width=3456&height=2166",
    demoUrl: "https://browser.supply/templates/editr",
    purchaseUrl: "https://browser.supply/templates/editr#buy",
    createdAt: new Date().toISOString(),
  },
  {
    id: "influence",
    name: "Influence",
    category: "SMMA",
    price: 129,
    currency: "USD",
    badge: "POPULAR",
    headline: "The social media agency website focused on short-form content",
    description:
      "Influence is a premium Framer template built for short-form content agencies that want to look credible, results-driven, and attract high-value clients from day one. Perfect for video agencies, content creators, and specialists helping brands dominate social media.",
    quote: "Perfect for: Short-form specialised agencies.",
    thumbnailUrl:
      "https://framerusercontent.com/images/DUlF2K2Uw9TEBNJEXl872DkeOs.png?width=3456&height=2168",
    demoUrl: "https://browser.supply/templates/influence",
    purchaseUrl: "https://browser.supply/templates/influence#buy",
    createdAt: new Date().toISOString(),
  },
];
const customers: Customer[] = [
  {
    id: "widya",
    name: "Widya",
    avatarUrl: "https://i.pravatar.cc/150?u=widya",
    testimonial:
      "Beautiful design and is easy to set up! The tutorial helped me a lot.",
    rating: 5,
    templateUsed: {
      templateId: "selene",
      templateName: "SELENE",
      thumbnailUrl:
        "https://framerusercontent.com/images/TokDxzj31tnZjhNato5Dt2DCM.png?width=3456&height=2168",
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "david",
    name: "Dávid",
    avatarUrl: "https://i.pravatar.cc/150?u=david",
    testimonial:
      "Super easy to use and customise and also beautifully designed.",
    rating: 5,
    templateUsed: {
      templateId: "zenna",
      templateName: "ZENNA",
      thumbnailUrl:
        "https://framerusercontent.com/images/ayWCXsxNhjvjov4HuQ6WmcTuc.png?width=3456&height=2170",
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "renan",
    name: "Renan",
    avatarUrl: "https://i.pravatar.cc/150?u=renan",
    testimonial:
      "Very nice. Intuitive, easy going, good to navigate. Just Awesome!",
    rating: 5,
    templateUsed: {
      templateId: "traction",
      templateName: "TRACTION",
      thumbnailUrl:
        "https://framerusercontent.com/images/fUQEGcE8mHItmliwyV59BT7zhzc.png?width=3456&height=2168",
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "ian",
    name: "Ian",
    avatarUrl: "https://i.pravatar.cc/150?u=ian",
    testimonial: "Intentional and distinct design makes them fun to look at.",
    rating: 5,
    templateUsed: {
      templateId: "selene",
      templateName: "SELENE",
      thumbnailUrl:
        "https://framerusercontent.com/images/TokDxzj31tnZjhNato5Dt2DCM.png?width=3456&height=2168",
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "samar",
    name: "Samar",
    avatarUrl: "https://i.pravatar.cc/150?u=samar",
    testimonial:
      "The templates is so well designed and has a unique look to them.",
    rating: 5,
    templateUsed: {
      templateId: "meraas",
      templateName: "MERAAS",
      thumbnailUrl:
        "https://framerusercontent.com/images/gMRKj7MnQ7vklFNpBD1HhZKo0.png?width=3456&height=2166",
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "mark",
    name: "Mark",
    avatarUrl: "https://i.pravatar.cc/150?u=mark",
    testimonial:
      "The design is clean, easy to customize, professional, and versatile.",
    rating: 5,
    templateUsed: {
      templateId: "editr",
      templateName: "EDITR",
      thumbnailUrl:
        "https://framerusercontent.com/images/1NC2TMtH0wowAIyc7hrQrUOio.png?width=3456&height=2166",
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "sofia",
    name: "Sofia",
    avatarUrl: "https://i.pravatar.cc/150?u=sofia",
    testimonial: "Brilliant template. Super well designed and easy to launch.",
    rating: 5,
    templateUsed: {
      templateId: "influence",
      templateName: "INFLUENCE",
      thumbnailUrl:
        "https://framerusercontent.com/images/DUlF2K2Uw9TEBNJEXl872DkeOs.png?width=3456&height=2168",
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "marc",
    name: "Marc",
    avatarUrl: "https://i.pravatar.cc/150?u=marc",
    testimonial: "An excellent template in terms of design and performance.",
    rating: 4,
    templateUsed: {
      templateId: "zenna",
      templateName: "ZENNA",
      thumbnailUrl:
        "https://framerusercontent.com/images/ayWCXsxNhjvjov4HuQ6WmcTuc.png?width=3456&height=2170",
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "paul-lucyk",
    name: "Paul Lucyk",
    avatarUrl: "https://i.pravatar.cc/150?u=paul-lucyk",
    testimonial: "Every listing. Every detail. Every time.",
    rating: 5,
    templateUsed: {
      templateId: "meraas",
      templateName: "MERAAS",
      thumbnailUrl:
        "https://framerusercontent.com/images/gMRKj7MnQ7vklFNpBD1HhZKo0.png?width=3456&height=2166",
    },
    liveSiteUrl: "https://example-real-estate-site.com",
    liveSiteVideoUrl:
      "https://framerusercontent.com/assets/qTB40R12I9LovhihtEosPE7JjJk.mp4",
    createdAt: new Date().toISOString(),
  },
  {
    id: "julius-zeise",
    name: "Julius Zeise",
    avatarUrl: "https://i.pravatar.cc/150?u=julius-zeise",
    testimonial: "Video editng guided by data & proven results!",
    rating: 5,
    templateUsed: {
      templateId: "editr",
      templateName: "EDITR",
      thumbnailUrl:
        "https://framerusercontent.com/images/1NC2TMtH0wowAIyc7hrQrUOio.png?width=3456&height=2166",
    },
    liveSiteVideoUrl:
      "https://framerusercontent.com/assets/G2RNxbBgbunpqNHez1hT3XjyE.mp4",
    createdAt: new Date().toISOString(),
  },
  {
    id: "influence-customer-1",
    name: "Camille",
    avatarUrl: "https://i.pravatar.cc/150?u=influence-customer-1",
    testimonial: "Turning our raw footage into content that actually converts.",
    rating: 5,
    templateUsed: {
      templateId: "influence",
      templateName: "INFLUENCE",
      thumbnailUrl:
        "https://framerusercontent.com/images/DUlF2K2Uw9TEBNJEXl872DkeOs.png?width=3456&height=2168",
    },
    liveSiteVideoUrl:
      "https://framerusercontent.com/assets/INMysqtInxPVayZyDWh92Ci5I.mp4",
    createdAt: new Date().toISOString(),
  },
  {
    id: "influence-customer-2",
    name: "Julien",
    avatarUrl: "https://i.pravatar.cc/150?u=influence-customer-2",
    testimonial:
      "Very well-built and optimized template. Made with real growth in mind.",
    rating: 5,
    templateUsed: {
      templateId: "influence",
      templateName: "INFLUENCE",
      thumbnailUrl:
        "https://framerusercontent.com/images/DUlF2K2Uw9TEBNJEXl872DkeOs.png?width=3456&height=2168",
    },
    liveSiteVideoUrl:
      "https://framerusercontent.com/assets/Ep5kKME9KoPe9aFuRe8M6GyFI.mp4",
    createdAt: new Date().toISOString(),
  },
];

async function seed() {
  console.log("Seeding templates...");
  for (const t of templates) {
    const { id, ...data } = t;
    await db.collection("templates").doc(id).set(data);
    console.log(`  -> ${id} OK`);
  }

  console.log("Seeding customers...");
  for (const c of customers) {
    const { id, ...data } = c;
    await db.collection("customers").doc(id).set(data);
    console.log(`  -> ${id} OK`);
  }

  console.log("Done!");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
