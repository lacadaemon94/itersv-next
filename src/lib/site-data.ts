export type Locale = "en" | "es";
export type ThemeMode = "dark" | "light";

export type NavLink = {
  href: string;
  label: string;
};

export type SocialPlatform = "x" | "facebook" | "instagram" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

type OfferCard = {
  num: string;
  tag: string;
  title: string;
  body: string;
  stack: string[];
};

type CaseCard = {
  slug: CaseStudySlug;
  kicker: string;
  title: string;
  summary: string;
  stack: string[];
  live: string;
  code: string;
  stats: Array<{ k: string; v: string }>;
  coverBg: string;
};

type PlanCard = {
  tag: string;
  title: string;
  for: string;
  price: string;
  priceSub: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

type FooterColumn = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

type LandingContent = {
  nav: {
    services: string;
    cases: string;
    plans: string;
    credibility: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    meta: string;
    titleA: string;
    titleB: string;
    sub: string;
    ctaA: string;
    ctaB: string;
  };
  tickerLabel: string;
  stats: Array<{ k: string; v: string }>;
  offers: {
    eyebrow: string;
    title: string;
    sub: string;
    cards: OfferCard[];
  };
  cases: {
    eyebrow: string;
    title: string;
    sub: string;
    live: string;
    code: string;
    read: string;
    items: CaseCard[];
  };
  plans: {
    eyebrow: string;
    title: string;
    sub: string;
    badge: string;
    items: PlanCard[];
  };
  trust: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: Array<{ k: string; v: string }>;
    stackLabel: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    sub: string;
    btn: string;
    btn2: string;
  };
  footer: {
    tagline: string;
    statusLabel: string;
    legal: string;
    legal2: string;
    cols: FooterColumn[];
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    name: string;
    email: string;
    company: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    helper: string;
  };
};

type CaseStudyContent = {
  slug: CaseStudySlug;
  num: number;
  kicker: string;
  title: string;
  summary: string;
  stack: string[];
  live: string;
  code: string;
  coverBg: string;
  meta: Array<{ k: string; v: string }>;
  heroStats: Array<{ k: string; v: string; s: string }>;
  toc: Array<{ num: string; id: string; label: string }>;
  problemTitle: string;
  problemP1: string;
  problemP2: string;
  approachTitle: string;
  approachP: string;
  architecture: string;
  archCaption: string;
  archNodes: Array<{ icon: string; label: string; accent?: boolean }>;
  buildTitle: string;
  buildSteps: Array<{ num: string; title: string; body: string }>;
  outcomeTitle: string;
  outcomeP: string;
  impactIntro: string;
  impactAreas: Array<{ k: string; v: string; detail: string }>;
  takeawaysTitle: string;
  takeaways: string[];
};

export const caseStudySlugs = [
  "whatsapp-ai-triage-engine",
  "synccore-revops-engine",
] as const;

export type CaseStudySlug = (typeof caseStudySlugs)[number];

export const contactEmail = "hola@itersv.com";
export const contactPhoneHref = "tel:+50360581739";

