/* Content for the portfolio. Edit here: every section is rendered from these lists.
   To use real screenshots instead of the generated artwork, set `image: "assets/your-shot.webp"` on a project,
   or `video: "assets/your-clip.mp4"` (+ optional `poster: "assets/your-clip.jpg"`) for a looping motion cover. */

window.SITE = {
  name: "Ibrahim Magdy",
  role: "Product Designer · Senior UI/UX",
  email: "ibrahimagdy.o@gmail.com",
  phone: "+20 114 008 2646",
  whatsapp: "https://wa.me/201140082646",
  linkedin: "https://www.linkedin.com/in/ibrahimagdy88/",
  behance: "https://www.behance.net/ibrahimmagdy14",
  cv: "assets/Ibrahim-Magdy-CV.pdf"
};

window.PROJECTS = [
  {
    id: "travel",
    featured: true,
    name: "Bookto & the travel suite",
    short: "Travel booking platform",
    date: "2025-05",
    year: "2025 – Now",
    company: "Techeffic",
    role: "Senior UI/UX Designer",
    sector: "Travel",
    platforms: ["Responsive web", "iOS & Android", "B2B dashboards", "Partner extranet", "CRM"],
    summary: "End-to-end booking for flights, hotels, transfers and sports tickets, plus the internal tools that run it.",
    context: "At Techeffic I work on a family of live travel products that handle searching, comparing, booking and managing trips every day. Travel is full of edge cases: fare rules, room combinations, failed payments and changes after booking. My job is to make that complexity feel simple across web and mobile, in Arabic and English.",
    did: [
      "Search, listing and booking journeys for flights, hotels, transfers, activities and sports tickets",
      "Checkout, payment and booking-summary pages with fewer steps and clearer pricing",
      "Meta search, booking management and loyalty experiences",
      "Operational dashboards, admin panels, the hotel and partner extranet, and CRM",
      "A shared design system: tokens, variables, responsive components and documentation"
    ],
    challenges: [
      "Covering every state of a journey: errors, empty results, loading and sold-out fares",
      "Keeping web and mobile consistent in both RTL Arabic and English",
      "Improving products that are already live, step by step, without breaking what works"
    ],
    learned: "Designing live products at this scale changed how I work: every decision is weighed against business goals and real usage data, and the design system has to serve several products at once, not just one.",
    links: [
      { label: "bookto.com", url: "https://bookto.com/" },
      { label: "Bookto · Google Play", url: "https://play.google.com/store/apps/details?id=com.techeffic.bookto" },
      { label: "wyanaa.com", url: "https://wyanaa.com/" },
      { label: "Wyanaa · App Store", url: "https://apps.apple.com/kg/app/wyanaa/id6751186126" },
      { label: "alkhameestravel.com", url: "https://alkhameestravel.com/" },
      { label: "Alkhamees · App Store", url: "https://apps.apple.com/us/app/alkhamees/id1491148727" }
    ]
  },
  {
    id: "tasahl",
    featured: true,
    name: "Tasahl",
    short: "Gaming marketplace",
    date: "2024-12",
    year: "2024",
    company: "Fantastic Hosting",
    role: "UX/UI Designer",
    sector: "E-commerce",
    platforms: ["iOS & Android app", "Website", "Admin dashboard", "Store dashboard"],
    summary: "A multi-vendor marketplace for new and used games, consoles and accessories, where official stores and individual sellers sit side by side.",
    context: "Tasahl lets gamers buy the latest titles and hardware, buy second-hand from other players, sell their own used gear, and follow every order to the door. It was also my first fully dark interface, built on a design system with light and dark modes.",
    did: [
      "Two buying journeys: new products from verified stores, used products from individuals",
      "A selling flow for individuals, with verification and activation",
      "Store pages, product details, advanced search and filters",
      "Cart and checkout across several stores, each with its own shipping fee",
      "Order states, shipment tracking, ratings for products and sellers",
      "One design system with light and dark modes for mobile, web and dashboards"
    ],
    challenges: [
      "Mixing official stores and individuals in one marketplace without confusing buyers",
      "A multi-store cart that calculates shipping per store",
      "Dark UI that keeps product imagery and text easy to read",
      "Consistency between the app and the website"
    ],
    learned: "Multi-vendor marketplaces, C2C and B2C selling, complex search and filtering, and running a dark mode across an entire system.",
    links: []
  },
  {
    id: "ratio",
    featured: true,
    name: "Ratio",
    short: "Coffee chain operations",
    date: "2024-06",
    year: "2024",
    company: "Fantastic Hosting",
    role: "UX/UI Designer",
    sector: "Food & beverage",
    platforms: ["Corporate website", "Employee app", "Management dashboard"],
    summary: "A connected operations ecosystem for Ratio, a Saudi specialty-coffee brand with 70+ branches.",
    context: "Ratio is expanding inside and outside Saudi Arabia. The goal was one digital system for its internal operations and a public website that carries the brand.",
    did: [
      "A corporate website that reflects the brand and its values",
      "An employee app for attendance, leave requests and daily tasks",
      "A management dashboard to follow staff and branch performance"
    ],
    challenges: [
      "One experience that spans a public website and internal tools",
      "Interfaces that stay simple for busy branch staff and still serve management",
      "Turning a well-known brand into a consistent product across every surface"
    ],
    learned: "Internal products have different priorities from customer products: speed, efficiency and fewer taps for repeated daily tasks.",
    links: [
      { label: "ratio.sa", url: "https://ratio.sa/" },
      { label: "Ratio HR · App Store", url: "https://apps.apple.com/sa/app/ratio-hr/id6615082136" }
    ]
  },
  {
    id: "igold",
    featured: true,
    video: "assets/igold-cover.mp4",
    poster: "assets/igold-cover.jpg",
    shots: {
      context: [
        { src: "assets/igold/igold-ia.webp", w: 1024, h: 859, size: "full",
          cap: "Merchant app structure: every path from sign-in to products, pricing modes, orders and reports.",
          capAr: "هيكل تطبيق التاجر: كل المسارات من تسجيل الدخول إلى المنتجات وأنواع التسعير والطلبات والتقارير." }
      ],
      work: [
        { src: "assets/igold/igold-brand.webp", w: 918, h: 1024, size: "full",
          cap: "Brand foundations: IBM Plex Sans and a palette built around gold.",
          capAr: "أساسيات الهوية: خط IBM Plex Sans ولوحة ألوان مبنية حول الذهب." },
        { src: "assets/igold/igold-customer-app.webp", w: 600, h: 599, size: "half",
          cap: "Customer app: browsing collections and a cart split by merchant.",
          capAr: "تطبيق العميل: تصفح المجموعات وسلة مقسّمة حسب التاجر." },
        { src: "assets/igold/igold-merchant-app.webp", w: 600, h: 599, size: "half",
          cap: "Merchant role: sales at a glance and orders to accept or reject.",
          capAr: "دور التاجر: المبيعات بنظرة سريعة وطلبات للقبول أو الرفض." },
        { src: "assets/igold/igold-dashboard.webp", w: 620, h: 817, size: "narrow",
          cap: "Merchant dashboard: POS, sales, products and stock in one workspace.",
          capAr: "لوحة تحكم التاجر: نقطة البيع والمبيعات والمنتجات والمخزون في مساحة واحدة." }
      ],
      hard: [
        { src: "assets/igold/igold-two-roles.webp", w: 535, h: 967, size: "narrow",
          cap: "One app, two roles: a single sign-in with a merchant toggle instead of two separate apps.",
          capAr: "تطبيق واحد ودوران: تسجيل دخول واحد مع زر للتحويل إلى التاجر بدلاً من تطبيقين منفصلين." },
        { src: "assets/igold/igold-pricing.webp", w: 1024, h: 836, size: "full",
          cap: "Add product: the form reshapes itself around the pricing mode the merchant picks.",
          capAr: "إضافة منتج: النموذج يتغير حسب نوع التسعير الذي يختاره التاجر." }
      ]
    },
    name: "iGold",
    short: "Jewelry commerce & POS",
    date: "2024-03",
    year: "2024",
    company: "Fantastic Hosting",
    role: "Brand & UX/UI Designer",
    sector: "Commerce",
    platforms: ["Brand identity", "Customer app", "Merchant app", "Merchant dashboard with POS", "Platform admin"],
    summary: "A platform that connects gold merchants with customers, with the point-of-sale and inventory tools to run a jewelry store.",
    context: "iGold is more than a shop. It covers browsing and buying jewelry, and behind it, a full system for gold stores: products, orders, stock and sales, through tools built for merchants.",
    did: [
      "Brand identity that signals luxury and trust",
      "Customer app for browsing and buying jewelry",
      "Merchant app for products and orders",
      "Merchant dashboard with POS, inventory and sales management",
      "Admin dashboard for the platform team"
    ],
    challenges: [
      "Serving customers, merchants and admins inside one platform",
      "Fitting complex trade operations into simple screens",
      "Inventory and sales tools that respect how gold is sold: by karat and weight"
    ],
    learned: "The customer experience and the merchant's operations are one system. Good design creates value for every side of it.",
    links: []
  },
  {
    id: "highway",
    featured: true,
    name: "Highway",
    short: "Ride-sharing & delivery",
    date: "2023-09",
    year: "2023 – 2024",
    company: "Fantastic Hosting",
    role: "UX/UI Designer",
    sector: "Mobility",
    platforms: ["Passenger app", "Driver app", "Unified app (v2)"],
    summary: "Intercity ride-sharing that also moves parcels, furniture, pets and water, in one app for drivers and passengers.",
    context: "Highway uses trips that are already happening: drivers fill empty seats and space, passengers and senders pay less, and the platform takes a commission on each trip.",
    did: [
      "Passenger and driver journeys, from creating or finding a trip to completing it",
      "v2 (June 2024): new services for furniture, pets, water and parcel delivery",
      "v2: merged the two apps into one, with a switch between driver and passenger mode"
    ],
    challenges: [
      "Matching two sides with different goals in real time",
      "A structure flexible enough to add new services without a redesign"
    ],
    learned: "My first matching platform. It taught me that a designer's job continues after launch, as the product grows with its users.",
    links: []
  },
  {
    id: "braheem",
    featured: true,
    name: "Al Braheem",
    short: "Auto-service operating system",
    date: "2022-02",
    year: "2022",
    company: "Fantastic Hosting",
    role: "UX/UI Designer",
    sector: "Automotive",
    platforms: ["Customer app", "Tow-driver app", "Management dashboard", "Accounting dashboard", "HR dashboard", "Reception tablet", "Technician tablet", "Insurance portal"],
    summary: "Eight connected products that run a car-maintenance company, from the customer's booking to handing back the keys.",
    context: "Al Braheem needed one digital system for every step of its service centers: receiving the customer, opening a job, routing the car to technicians, and delivering it back, with insurance companies following their clients' cars.",
    did: [
      "Customer app: maintenance booking, live car status, towing requests and car rental",
      "Tow-driver app for handling transport requests",
      "Reception tablet app to open job cards and route cars to technicians",
      "Technician tablet app to start jobs, update status and log time",
      "Management, accounting and HR dashboards",
      "A portal for partner insurance companies to follow cases and add notes"
    ],
    challenges: [
      "A different experience for each role while the whole system stays connected",
      "Organizing a very large number of screens and features",
      "Learning how a service center works and turning it into a simple digital flow"
    ],
    learned: "Understand the business workflow before designing anything, and plan a big system as connected products.",
    links: []
  },
  {
    id: "adelco",
    featured: true,
    name: "Adelco",
    short: "Grocery distribution system",
    date: "2022-06",
    year: "2022",
    company: "Fantastic Hosting",
    role: "Lead UX/UI Designer",
    sector: "Distribution",
    platforms: ["Customer app", "Delivery app", "Warehouse tablet app", "Employee app", "Responsive store", "ERP"],
    summary: "A connected system for a food distribution company: ordering, delivery, warehouse picking, staff and ERP.",
    context: "Adelco sells and distributes food products. Before designing I ran many sessions with the owners to understand the business, then wrote my first delivery plan, splitting the project into phases with a timeline per product.",
    did: [
      "Customer app and a responsive online store for web, tablet and mobile",
      "Delivery app for drivers",
      "Warehouse tablet app for picking and preparing orders",
      "Internal employee app for attendance and leave",
      "ERP screens for internal operations",
      "A style guide to keep every product visually consistent"
    ],
    challenges: [
      "Six products with different users and one shared backbone",
      "Bringing structure to a project this size for the first time"
    ],
    learned: "My first structured process: competitor analysis, market and user research, information architecture, wireframes, then UI. I've worked this way ever since.",
    links: []
  },
  {
    id: "madroos",
    featured: true,
    name: "Madroos",
    short: "Fintech with partner banks",
    date: "2023-03",
    year: "2022 – 2024",
    company: "Cashpoint",
    role: "UX Designer (part-time)",
    sector: "Fintech",
    platforms: ["Customer app", "Bank employee app", "Bank dashboard", "Admin dashboard"],
    summary: "Apply for personal finance, mortgages, credit cards and debt settlement with partner banks, then track every request.",
    context: "Madroos works with banks to offer financing products and a full system to manage the requests behind them, including credit score tracking for customers.",
    did: [
      "Application journeys for each financial product",
      "Request tracking and credit score screens",
      "An app for bank employees to review and process requests",
      "Dashboards for banks and for the platform admin",
      "One connected experience across customers, banks and admins"
    ],
    challenges: [
      "Turning long, document-heavy applications into clear steps",
      "Building trust when people share sensitive financial data"
    ],
    learned: "Financial products need clarity first. Every step should explain what happens next and why the data is needed.",
    links: []
  },

  /* Archive: shown in the index and the case-study drawer */
  {
    id: "mohandes", name: "Al Mohandes", short: "AI recruitment for engineers", date: "2025-03", year: "2025",
    company: "Fantastic Hosting", role: "UX/UI Designer", sector: "Recruitment",
    platforms: ["Engineer app", "Company app"],
    summary: "An AI-powered hiring platform that matches engineers with companies by skills and experience.",
    did: ["User flows for both apps", "Profiles, CVs and skills management", "Job and project posting, applications and candidate review", "A design system shared by both apps", "Empty, error and loading states", "Developer handoff and build follow-up"],
    challenges: ["Two different audiences with one consistent identity", "Designing around AI recommendations for jobs and candidates"],
    learned: "Two-sided marketplaces, multi-role products and designing with AI results in the flow.",
    links: []
  },
  {
    id: "carrier", name: "Intercity vehicle transport", short: "Car shipping marketplace", date: "2025-01", year: "2025",
    company: "Fantastic Hosting", role: "UX/UI Designer", sector: "Logistics",
    platforms: ["Customer app", "Carrier app"],
    summary: "Book a truck to move your car between cities, track it live, and let carriers manage jobs and earnings.",
    did: ["Service choice: standard, express, enclosed and hydraulic express", "Order lifecycle from booking to delivery, with live tracking", "Carrier side: nearby requests, accept or decline, navigation", "In-app wallet, earnings and withdrawals", "Order history, profile and FAQ"],
    challenges: ["Making transport types easy to compare", "A tracking flow that is clear at every stage", "Money flows: earnings, wallet and withdrawals"],
    learned: "End-to-end service journeys, order tracking and digital wallets in logistics products.",
    links: []
  },
  {
    id: "amen", name: "Amen", short: "School attendance with QR", date: "2024-05", year: "2024",
    company: "Fantastic Hosting", role: "UX/UI Designer", sector: "Education",
    platforms: ["Teacher app", "Parent app", "Admin dashboard"],
    summary: "QR student ID cards that log arrivals, departures and school-bus trips in real time, with instant updates to parents.",
    did: ["Fast scan-and-log flows for teachers and supervisors", "A parent app with live status and notifications", "An admin dashboard to add schools and manage the system"],
    challenges: ["Speed and accuracy in a busy school day", "Tracking each student across gates and buses"],
    learned: "Real-time systems, and how much it matters to cut steps from tasks people repeat many times a day.",
    links: []
  },
  {
    id: "fantastic", name: "Fantastic Hosting website", short: "Corporate website redesign", date: "2023-12", year: "2023",
    company: "Fantastic Hosting", role: "UX/UI Designer", sector: "Web hosting",
    platforms: ["Website"],
    summary: "A full redesign of the Saudi hosting, domains and web-development company's website.",
    did: ["Home, about, services, solutions, careers and contact pages", "Clearer content structure and faster paths to services", "Responsive across devices"],
    challenges: ["Balancing marketing goals with ease of use"],
    learned: "Organizing a lot of content inside a simple browsing experience.",
    links: [{ label: "f4h.com.sa", url: "https://f4h.com.sa/" }]
  },
  {
    id: "heavyhub", name: "Heavy Hub", short: "Construction equipment marketplace", date: "2023-06", year: "2022 – 2024",
    company: "Cashpoint", role: "UX Designer (part-time)", sector: "Construction",
    platforms: ["Customer app", "Admin dashboard"],
    summary: "Buy or rent anything from hand tools to cranes, winches and heavy carriers.",
    did: ["Equipment search and discovery", "Purchase flow and order management", "Admin panel for companies, equipment and payments"],
    challenges: ["Product discovery across very different equipment sizes"],
    learned: "Marketplaces with business accounts and inventory behind them.",
    links: []
  },
  {
    id: "mohamikom", name: "Mohmmecom", short: "Legal consultations marketplace", date: "2023-07", year: "2023",
    company: "Fantastic Hosting", role: "UX/UI Designer", sector: "Legal",
    platforms: ["Client app", "Lawyer app", "Admin dashboard"],
    summary: "Clients find legal advice and pay to consult lawyers; the platform shares commission with the lawyers.",
    did: ["Sign-up, legal service browsing and consultation requests", "Request tracking and account management", "The lawyer side: requests, scheduling and operations"],
    challenges: ["Two sides with different needs in one platform", "A simple path to request legal advice", "An interface that feels trustworthy and professional"],
    learned: "Two-sided marketplaces and designing around a revenue model.",
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.f4h.mohamecom" }]
  },
  {
    id: "rafaa", name: "Rafaa", short: "Wedding hall bookings", date: "2023-07", year: "2023",
    company: "Fantastic Hosting", role: "Brand & UX/UI Designer", sector: "Events",
    platforms: ["Brand identity", "Website", "Booking dashboard", "Booking page"],
    summary: "Booking management for wedding-hall owners, with an online booking page for their customers.",
    did: ["Identity and website", "Dashboard for hall owners", "A booking flow rebuilt for how events are booked"],
    challenges: ["Same idea as Jenan, different users and scenarios"],
    learned: "Reusing experience means reusing principles, not copying solutions.",
    links: []
  },
  {
    id: "vrt", name: "Virtual Reality Training", short: "Identity & corporate website", date: "2023-05", year: "2023",
    company: "Fantastic Hosting", role: "Brand & Web Designer", sector: "VR training",
    platforms: ["Brand identity", "Website"],
    summary: "Identity and website for a VR training company, official agent of VRST in Saudi Arabia.",
    did: ["Visual identity", "A corporate website that explains technical services simply"],
    challenges: ["Making complex technology easy to understand"],
    learned: "Translating technical services into a clear browsing experience.",
    links: []
  },
  {
    id: "fantasy", name: "Fantasy Reality", short: "Fantasy game for a TV show", date: "2023-04", year: "2023",
    company: "Fantastic Hosting", role: "UX/UI Designer", sector: "Entertainment",
    platforms: ["Player website", "Admin dashboard"],
    summary: "Players pick contestants from a TV show and score points automatically from their results.",
    did: ["Contestant selection", "Leaderboards and results", "Game admin dashboard"],
    challenges: ["Keeping players engaged week after week"],
    learned: "Engagement products and presenting stats so people keep coming back.",
    links: []
  },
  {
    id: "fork", name: "Fork", short: "QR ordering & payment", date: "2023-03", year: "2023",
    company: "Fantastic Hosting", role: "Brand & UX/UI Designer", sector: "Restaurants",
    platforms: ["Brand identity", "Customer web app"],
    summary: "Scan the QR on the table to browse the menu, order, pay, split the bill with friends and tip the staff.",
    did: ["Identity", "Menu, ordering, payment, bill splitting and tipping flows"],
    challenges: ["Removing friction where ordering and payment meet"],
    learned: "QR experiences and products where money and UX overlap.",
    links: []
  },
  {
    id: "jenan", name: "Jenan", short: "Resort bookings", date: "2023-01", year: "2023",
    company: "Fantastic Hosting", role: "Brand & UX/UI Designer", sector: "Hospitality",
    platforms: ["Brand identity", "Website", "Booking dashboard", "Booking page"],
    summary: "Booking management for rest-house and resort owners, with a shareable booking page for guests.",
    did: ["Identity", "Marketing website", "Owner dashboard", "Guest booking flow"],
    challenges: ["A smooth booking journey and an easy dashboard in one product"],
    learned: "My first project combining brand identity and UX/UI in one product.",
    links: []
  },
  {
    id: "tabibak", name: "Tabibak", short: "Clinic booking app + redesign", date: "2022-01", year: "2022",
    company: "Fantastic Hosting", role: "Designer", sector: "Healthcare",
    platforms: ["Mobile app"],
    summary: "My first product, designed on my first day, and redesigned ten months later.",
    did: ["January 2022: the full app, from references to wireframes to UI, as the only designer", "October 2022: a complete redesign with better structure, visual hierarchy and consistency"],
    challenges: ["No research, user flows or design system in v1", "No components, so every change was manual", "Web patterns like hover states used on mobile"],
    learned: "Comparing the two versions showed me how far my thinking had moved in a few months.",
    links: []
  },
  {
    id: "khwarizmi", name: "Al Khwarizmi", short: "Consultation management", date: "2022-09", year: "2022",
    company: "Fantastic Hosting", role: "UX/UI Designer", sector: "Consulting",
    platforms: ["Client portal", "Staff dashboard", "Admin dashboard"],
    summary: "Clients submit consultations and follow each one from submission to closure.",
    did: ["Requirements and user journey analysis", "Information structure and flows", "Final UI and developer handoff"],
    challenges: ["Making a multi-step workflow easy to follow"],
    learned: "Management systems: turning complex operations into simple screens.",
    links: []
  },
  {
    id: "udacity", name: "Table-tennis booking", short: "Udacity capstone", date: "2022-08", year: "2022",
    company: "Udacity Nanodegree", role: "UX Designer", sector: "Sports",
    platforms: ["Mobile app"],
    summary: "Find and book places to play table tennis. My first complete process, from research to design.",
    did: ["User interviews and surveys", "Research synthesis and report", "Flows, wireframes and UI"],
    challenges: ["Letting research drive the design decisions"],
    learned: "Design starts with the problem and the user, not the screen.",
    links: []
  }
];

