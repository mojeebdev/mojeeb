export type ProjectStatus = "live" | "live-inactive" | "active" | "paused" | "on-hold" | "unverified";
export type ProjectCategory = "flagship" | "ai" | "developer-tools" | "saas" | "web3" | "hackathon" | "experiment" | "cultural" | "archival";

export type Project = {
  slug: string;
  name: string;
  url?: string;
  description?: string;
  category: ProjectCategory[];
  status: ProjectStatus;
  statusLabel?: string;
  selected?: boolean;
  role?: string;
  snapshot?: string;
  origin?: string;
  achievement?: string;
  outcome?: string;
  sourceUrl?: string;
  packageUrl?: string;
  visual?: string;
  visualAlt?: string;
  portfolioValue?: string;
  missingDetails?: string[];
};

export type ProjectGroup = {
  id: "flagship" | "tools" | "web3" | "culture" | "private";
  title: string;
  description: string;
  slugs: string[];
};

const p = (
  slug: string,
  name: string,
  url: string | undefined,
  description: string | undefined,
  category: ProjectCategory[],
  status: ProjectStatus,
  extra: Partial<Project> = {},
): Project => ({ slug, name, url, description, category, status, ...extra });

// Authoritative registry: populated only from MOJEEB-BUILD-INDEX.md.
// Undefined fields remain unconfirmed and must not be guessed.
export const projects: Project[] = [
  p("blindspotlab", "BlindspotLab", "https://blindspotlab.xyz", "A productized build studio for turning ideas into designed, engineered, and shipped products.", ["flagship", "ai", "saas"], "live", { selected: true, role: "Founder", snapshot: "DAETO — Discovery, Approach, Execution, Tracking, Optimization.", portfolioValue: "Product strategy, studio positioning, productized services, design direction, and execution." }),
  p("arcapush", "Arcapush", "https://arcapush.com", "A high-signal discovery platform for serious solo builders who ship.", ["flagship", "saas", "web3"], "active", { selected: true, statusLabel: "Live; v3.0 in development", snapshot: "146 indexed products as of July 28, 2026.", visual: "/projects/arcapush-og.png", visualAlt: "Arcapush branded artwork reading ‘Get found. Keep building.’", portfolioValue: "Platform thinking, discovery systems, builder-focused strategy, indexing, and long-term iteration." }),
  p("revel", "Revel", "https://tryrevel.xyz", "A website and product audit SaaS.", ["flagship", "ai", "saas"], "live", { selected: true, snapshot: "Also operates as an interactive Agent through MCP calls from the OKX AI Marketplace.", portfolioValue: "AI productization, website analysis, agent integration, MCP usage, and marketplace persistence." }),
  p("sitehook", "SiteHook", "https://sitehook.run", "A standalone SaaS for freelancers, studios, agencies, and solo builders.", ["flagship", "saas", "ai"], "live", { selected: true, statusLabel: "Live; not yet publicly launched on X", origin: "Evolved from an internal BlindspotLab tool.", visual: "/projects/sitehook-og.png", visualAlt: "SiteHook branded artwork reading ‘Give your first message a hook.’" }),
  p("capself", "Capself", "https://capself.co", "A Personal Development Operating System.", ["flagship", "saas"], "live", { selected: true, snapshot: "Four subscription tiers with Paystack billing.", visual: "/projects/capself-og.png", visualAlt: "Capself logo and the line ‘Your next self, engineered daily.’" }),
  p("dearly", "Dearly", "https://dearly.icu", "A live product with a possible future monetization feature.", ["flagship", "experiment"], "live"),
  p("whate", "Whate", "https://whate.app", "A meal-discovery and meal-planning product.", ["flagship", "saas"], "live", { selected: true, snapshot: "10,516 meals; approximately 4,011 with images.", visual: "/projects/whate-og.jpg", visualAlt: "Whate logo with a crossed knife and fork and the line ‘What do you have at home?’" }),
  p("stackbrief", "StackBrief", "https://stackbrief.peerfix.dev", "The architectural brief before a code change — an open-source, local-first CLI for source-cited repository analysis.", ["flagship", "developer-tools", "ai"], "active", { selected: true, statusLabel: "Active and maintained", snapshot: "500+ downloads as of July 2026.", origin: "OpenAI Build Week 2026.", sourceUrl: "https://github.com/mojeebdev/stackbrief", packageUrl: "https://www.npmjs.com/package/@blindspotlab/stackbrief", visual: "/projects/stackbrief-og.png", visualAlt: "StackBrief artwork reading ‘Know the shape of a change before you make it.’", portfolioValue: "System architecture, static analysis, developer experience, CLI design, open-source work, and AI-agent infrastructure." }),
  p("peerfix", "PeerFix", "https://peerfix.dev", "A live Web3 product platform under consideration for future repositioning.", ["flagship", "web3"], "live"),

  p("threadwise", "ThreadWise", "https://threadwise-app.vercel.app", "A smart-sourcing guide associated with platforms such as Temu and Shein.", ["ai", "experiment"], "live"),
  p("talentlane", "TalentLane", "https://talentlane.vercel.app", "An interactive guide to the UK Global Talent visa route for designers.", ["ai", "experiment"], "live", { statusLabel: "Live and complete" }),
  p("daysago", "DaysAgo", "https://daysago.vercel.app", "A minimal app for questions such as ‘2020 was how many days ago?’", ["experiment"], "live", { statusLabel: "Live and complete for now" }),
  p("arcaprompt", "ArcaPrompt", "https://arcaprompt.arcapush.com", "Prompt-related product under the Arcapush ecosystem.", ["ai"], "live"),
  p("promptrank", "PromptRank", "https://promptrank.arcapush.com", "Prompt-related ranking product under the Arcapush ecosystem.", ["ai"], "live"),
  p("promptvault", "PromptVault", "https://promptvault.mojeeb.xyz", "A prompt-focused product currently on hold.", ["ai", "saas"], "on-hold"),
  p("splitstack", "SplitStack", "https://splitstack.blindspotlab.xyz", "A BlindspotLab-linked developer tool.", ["developer-tools"], "live"),
  p("syncsurge", "SyncSurge", "https://syncsurge.xyz", "A paused product build.", ["saas"], "paused"),
  p("pitchslap", "Pitchslap", "https://pitchslap.mojeeb.xyz", "A live pitch-focused product.", ["ai", "saas"], "live"),
  p("ghostforms", "Ghostforms", "https://ghostforms.mojeeb.xyz", "A live form-related product.", ["saas"], "live"),
  p("nullpay", "NullPay", "https://nullpay.blindspotlab.xyz", "A paused payment-related product.", ["experiment", "saas"], "paused"),
  p("blindspotlab-agents", "BlindspotLab Agents", "https://agents.blindspotlab.xyz", "A live collection or platform for BlindspotLab agents.", ["ai"], "live"),
  p("roasturl", "RoastURL", "https://roasturl.xyz", "A live URL-roasting and feedback product.", ["ai", "saas"], "live"),
  p("abse", "Abse", "https://abse.base44.app", undefined, ["hackathon", "ai"], "live", { origin: "Base44 Backend Hackathon submission." }),
  p("scopeai", "ScopeAI", "https://app-bqgzl028s6ip.appmedo.com", undefined, ["ai", "hackathon"], "live", { achievement: "Associated with the Creative Content Award at the MeDo hackathon." }),
  p("microoracle", "MicroOracle", "https://app-cdf1ndd1s2dd.appmedo.com", "A live product built on AppMeDo.", ["ai"], "live"),
  p("solopr", "Solopr", "https://app-c91bigb1kgzl.appmedo.com", "A live product built on AppMeDo.", ["saas", "ai"], "live"),
  p("queue", "QUEUE.", "https://tryqueue.vercel.app", undefined, ["saas", "hackathon"], "active", { statusLabel: "Live and active", outcome: "Was not submitted to the H0 hackathon." }),
  p("relaypost", "RelayPost", "https://relaypost.lovable.app", undefined, ["saas", "hackathon"], "live"),
  p("nagimu", "NAGIMU", undefined, "A live product experiment.", ["experiment"], "live", { missingDetails: ["Public URL", "Exact purpose", "Feature set"] }),
  p("certstack", "CertStack", "https://certstack.vercel.app", "A live certificate- or credential-focused product.", ["saas"], "live"),
  p("matchmind", "MatchMind", "https://app.matchmind.xyz", undefined, ["ai", "hackathon"], "live", { origin: "Google Rapid Agent Hackathon submission.", outcome: "Did not win." }),
  p("moou", "MÓOU (谋)", "https://usemoou.xyz", undefined, ["ai", "hackathon"], "live", { origin: "Bitget AI Hackathon.", outcome: "Did not win; received a participation award." }),
  p("director-x", "Director-X", undefined, "An on-hold AI creative tooling build.", ["ai", "experiment"], "on-hold", { missingDetails: ["Public URL", "Exact feature set"] }),
  p("nft-executive", "NFT Executive", undefined, "A paused NFT-focused product.", ["web3"], "paused", { missingDetails: ["Public URL", "Exact feature set"] }),
  p("dbb", "DBB", "https://dbb.blindspotlab.xyz", "An on-hold BlindspotLab-linked build.", ["experiment"], "on-hold"),

  p("admon", "Admon", "https://admon.peerfix.dev", "A builder-identity and GitHub-credential product that grew beyond its Monad hackathon submission.", ["web3", "hackathon"], "live", { selected: true, outcome: "Did not win the Monad hackathon.", portfolioValue: "Onchain identity, smart contracts, credentials, community features, and long-term product iteration." }),
  p("commitcar", "CommitCar", undefined, "A GitHub-commit-based car NFT product and the earlier foundation behind Admon.", ["web3"], "live", { missingDetails: ["Public URL"] }),
  p("pullchain", "PullChain", "https://pullchain.fun", undefined, ["web3"], "unverified", { statusLabel: "Previously live; current condition unverified" }),
  p("firsttx", "FirstTx", "https://firsttx.xyz", "A live Web3 product centered around first-transaction history or identity.", ["web3"], "live"),
  p("angelvow", "AngelVow", "https://angelvow.xyz", undefined, ["web3"], "on-hold"),
  p("promptledger", "PromptLedger Decentralification Registry", "https://promptledger-dec.vercel.app", "A prompt- or decentralization-focused registry.", ["web3", "archival"], "live-inactive", { statusLabel: "Live but inactive" }),

  p("ens9", "ENS9", "https://ens9.vercel.app", "Built to celebrate ENS’s ninth anniversary.", ["cultural", "archival"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("ibm115", "IBM115", "https://ibm115.vercel.app", "Built to celebrate IBM’s 115th anniversary.", ["cultural", "archival"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("polygon6years", "Polygon6Years", "https://polygon6years.firsttx.xyz", "Built to celebrate Polygon’s sixth anniversary.", ["cultural", "archival", "web3"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("zion-fan-card", "Zion Fan Card", "https://zion-fan-card.vercel.app", "Built as a celebration project for a single by Teni the Entertainer.", ["cultural", "archival"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("study-free", "Study Free", "https://studyfree.vercel.app", "Turns useful public information into a lasting, usable product.", ["cultural", "archival"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("coldopen", "ColdOpen", "https://coldopen-beta.vercel.app", "Preserves useful cold-email material for lasting use.", ["cultural", "archival"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("eminuzzle", "Eminuzzle", "https://eminuzzle.vercel.app", "Built for HotEmin, a meme project on Avalanche.", ["cultural", "archival"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("eminmeme", "Eminmeme", "https://eminmeme.vercel.app", "Built for HotEmin, a meme project on Avalanche.", ["cultural", "archival"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("bearo", "Bearo", "https://bearo.mojeeb.xyz", undefined, ["archival", "experiment"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("signal-lost", "Signal Lost Game Design", "https://v0-signal-lost-game.vercel.app", "Built in response to a Base network outage.", ["cultural", "archival", "web3"], "live-inactive", { statusLabel: "Live but inactive" }),
  p("xunfollow", "XUnfollow", "https://xunfollow.xyz", "A live product that currently requires little upkeep.", ["experiment", "archival"], "live-inactive", { statusLabel: "Live but not actively maintained" }),
  p("vibeathon", "30 Days Vibeathon", "https://vibeathon30days.vercel.app", "A showcase created to improve design skills and move away from generic AI-slop design.", ["experiment", "archival"], "live-inactive", { statusLabel: "Live showcase/archive; inactive for now with the possibility of returning later", snapshot: "4 of 30 builds completed." }),
];

export const selectedProjects = projects.filter((project) => project.selected);
export const selectedProjectSlugs = selectedProjects.map((project) => project.slug);
export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const projectGroups: ProjectGroup[] = [
  {
    id: "flagship",
    title: "Flagship and core platforms",
    description: "Long-running products, productized services, and platforms with clear portfolio weight.",
    slugs: ["blindspotlab", "arcapush", "revel", "sitehook", "capself", "dearly", "whate", "stackbrief", "peerfix"],
  },
  {
    id: "tools",
    title: "AI, developer tools, SaaS and productivity",
    description: "Focused utilities, experiments, internal tools turned products, and hackathon builds.",
    slugs: ["threadwise", "talentlane", "daysago", "arcaprompt", "promptrank", "promptvault", "splitstack", "syncsurge", "pitchslap", "ghostforms", "nullpay", "blindspotlab-agents", "roasturl", "abse", "scopeai", "microoracle", "solopr", "queue", "relaypost", "certstack", "matchmind", "moou", "dbb"],
  },
  {
    id: "web3",
    title: "Web3 and onchain builds",
    description: "Builder identity, credentials, transaction history, contracts, and onchain experiments.",
    slugs: ["admon", "pullchain", "firsttx", "angelvow", "promptledger"],
  },
  {
    id: "culture",
    title: "Celebration, cultural and archival builds",
    description: "Products that preserve information, respond to culture, or mark a moment worth keeping.",
    slugs: ["ens9", "ibm115", "polygon6years", "zion-fan-card", "study-free", "coldopen", "eminuzzle", "eminmeme", "bearo", "signal-lost", "xunfollow", "vibeathon"],
  },
  {
    id: "private",
    title: "Private, paused or undocumented work",
    description: "Projects with limited documented detail or no confirmed public destination.",
    slugs: ["nagimu", "commitcar", "director-x", "nft-executive"],
  },
];