export const socialLinks: SocialLink[] = [
  { platform: "x", label: "X", href: "https://x.com/iter_ia" },
  { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/Itersv503" },
  { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/iter_airev/" },
  { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/itersv" },
];

export const stackTools = [
  { name: "Next.js", role: "app · web" },
  { name: "TypeScript", role: "language" },
  { name: "n8n", role: "workflows" },
  { name: "Meta Cloud API", role: "whatsapp" },
  { name: "Supabase", role: "db · auth" },
  { name: "AWS", role: "infra" },
  { name: "OpenAI · Claude", role: "llm" },
  { name: "HubSpot · Odoo", role: "crm · erp" },
  { name: "Stripe · Twilio", role: "pay · sms" },
] as const;

export const tickerStack = [
  "Next.js",
  "TypeScript",
  "n8n",
  "Meta Cloud API",
  "Supabase",
  "AWS",
  "OpenAI",
  "Claude",
  "HubSpot",
  "Odoo",
  "Stripe",
  "Twilio",
  "Postgres",
  "Vercel",
] as const;

export const landingContent: Record<Locale, LandingContent> = {
  en: {
    nav: {
      services: "Services",
      cases: "Case Studies",
      plans: "Plans",
      credibility: "Credibility",
      contact: "Contact",
      cta: "Book a Strategy Call",
    },
    hero: {
      eyebrow: "AI . Automation . Integration",
      meta: "San Salvador <-> Delaware, USA",
      titleA: "Join the AI",
      titleB: "Revolution.",
      sub: "Iter helps businesses of every size integrate practical AI into existing workflows and uncover new AI-powered processes that make the business more efficient, responsive, and effective.",
      ctaA: "View Automation Plans",
      ctaB: "Explore Sample Workflows",
    },
    tickerLabel: "Integrating AI with tools like",
    stats: [
      { k: "Avg. delivery", v: "3-6 wks" },
      { k: "Active stack", v: "12 tools" },
      { k: "Retention", v: "94%" },
      { k: "Hours saved / mo", v: "440" },
    ],
    offers: {
      eyebrow: "/ core offers",
      title: "Four productized engines.",
      sub: "Each ships in weeks, not quarters. Pick the bottleneck you want gone first — we scope the rest.",
      cards: [
        {
          num: "01",
          tag: "Messaging",
          title: "WhatsApp AI Hub",
          body: "Meta Cloud API + LLM integration to automate sales, support, and lead qualification natively inside WhatsApp — with a clear path to your team when a conversation needs judgment.",
          stack: ["Meta Cloud API", "OpenAI · Claude", "Lead routing"],
        },
        {
          num: "02",
          tag: "Architecture",
          title: "Workflow Architecture",
          body: "Custom n8n / Make automation suites syncing CRM, inventory, and billing across Odoo, HubSpot, Stripe, and Twilio — seamlessly.",
          stack: ["n8n · Make", "Odoo · HubSpot", "Stripe · Twilio"],
        },
        {
          num: "03",
          tag: "Tooling",
          title: "AI Internal Tooling",
          body: "Next.js + Postgres bespoke admin dashboards and custom RAG knowledge bases — built in weeks, not quarters.",
          stack: ["Next.js 15", "Supabase", "RAG · pgvector"],
        },
        {
          num: "04",
          tag: "Advisory",
          title: "AI Strategy & Guidance",
          body: "Practical support to identify where AI fits, choose the right tools, map implementation steps, and avoid expensive technical detours.",
          stack: ["AI audits", "Roadmaps", "Tool selection"],
        },
      ],
    },
    cases: {
      eyebrow: "/ case studies",
      title: "Sample AI workflows, built end to end.",
      sub: "Explore practical examples of how AI can fit into everyday business processes, then use them as a starting point for your own workflow.",
      live: "Live demo",
      code: "Source",
      read: "Read case study",
      items: [
        {
          slug: "whatsapp-ai-triage-engine",
          kicker: "Messaging . Sample",
          title: "WhatsApp AI Triage Workflow",
          summary: "A sample workflow for replacing manual inbox sorting: AI reads incoming WhatsApp messages, classifies intent, drafts next steps, and routes edge cases to the right person.",
          stack: ["Next.js", "Meta Cloud API", "OpenAI", "Supabase", "n8n"],
          live: "https://whatsapp-ai-triage-engine.vercel.app/",
          code: "https://github.com/lacadaemon94/whatsapp-ai-triage-engine.git",
          stats: [
            { k: "Manual sorting", v: "Reduced" },
            { k: "Context", v: "Visible" },
            { k: "Escalation", v: "Clear" },
          ],
          coverBg:
            "linear-gradient(135deg, #571fff 0%, #1fa9c9 55%, #1fffc7 100%)",
        },
        {
          slug: "synccore-revops-engine",
          kicker: "Systems . Sample",
          title: "Business Systems Sync Workflow",
          summary: "A sample workflow for replacing manual cross-checking between sales, billing, inventory, spreadsheets, POS, or any tools where business records drift apart.",
          stack: ["Next.js", "n8n", "CRM/POS", "Sheets", "Postgres"],
          live: "https://synccore-revops-engine-dashboard.vercel.app/",
          code: "https://github.com/lacadaemon94/synccore-revops-engine.git",
          stats: [
            { k: "Manual checks", v: "Reduced" },
            { k: "Mismatches", v: "Flagged" },
            { k: "Team view", v: "Unified" },
          ],
          coverBg:
            "linear-gradient(135deg, #16034e 0%, #4512db 45%, #1fffc7 100%)",
        },
      ],
    },
    plans: {
      eyebrow: "/ plans",
      title: "Start where the business feels it most.",
      sub: "Simple ways to begin, whether you need a better web presence, one manual workflow automated, or practical guidance on where AI should fit next.",
      badge: "Clear scope · Source ownership · Simple contracting",
      items: [
        {
          tag: "Fixed project · Starter",
          title: "Website or App Starter",
          for: "A polished website, landing page, or web app that makes your business look clear, modern, and trustworthy online.",
          price: "Quote",
          priceSub: "/ fixed build",
          includes: [
            "One-page website, landing page, or focused web app",
            "Copy structure that explains what you sell",
            "Mobile-first design and launch setup",
            "Contact, WhatsApp, or booking flow",
            "Flexible entry point for launches or focused builds",
          ],
          cta: "Quote my site",
        },
        {
          tag: "Fixed project",
          title: "One-Time AI Workflow Build",
          for: "One manual process turned into a working AI-assisted workflow, scoped tightly and delivered in weeks.",
          price: "Quote",
          priceSub: "/ project",
          includes: [
            "Workflow discovery and plain-English plan",
            "AI-assisted messaging, data, or admin flow",
            "Connects to the tools you already use",
            "3–4 week implementation sprint",
            "Source, documentation, and walkthrough",
          ],
          cta: "Scope a workflow",
          featured: true,
        },
        {
          tag: "Advisory",
          title: "AI Strategy & Guidance",
          for: "Practical technical guidance for owners and teams who want to use AI well without hiring a full-time technical leader.",
          price: "Quote",
          priceSub: "/ advisory",
          includes: [
            "AI opportunity audit for your business",
            "Prioritized roadmap and next steps",
            "Tool, vendor, and build-vs-buy guidance",
            "Implementation coaching for your team",
            "Monthly or quarterly strategy reviews",
          ],
          cta: "Book advisory call",
        },
      ],
    },
    trust: {
      eyebrow: "/ how we work",
      title: "Practical AI work, built close to the business.",
      body: "Iter helps teams turn real business problems into usable software, automation, and AI-assisted workflows. The work starts with the process you already have, then moves into clear scope, fast implementation, documentation, and ownership of what gets built.",
      pillars: [
        { k: "Discovery", v: "Process-first" },
        { k: "Build", v: "Web, AI, automation" },
        { k: "Delivery", v: "Clear scope" },
        { k: "Ownership", v: "Source + docs" },
      ],
      stackLabel: "Working stack",
    },
    cta: {
      eyebrow: "/ next step",
      title: "Tell me where work feels slower than it should.",
      sub: "In a short call, we look at the process, page, or system you want to improve and decide whether the right next step is a website/app build, an AI workflow project, or advisory support.",
      btn: "Book a Strategy Call",
      btn2: "+503 6058-1739",
    },
    footer: {
      tagline:
        "Practical AI, automation, and web systems for real business workflows.",
      statusLabel: "Currently taking new engagements",
      legal: "© 2026 Iter Labs. All rights reserved.",
      legal2: "Clear scope · Source ownership · Simple contracting",
      cols: [
        {
          title: "Studio",
          links: [
            { label: "Services", href: "#services" },
            { label: "Plans", href: "#plans" },
            { label: "Credibility", href: "#credibility" },
          ],
        },
        {
          title: "Work",
          links: [
            { label: "All case studies", href: "#cases" },
            {
              label: "WhatsApp Triage",
              href: "/case-studies/whatsapp-ai-triage-engine",
            },
            {
              label: "Business Systems Sync",
              href: "/case-studies/synccore-revops-engine",
            },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: contactEmail, href: `mailto:${contactEmail}` },
            { label: "+503 6058-1739", href: contactPhoneHref },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "/ strategy call",
      title: "Book a Strategy Call",
      sub: "Tell us about your bottleneck. We reply within one business day.",
      name: "Full name",
      email: "Work email",
      company: "Company",
      message: "What would you like to automate?",
      messagePlaceholder: "Starter website, AI workflow, advisory support...",
      send: "Send message",
      helper: "no spam · reply within one business day",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      cases: "Casos",
      plans: "Planes",
      credibility: "Respaldo",
      contact: "Contacto",
      cta: "Agenda una llamada",
    },
    hero: {
      eyebrow: "IA . Automatizacion . Integracion",
      meta: "San Salvador <-> Delaware, USA",
      titleA: "Únete a la",
      titleB: "Revolución IA.",
      sub: "Iter ayuda a negocios de cualquier tamaño a integrar IA práctica en sus flujos existentes y descubrir nuevos procesos con IA para trabajar con más eficiencia, respuesta y efectividad.",
      ctaA: "Ver planes",
      ctaB: "Ver flujos de muestra",
    },
    tickerLabel: "Integrando IA con herramientas como",
    stats: [
      { k: "Entrega promedio", v: "3–6 sem" },
      { k: "Stack activo", v: "12 tools" },
      { k: "Retención", v: "94%" },
      { k: "Horas ahorradas / mes", v: "440" },
    ],
    offers: {
      eyebrow: "/ ofertas centrales",
      title: "Cuatro motores productizados.",
      sub: "Cada uno se entrega en semanas, no en trimestres. Elige el cuello de botella que quieres resolver primero — del resto nos encargamos.",
      cards: [
        {
          num: "01",
          tag: "Mensajería",
          title: "WhatsApp AI Hub",
          body: "Meta Cloud API + LLM para automatizar ventas, soporte y calificación de leads dentro de WhatsApp — con una ruta clara hacia tu equipo cuando una conversación requiere criterio.",
          stack: ["Meta Cloud API", "OpenAI · Claude", "Ruteo de leads"],
        },
        {
          num: "02",
          tag: "Arquitectura",
          title: "Arquitectura de flujos",
          body: "Suites de automatización con n8n / Make que sincronizan CRM, inventario y facturación entre Odoo, HubSpot, Stripe y Twilio — sin fricción.",
          stack: ["n8n · Make", "Odoo · HubSpot", "Stripe · Twilio"],
        },
        {
          num: "03",
          tag: "Tooling",
          title: "Tooling interno con IA",
          body: "Dashboards a medida con Next.js + Postgres y bases RAG personalizadas — listos en semanas, no trimestres.",
          stack: ["Next.js 15", "Supabase", "RAG · pgvector"],
        },
        {
          num: "04",
          tag: "Asesoría",
          title: "Estrategia y guía de IA",
          body: "Acompañamiento práctico para identificar dónde encaja la IA, elegir las herramientas correctas, mapear la implementación y evitar desvíos técnicos costosos.",
          stack: ["Auditorías IA", "Roadmaps", "Selección de herramientas"],
        },
      ],
    },
    cases: {
      eyebrow: "/ casos",
      title: "Flujos de IA de muestra, creados de punta a punta.",
      sub: "Explora ejemplos prácticos de cómo la IA puede integrarse en procesos diarios del negocio y úsalos como punto de partida para tu propio flujo.",
      live: "Demo en vivo",
      code: "Codigo",
      read: "Leer caso",
      items: [
        {
          slug: "whatsapp-ai-triage-engine",
          kicker: "Mensajeria . Muestra",
          title: "Flujo de triage de WhatsApp con IA",
          summary: "Un flujo de muestra para reemplazar la clasificación manual del inbox: la IA lee mensajes de WhatsApp, clasifica intención, prepara siguientes pasos y escala los casos sensibles a la persona correcta.",
          stack: ["Next.js", "Meta Cloud API", "OpenAI", "Supabase", "n8n"],
          live: "https://whatsapp-ai-triage-engine.vercel.app/",
          code: "https://github.com/lacadaemon94/whatsapp-ai-triage-engine.git",
          stats: [
            { k: "Clasificación manual", v: "Menos" },
            { k: "Contexto", v: "Visible" },
            { k: "Escalamiento", v: "Claro" },
          ],
          coverBg:
            "linear-gradient(135deg, #571fff 0%, #1fa9c9 55%, #1fffc7 100%)",
        },
        {
          slug: "synccore-revops-engine",
          kicker: "Sistemas . Muestra",
          title: "Flujo de sincronización de sistemas",
          summary: "Un flujo de muestra para reemplazar revisiones manuales entre ventas, facturación, inventario, hojas de cálculo, POS o cualquier herramienta donde los datos del negocio se desalinean.",
          stack: ["Next.js", "n8n", "CRM/POS", "Sheets", "Postgres"],
          live: "https://synccore-revops-engine-dashboard.vercel.app/",
          code: "https://github.com/lacadaemon94/synccore-revops-engine.git",
          stats: [
            { k: "Chequeos manuales", v: "Menos" },
            { k: "Diferencias", v: "Detectadas" },
            { k: "Vista del equipo", v: "Unificada" },
          ],
          coverBg:
            "linear-gradient(135deg, #16034e 0%, #4512db 45%, #1fffc7 100%)",
        },
      ],
    },
    plans: {
      eyebrow: "/ planes",
      title: "Empieza donde más se siente en el negocio.",
      sub: "Formas simples de comenzar, ya sea que necesites mejor presencia digital, automatizar un flujo manual o guía práctica para decidir dónde usar IA.",
      badge: "Alcance claro · Código propio · Contratación simple",
      items: [
        {
          tag: "Proyecto fijo · Inicial",
          title: "Sitio o app inicial",
          for: "Un sitio, landing page o app web pulida para que tu negocio se vea claro, moderno y confiable en línea.",
          price: "Cotizar",
          priceSub: "/ entrega fija",
          includes: [
            "Sitio de una página, landing page o app enfocada",
            "Estructura de copy que explica lo que vendes",
            "Diseño mobile-first y setup de lanzamiento",
            "Flujo de contacto, WhatsApp o reservas",
            "Punto de entrada flexible para lanzamientos o builds enfocados",
          ],
          cta: "Cotizar mi sitio",
        },
        {
          tag: "Proyecto fijo",
          title: "Proyecto de flujo IA",
          for: "Un proceso manual convertido en un flujo asistido por IA, con alcance claro y entrega en semanas.",
          price: "Cotizar",
          priceSub: "/ proyecto",
          includes: [
            "Descubrimiento del flujo y plan en lenguaje claro",
            "Flujo IA para mensajes, datos o administración",
            "Conexión con las herramientas que ya usas",
            "Sprint de implementación de 3–4 semanas",
            "Código, documentación y recorrido de uso",
          ],
          cta: "Definir el flujo",
          featured: true,
        },
        {
          tag: "Asesoría",
          title: "Estrategia y guía IA",
          for: "Guía técnica práctica para dueños y equipos que quieren usar IA bien sin contratar liderazgo técnico de tiempo completo.",
          price: "Cotizar",
          priceSub: "/ asesoría",
          includes: [
            "Auditoría de oportunidades IA para tu negocio",
            "Roadmap priorizado y siguientes pasos",
            "Guía para elegir herramientas, proveedores o construir",
            "Acompañamiento de implementación para tu equipo",
            "Revisiones mensuales o trimestrales de estrategia",
          ],
          cta: "Agenda asesoría",
        },
      ],
    },
    trust: {
      eyebrow: "/ cómo trabajamos",
      title: "IA práctica, construida cerca del negocio.",
      body: "Iter ayuda a convertir problemas reales del negocio en software usable, automatización y flujos asistidos por IA. El trabajo empieza con el proceso que ya tienes, luego pasa a alcance claro, implementación rápida, documentación y propiedad sobre lo construido.",
      pillars: [
        { k: "Descubrimiento", v: "Primero el proceso" },
        { k: "Construcción", v: "Web, IA, automatización" },
        { k: "Entrega", v: "Alcance claro" },
        { k: "Propiedad", v: "Código + docs" },
      ],
      stackLabel: "Stack de trabajo",
    },
    cta: {
      eyebrow: "/ siguiente paso",
      title: "Cuéntame dónde el trabajo se siente más lento de lo que debería.",
      sub: "En una llamada corta revisamos el proceso, página o sistema que quieres mejorar y decidimos si el siguiente paso es un sitio/app, un proyecto de flujo IA o asesoría.",
      btn: "Agenda tu llamada",
      btn2: "+503 6058-1739",
    },
    footer: {
      tagline:
        "IA práctica, automatización y sistemas web para flujos reales del negocio.",
      statusLabel: "Tomando nuevos engagements",
      legal: "© 2026 Iter Labs. Todos los derechos reservados.",
      legal2: "Alcance claro · Código propio · Contratación simple",
      cols: [
        {
          title: "Studio",
          links: [
            { label: "Servicios", href: "#services" },
            { label: "Planes", href: "#plans" },
            { label: "Respaldo", href: "#credibility" },
          ],
        },
        {
          title: "Trabajo",
          links: [
            { label: "Todos los casos", href: "#cases" },
            {
              label: "WhatsApp Triage",
              href: "/case-studies/whatsapp-ai-triage-engine",
            },
            {
              label: "Sincronización de sistemas",
              href: "/case-studies/synccore-revops-engine",
            },
          ],
        },
        {
          title: "Contacto",
          links: [
            { label: contactEmail, href: `mailto:${contactEmail}` },
            { label: "+503 6058-1739", href: contactPhoneHref },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "/ llamada estrategica",
      title: "Agenda una llamada",
      sub: "Cuéntanos sobre tu cuello de botella. Respondemos en un día hábil.",
      name: "Nombre completo",
      email: "Email de trabajo",
      company: "Empresa",
      message: "¿Qué te gustaría automatizar?",
      messagePlaceholder: "Sitio inicial, flujo IA, asesoría...",
      send: "Enviar",
      helper: "sin spam · respondemos en un día hábil",
    },
  },
};

export const caseStudyContent: Record<
  CaseStudySlug,
  Record<Locale, CaseStudyContent>
> = {
  "whatsapp-ai-triage-engine": {
    en: {
      slug: "whatsapp-ai-triage-engine",
      num: 1,
      kicker: "Messaging . Sample workflow . Open source",
      title: "WhatsApp AI Triage Workflow",
      summary:
        "A sample workflow for businesses that still sort sales, support, scheduling, and follow-up messages by hand. It shows how AI can classify intent, prepare context, draft next steps, and bring in the right person when judgment matters.",
      stack: [
        "Next.js 15",
        "Meta Cloud API",
        "OpenAI",
        "Supabase",
        "n8n",
        "TypeScript",
      ],
      live: "https://whatsapp-ai-triage-engine.vercel.app/",
      code: "https://github.com/lacadaemon94/whatsapp-ai-triage-engine.git",
      coverBg:
        "linear-gradient(135deg, #571fff 0%, #1fa9c9 55%, #1fffc7 100%)",
      meta: [
        { k: "Pattern", v: "AI-assisted inbox triage" },
        { k: "Best fit", v: "Sales, support, booking, follow-up" },
        { k: "Build path", v: "4-week implementation sprint" },
        { k: "Proof", v: "Live sample + source available" },
      ],
      heroStats: [
        { k: "Manual sorting", v: "Reduced", s: "AI handles first-pass classification" },
        { k: "Response flow", v: "Faster", s: "drafts and routing are prepared sooner" },
        { k: "Team context", v: "Visible", s: "intent, history, confidence, and next step" },
        { k: "Control", v: "Human-led", s: "people decide on sensitive or unclear cases" },
      ],
      toc: [
        { num: "01", id: "problem", label: "Problem" },
        { num: "02", id: "approach", label: "AI pattern" },
        { num: "03", id: "build", label: "How it works" },
        { num: "04", id: "result", label: "Potential impact" },
        { num: "05", id: "takeaways", label: "Fit notes" },
      ],
      problemTitle: "If WhatsApp is your front door, manual triage becomes the bottleneck.",
      problemP1:
        "A common small-business pattern is one shared WhatsApp number where sales questions, support issues, appointment requests, payment follow-ups, and random context all arrive together. Someone has to read each message, decide what it means, find the right information, and send it to the right place.",
      problemP2:
        "The issue is not that the team is slow. The issue is that repetitive sorting steals attention from the conversations that actually need care, nuance, and judgment.",
      approachTitle:
        "Use AI as a first-pass coordinator, not as the owner of the relationship.",
      approachP:
        "The workflow reads each new message, classifies the intent, checks useful business context, and prepares the next step. Simple messages can receive a suggested or automated reply. Sensitive, unclear, or high-value conversations are routed to the right person with a summary, confidence score, and suggested action.",
      architecture: "Architecture",
      archCaption: "WhatsApp -> intent -> context -> draft/action -> team review",
      archNodes: [
        { icon: "WA", label: "WhatsApp Cloud", accent: true },
        { icon: "AI", label: "Intent + confidence" },
        { icon: "CTX", label: "Customer context" },
        { icon: "ACT", label: "Draft or action", accent: true },
        { icon: "TEAM", label: "Team review" },
      ],
      buildTitle: "How the workflow works.",
      buildSteps: [
        {
          num: "01",
          title: "Capture the message",
          body: "The Meta Cloud API webhook receives the WhatsApp message, normalizes the payload, stores the conversation event, and keeps a clean record before any AI decision is made.",
        },
        {
          num: "02",
          title: "Classify intent and urgency",
          body: "An LLM labels the message as sales, support, booking, billing, follow-up, or another business-specific category. It also returns confidence, urgency, language, and missing information.",
        },
        {
          num: "03",
          title: "Prepare the next step",
          body: "The workflow can look up CRM context, previous messages, availability, or order status, then draft a reply, create a task, update a record, or trigger an n8n automation.",
        },
        {
          num: "04",
          title: "Route with context",
          body: "If the case needs judgment, the right person receives the summary, suggested reply, source message, confidence score, and audit trail instead of a bare forwarded chat.",
        },
      ],
      outcomeTitle: "Potential improvements when this replaces manual sorting.",
      outcomeP:
        "The benefit is not a guaranteed metric; it depends on message volume, team habits, tools, and how much of the workflow is safe to automate. In the right setting, this pattern can reduce repetitive inbox sorting, make replies more consistent, keep context attached to every decision, and make escalations easier to review.",
      impactIntro:
        "The financial upside is indirect but real: less time spent sorting messages, fewer leads or support requests left waiting, and better follow-through on conversations that already reached the business.",
      impactAreas: [
        {
          k: "Operations",
          v: "Less inbox drag",
          detail: "The team spends less time deciding where messages go and more time resolving the conversations that matter.",
        },
        {
          k: "Customer experience",
          v: "Earlier useful replies",
          detail: "Sales, support, and booking messages can get a first useful response or prepared next step sooner.",
        },
        {
          k: "Revenue protection",
          v: "Fewer stalled opportunities",
          detail: "New leads, payment questions, and follow-ups are less likely to sit unnoticed in a shared inbox.",
        },
        {
          k: "Management visibility",
          v: "Clearer handoffs",
          detail: "Intent, confidence, suggested action, and conversation history stay attached when a person takes over.",
        },
      ],
      takeawaysTitle: "Where AI fits.",
      takeaways: [
        "AI is useful for classification, summarization, drafting, routing, and repetitive follow-up.",
        "People should stay in charge of sensitive conversations, pricing exceptions, complaints, and unclear intent.",
        "Confidence scores and audit trails make the workflow easier to review and improve over time.",
        "The best version connects to the tools the business already uses: CRM, calendar, support desk, payments, or inventory.",
      ],
    },
    es: {
      slug: "whatsapp-ai-triage-engine",
      num: 1,
      kicker: "Mensajeria . Flujo de muestra . Open source",
      title: "Flujo de triage de WhatsApp con IA",
      summary:
        "Un flujo de muestra para negocios que todavia clasifican a mano mensajes de ventas, soporte, agenda y seguimiento. Muestra como la IA puede clasificar intencion, preparar contexto, redactar siguientes pasos y sumar a la persona correcta cuando hace falta criterio.",
      stack: [
        "Next.js 15",
        "Meta Cloud API",
        "OpenAI",
        "Supabase",
        "n8n",
        "TypeScript",
      ],
      live: "https://whatsapp-ai-triage-engine.vercel.app/",
      code: "https://github.com/lacadaemon94/whatsapp-ai-triage-engine.git",
      coverBg:
        "linear-gradient(135deg, #571fff 0%, #1fa9c9 55%, #1fffc7 100%)",
      meta: [
        { k: "Patron", v: "Triage de inbox asistido por IA" },
        { k: "Encaja con", v: "Ventas, soporte, agenda, seguimiento" },
        { k: "Ruta", v: "Sprint de implementacion de 4 semanas" },
        { k: "Prueba", v: "Muestra en vivo + codigo disponible" },
      ],
      heroStats: [
        { k: "Clasificacion manual", v: "Menos", s: "la IA hace el primer filtro" },
        { k: "Flujo de respuesta", v: "Mas rapido", s: "borradores y ruteo listos antes" },
        { k: "Contexto del equipo", v: "Visible", s: "intencion, historial, confianza y siguiente paso" },
        { k: "Control", v: "Humano", s: "las personas deciden en casos sensibles o poco claros" },
      ],
      toc: [
        { num: "01", id: "problem", label: "Problema" },
        { num: "02", id: "approach", label: "Patron IA" },
        { num: "03", id: "build", label: "Como funciona" },
        { num: "04", id: "result", label: "Impacto potencial" },
        { num: "05", id: "takeaways", label: "Notas de encaje" },
      ],
      problemTitle:
        "Si WhatsApp es tu puerta de entrada, el triage manual se vuelve el cuello de botella.",
      problemP1:
        "Un patron comun en negocios pequenos es tener un numero compartido de WhatsApp donde entran preguntas de ventas, soporte, citas, pagos, seguimiento y contexto suelto. Alguien tiene que leer cada mensaje, entender que significa, buscar informacion y mandarlo al lugar correcto.",
      problemP2:
        "El problema no es que el equipo sea lento. El problema es que clasificar mensajes repetitivos consume atencion que deberia ir a las conversaciones que si necesitan cuidado, matiz y criterio.",
      approachTitle:
        "Usar IA como coordinador inicial, no como duena de la relacion.",
      approachP:
        "El flujo lee cada mensaje nuevo, clasifica la intencion, revisa contexto util del negocio y prepara el siguiente paso. Los mensajes simples pueden recibir una respuesta sugerida o automatizada. Los casos sensibles, confusos o de alto valor se envian a la persona correcta con resumen, nivel de confianza y accion sugerida.",
      architecture: "Arquitectura",
      archCaption:
        "WhatsApp -> intencion -> contexto -> borrador/accion -> revision del equipo",
      archNodes: [
        { icon: "WA", label: "WhatsApp Cloud", accent: true },
        { icon: "AI", label: "Intencion + confianza" },
        { icon: "CTX", label: "Contexto del cliente" },
        { icon: "ACT", label: "Borrador o accion", accent: true },
        { icon: "EQ", label: "Revision del equipo" },
      ],
      buildTitle: "Como funciona el flujo.",
      buildSteps: [
        {
          num: "01",
          title: "Capturar el mensaje",
          body: "El webhook de Meta Cloud API recibe el mensaje de WhatsApp, normaliza el payload, guarda el evento de conversacion y deja un registro limpio antes de tomar cualquier decision con IA.",
        },
        {
          num: "02",
          title: "Clasificar intencion y urgencia",
          body: "Un LLM etiqueta el mensaje como ventas, soporte, agenda, cobros, seguimiento u otra categoria del negocio. Tambien devuelve confianza, urgencia, idioma e informacion faltante.",
        },
        {
          num: "03",
          title: "Preparar el siguiente paso",
          body: "El flujo puede consultar CRM, mensajes anteriores, disponibilidad o estado de pedido, y luego redactar una respuesta, crear una tarea, actualizar un registro o disparar una automatizacion en n8n.",
        },
        {
          num: "04",
          title: "Rutear con contexto",
          body: "Si el caso necesita criterio, la persona correcta recibe resumen, respuesta sugerida, mensaje fuente, nivel de confianza y auditoria en lugar de solo un chat reenviado.",
        },
      ],
      outcomeTitle: "Mejoras potenciales al reemplazar clasificacion manual.",
      outcomeP:
        "El beneficio no es una metrica garantizada; depende del volumen de mensajes, los habitos del equipo, las herramientas y que parte del flujo sea seguro automatizar. En el contexto correcto, este patron puede reducir clasificacion repetitiva, hacer las respuestas mas consistentes, mantener contexto en cada decision y facilitar la revision de escalaciones.",
      impactIntro:
        "El impacto financiero es indirecto pero real: menos tiempo clasificando mensajes, menos leads o solicitudes esperando, y mejor seguimiento de conversaciones que ya llegaron al negocio.",
      impactAreas: [
        {
          k: "Operaciones",
          v: "Menos friccion en inbox",
          detail: "El equipo pasa menos tiempo decidiendo a donde va cada mensaje y mas tiempo resolviendo las conversaciones importantes.",
        },
        {
          k: "Experiencia del cliente",
          v: "Respuestas utiles antes",
          detail: "Mensajes de ventas, soporte y agenda pueden recibir una primera respuesta util o un siguiente paso preparado con mas rapidez.",
        },
        {
          k: "Proteccion de ingresos",
          v: "Menos oportunidades detenidas",
          detail: "Leads nuevos, preguntas de pago y seguimientos tienen menos probabilidad de quedarse perdidos en un inbox compartido.",
        },
        {
          k: "Visibilidad gerencial",
          v: "Escalamientos claros",
          detail: "Intencion, confianza, accion sugerida e historial viajan juntos cuando una persona toma la conversacion.",
        },
      ],
      takeawaysTitle: "Donde encaja la IA.",
      takeaways: [
        "La IA ayuda con clasificacion, resumen, redaccion, ruteo y seguimiento repetitivo.",
        "Las personas deben conservar las conversaciones sensibles, excepciones de precio, quejas e intenciones poco claras.",
        "Los niveles de confianza y la auditoria hacen que el flujo sea mas facil de revisar y mejorar.",
        "La mejor version se conecta a las herramientas que el negocio ya usa: CRM, calendario, soporte, pagos o inventario.",
      ],
    },
  },
  "synccore-revops-engine": {
    en: {
      slug: "synccore-revops-engine",
      num: 2,
      kicker: "Systems . Sample workflow . Open source",
      title: "Business Systems Sync Workflow",
      summary:
        "A sample workflow for businesses that still reconcile sales, billing, inventory, spreadsheets, POS exports, and customer records by hand. It shows how automation and AI can compare records, flag mismatches, explain what changed, and route cleanup work to the right person.",
      stack: [
        "Next.js 15",
        "n8n",
        "CRM / POS",
        "Spreadsheets",
        "Postgres",
        "TypeScript",
      ],
      live: "https://synccore-revops-engine-dashboard.vercel.app/",
      code: "https://github.com/lacadaemon94/synccore-revops-engine.git",
      coverBg:
        "linear-gradient(135deg, #16034e 0%, #4512db 45%, #1fffc7 100%)",
      meta: [
        { k: "Pattern", v: "AI-assisted system reconciliation" },
        { k: "Best fit", v: "Sales, billing, inventory, POS, sheets" },
        { k: "Build path", v: "4-6 week implementation sprint" },
        { k: "Proof", v: "Live sample + source available" },
      ],
      heroStats: [
        { k: "Manual checking", v: "Reduced", s: "records are compared automatically" },
        { k: "Mismatch review", v: "Focused", s: "the team sees what needs attention" },
        { k: "Business context", v: "Connected", s: "sales, stock, billing, and customer data" },
        { k: "Control", v: "Reviewable", s: "people approve sensitive changes" },
      ],
      toc: [
        { num: "01", id: "problem", label: "Problem" },
        { num: "02", id: "approach", label: "AI pattern" },
        { num: "03", id: "build", label: "How it works" },
        { num: "04", id: "result", label: "Potential impact" },
        { num: "05", id: "takeaways", label: "Fit notes" },
      ],
      problemTitle:
        "When every tool has a different answer, the business starts running on manual checks.",
      problemP1:
        "A common small-business pattern is simple but painful: sales live in a spreadsheet or CRM, invoices live in accounting software, inventory lives in a POS or stock sheet, and customer follow-ups happen through WhatsApp or email. None of those tools are wrong by themselves, but they rarely agree at the exact moment the team needs an answer.",
      problemP2:
        "That creates invisible work. Someone has to compare rows, check invoices, verify stock, update customer notes, and decide which record should win before a quote, delivery, payment, or follow-up can move forward.",
      approachTitle:
        "Use automation to compare records, then AI to explain and prioritize the exceptions.",
      approachP:
        "The workflow connects the tools a business already uses, listens for updates, and writes each change into a shared history. Rules handle predictable sync work. AI helps summarize mismatches, explain likely causes, suggest next actions, and route unclear cases for human review.",
      architecture: "Architecture",
      archCaption:
        "Business tools -> shared history -> rules + AI review -> team dashboard",
      archNodes: [
        { icon: "CRM", label: "Sales records", accent: true },
        { icon: "BILL", label: "Billing/POS" },
        { icon: "INV", label: "Inventory sheet" },
        { icon: "AI", label: "Rules + AI review", accent: true },
        { icon: "UI", label: "Team dashboard" },
      ],
      buildTitle: "How the workflow works.",
      buildSteps: [
        {
          num: "01",
          title: "Connect the record sources",
          body: "The workflow connects to the business tools in use: a CRM, spreadsheet, accounting system, POS, inventory sheet, ecommerce export, or even a scheduled CSV upload.",
        },
        {
          num: "02",
          title: "Create a shared history",
          body: "Each update is stored in a shared log so the system can compare what changed, when it changed, and which tool produced the latest version.",
        },
        {
          num: "03",
          title: "Detect mismatches and explain them",
          body: "Rules catch common differences like stock, invoice status, payment state, customer name, order stage, or price. AI can summarize the mismatch and suggest what the team should check next.",
        },
        {
          num: "04",
          title: "Route cleanup work",
          body: "The dashboard shows the team what needs attention. Notifications can go wherever the business already works: WhatsApp, email, an internal dashboard, or a simple daily digest.",
        },
      ],
      outcomeTitle: "Potential improvements when manual reconciliation becomes a workflow.",
      outcomeP:
        "The benefit is not tied to any one platform. It depends on how many systems the business uses, how often records change, and how much risk comes from stale information. In the right setting, this pattern can reduce manual cross-checking, prevent small data issues from becoming customer problems, and make follow-up work easier to assign.",
      impactIntro:
        "The biggest gain is less hidden cleanup work. When systems agree sooner, the business can quote, bill, fulfill, and follow up with fewer manual checks.",
      impactAreas: [
        {
          k: "Operations",
          v: "Less reconciliation",
          detail: "Teams spend less time comparing spreadsheets, CRM records, invoices, and inventory views by hand.",
        },
        {
          k: "Cash flow",
          v: "Cleaner billing",
          detail: "Invoice, payment, and stock mismatches are easier to catch before they delay fulfillment or collection.",
        },
        {
          k: "Customer experience",
          v: "Fewer broken promises",
          detail: "Sales and support teams can see cleaner availability, status, and account context before responding.",
        },
        {
          k: "Management visibility",
          v: "Earlier problem signals",
          detail: "Mismatches become visible while they are still small enough to fix quickly.",
        },
      ],
      takeawaysTitle: "Where AI fits.",
      takeaways: [
        "Rules are best for predictable sync: status changes, matching IDs, timestamps, totals, and stock counts.",
        "AI is useful for summarizing messy mismatches, explaining context, and drafting next actions.",
        "People should approve sensitive changes like refunds, inventory corrections, invoice changes, or customer promises.",
        "The best version adapts to the tools already in the business, from spreadsheets and POS systems to CRMs and accounting software.",
      ],
    },
    es: {
      slug: "synccore-revops-engine",
      num: 2,
      kicker: "Sistemas . Flujo de muestra . Open source",
      title: "Flujo de sincronización de sistemas",
      summary:
        "Un flujo de muestra para negocios que todavia reconcilian a mano ventas, facturacion, inventario, hojas de calculo, exportes de POS y registros de clientes. Muestra como la automatizacion y la IA pueden comparar datos, detectar diferencias, explicar que cambio y asignar el trabajo de limpieza.",
      stack: [
        "Next.js 15",
        "n8n",
        "CRM / POS",
        "Spreadsheets",
        "Postgres",
        "TypeScript",
      ],
      live: "https://synccore-revops-engine-dashboard.vercel.app/",
      code: "https://github.com/lacadaemon94/synccore-revops-engine.git",
      coverBg:
        "linear-gradient(135deg, #16034e 0%, #4512db 45%, #1fffc7 100%)",
      meta: [
        { k: "Patron", v: "Reconciliacion de sistemas asistida por IA" },
        { k: "Encaja con", v: "Ventas, facturacion, inventario, POS, hojas" },
        { k: "Ruta", v: "Sprint de implementacion de 4-6 semanas" },
        { k: "Prueba", v: "Muestra en vivo + codigo disponible" },
      ],
      heroStats: [
        { k: "Chequeo manual", v: "Menos", s: "los registros se comparan automaticamente" },
        { k: "Revision de diferencias", v: "Enfocada", s: "el equipo ve lo que requiere atencion" },
        { k: "Contexto del negocio", v: "Conectado", s: "ventas, stock, facturacion y clientes" },
        { k: "Control", v: "Revisable", s: "las personas aprueban cambios sensibles" },
      ],
      toc: [
        { num: "01", id: "problem", label: "Problema" },
        { num: "02", id: "approach", label: "Patron IA" },
        { num: "03", id: "build", label: "Como funciona" },
        { num: "04", id: "result", label: "Impacto potencial" },
        { num: "05", id: "takeaways", label: "Notas de encaje" },
      ],
      problemTitle:
        "Cuando cada herramienta tiene una respuesta distinta, el negocio termina operando con chequeos manuales.",
      problemP1:
        "Un patron comun en negocios pequenos es simple pero doloroso: ventas viven en una hoja o CRM, facturas viven en un sistema contable, inventario vive en un POS o sheet de stock, y el seguimiento al cliente pasa por WhatsApp o correo. Ninguna herramienta esta mal por si sola, pero rara vez coinciden justo cuando el equipo necesita una respuesta.",
      problemP2:
        "Eso crea trabajo invisible. Alguien tiene que comparar filas, revisar facturas, verificar stock, actualizar notas de clientes y decidir que registro gana antes de mover una cotizacion, entrega, pago o seguimiento.",
      approachTitle:
        "Usar automatizacion para comparar registros, e IA para explicar y priorizar excepciones.",
      approachP:
        "El flujo conecta las herramientas que el negocio ya usa, escucha actualizaciones y guarda cada cambio en un historial compartido. Las reglas resuelven el sync predecible. La IA ayuda a resumir diferencias, explicar causas probables, sugerir siguientes acciones y enviar casos poco claros a revision humana.",
      architecture: "Arquitectura",
      archCaption:
        "Herramientas -> historial compartido -> reglas + revision IA -> dashboard",
      archNodes: [
        { icon: "CRM", label: "Registros ventas", accent: true },
        { icon: "BILL", label: "Facturacion/POS" },
        { icon: "INV", label: "Sheet inventario" },
        { icon: "AI", label: "Reglas + IA", accent: true },
        { icon: "UI", label: "Dashboard equipo" },
      ],
      buildTitle: "Como funciona el flujo.",
      buildSteps: [
        {
          num: "01",
          title: "Conectar las fuentes de datos",
          body: "El flujo se conecta a las herramientas en uso: CRM, hoja de calculo, sistema contable, POS, sheet de inventario, exporte de ecommerce o incluso un CSV programado.",
        },
        {
          num: "02",
          title: "Crear un historial compartido",
          body: "Cada actualizacion se guarda en un historial comun para comparar que cambio, cuando cambio y que herramienta produjo la version mas reciente.",
        },
        {
          num: "03",
          title: "Detectar diferencias y explicarlas",
          body: "Las reglas capturan diferencias comunes como stock, estado de factura, pago, nombre de cliente, etapa de orden o precio. La IA puede resumir la diferencia y sugerir que revisar.",
        },
        {
          num: "04",
          title: "Asignar trabajo de limpieza",
          body: "El dashboard muestra lo que requiere atencion. Las notificaciones pueden ir donde el negocio ya trabaja: WhatsApp, correo, un dashboard interno o un resumen diario simple.",
        },
      ],
      outcomeTitle: "Mejoras potenciales al convertir la reconciliacion manual en un flujo.",
      outcomeP:
        "El beneficio no depende de una plataforma especifica. Depende de cuantos sistemas usa el negocio, que tan seguido cambian los registros y cuanto riesgo genera tener informacion desactualizada. En el contexto correcto, este patron puede reducir chequeos manuales, evitar que pequenos problemas de datos se vuelvan problemas con clientes y facilitar la asignacion de seguimientos.",
      impactIntro:
        "La ganancia principal es reducir trabajo oculto de limpieza. Cuando los sistemas coinciden antes, el negocio puede cotizar, facturar, cumplir y dar seguimiento con menos chequeos manuales.",
      impactAreas: [
        {
          k: "Operaciones",
          v: "Menos reconciliacion",
          detail: "Los equipos pasan menos tiempo comparando hojas, CRM, facturas e inventario a mano.",
        },
        {
          k: "Flujo de caja",
          v: "Facturacion mas limpia",
          detail: "Diferencias de facturas, pagos y stock son mas faciles de detectar antes de atrasar entregas o cobros.",
        },
        {
          k: "Experiencia del cliente",
          v: "Menos promesas rotas",
          detail: "Ventas y soporte pueden ver mejor disponibilidad, estado y contexto de cuenta antes de responder.",
        },
        {
          k: "Visibilidad gerencial",
          v: "Senales antes del problema",
          detail: "Las diferencias aparecen cuando todavia son lo bastante pequenas para corregirse rapido.",
        },
      ],
      takeawaysTitle: "Donde encaja la IA.",
      takeaways: [
        "Las reglas funcionan mejor para sync predecible: estados, IDs, fechas, totales y conteos de stock.",
        "La IA ayuda a resumir diferencias desordenadas, explicar contexto y redactar siguientes acciones.",
        "Las personas deben aprobar cambios sensibles como reembolsos, ajustes de inventario, cambios de factura o promesas al cliente.",
        "La mejor version se adapta a las herramientas que el negocio ya usa, desde hojas y POS hasta CRM y software contable.",
      ],
    },
  },
};

export function getNavLinks(locale: Locale): NavLink[] {
  const nav = landingContent[locale].nav;

  return [
    { href: "#services", label: nav.services },
    { href: "#cases", label: nav.cases },
    { href: "#plans", label: nav.plans },
    { href: "#credibility", label: nav.credibility },
    { href: "#contact", label: nav.contact },
  ];
}

export function isCaseStudySlug(value: string): value is CaseStudySlug {
  return caseStudySlugs.includes(value as CaseStudySlug);
}