window.LIVE = [
  { name: "Bookto", by: "Techeffic", links: [["Web", "https://bookto.com/"], ["Android", "https://play.google.com/store/apps/details?id=com.techeffic.bookto"]] },
  { name: "Wyanaa", by: "Techeffic", links: [["Web", "https://wyanaa.com/"], ["iOS", "https://apps.apple.com/kg/app/wyanaa/id6751186126"]] },
  { name: "Alkhamees", by: "Techeffic", links: [["Web", "https://alkhameestravel.com/"], ["iOS", "https://apps.apple.com/us/app/alkhamees/id1491148727"]] },
  { name: "Ratio", by: "Fantastic", links: [["Web", "https://ratio.sa/"], ["iOS", "https://apps.apple.com/sa/app/ratio-hr/id6615082136"]] },
  { name: "Yalla Sawa", by: "Yalla Sawa", links: [["Web", "https://yallasawa.com/"]] },
  { name: "Fantastic", by: "Fantastic", links: [["Web", "https://f4h.com.sa/"]] },
  { name: "Mohmmecom", by: "Fantastic", links: [["Android", "https://play.google.com/store/apps/details?id=com.f4h.mohamecom"]] }
];

window.EXPERIENCE = [
  {
    company: "Techeffic", title: "Senior UI/UX Designer", when: "May 2025 – Present",
    intro: "Own end-to-end UX/UI for complex B2B and B2C travel products across web and mobile, with Product, Engineering, Mobile and QA, from problem framing to implementation review.",
    points: [
      "Research & validation: competitor analysis, heuristic reviews, flow audits and interactive prototypes to find usability issues and sharpen decisions.",
      "Enterprise workflows: data-rich dashboards and admin flows for bookings, reporting, configuration and content management.",
      "Design system & accessibility: reusable components and tokens, responsive and RTL patterns, WCAG-aligned improvements."
    ]
  },
  {
    company: "Fantastic Hosting", title: "UX Designer", when: "Feb 2022 – May 2025",
    intro: "Customer-facing and internal products across SaaS, logistics, legal services and e-commerce, from information architecture and flows to prototypes, high-fidelity UI and responsive delivery.",
    points: [
      "Ratio: an operations ecosystem for a 70+ branch coffee chain.",
      "Highway: passenger and driver journeys for ride-sharing and delivery.",
      "Mohmmecom: client, lawyer and admin experiences for legal consultations.",
      "Adelco: led UX/UI across customer, delivery, warehouse and ERP products."
    ]
  },
  {
    company: "Cashpoint", title: "UX Designer, part-time", when: "Nov 2022 – Jan 2024",
    intro: "Financial and industrial products with complex workflows, where clarity and trust matter.",
    points: [
      "Madroos: journeys for personal loans, mortgages and credit score tracking.",
      "Heavy Hub: mobile marketplace and admin for heavy machinery."
    ]
  },
  {
    company: "Nahdet Misr", title: "Graphic Design Intern", when: "Oct – Dec 2021",
    intro: "Two months as a graphic designer in a professional publishing environment, working to real project requirements.",
    points: []
  }
];

window.EDUCATION = [
  ["Syntax", "Advanced UX/UI Design", "2024"],
  ["Udacity Nanodegree", "Advanced User Experience", "2022"],
  ["National Telecommunication Institute", "Graphic Design Diploma", "2021"],
  ["Cairo University", "Bachelor of Commerce", "2016 – 2019"]
];
