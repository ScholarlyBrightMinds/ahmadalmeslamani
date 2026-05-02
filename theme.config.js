// ═══════════════════════════════════════════════════════════════════
//  theme.config.js — Ahmad Z. Al Meslamani
//  Single source of truth for this researcher's site.
// ═══════════════════════════════════════════════════════════════════

window.SITE_CONFIG = {

    // ── Identity ──────────────────────────────────────────────────
    identity: {
        fullName:  "Ahmad Z. Al Meslamani",
        firstName: "Ahmad",
        lastName:  "Al Meslamani",
        initials:  "AM",
        role:      "Drug Safety · Pharmacotherapy · Health Information Technology",
        tagline:   "Pharmacist–scientist working at the intersection of clinical pharmacy, digital health, and AI in healthcare. Based in Abu Dhabi.",
        location:  "Abu Dhabi, UAE",
        status:    "PhD candidate at UAEU while serving as Senior Laboratory Supervisor at AAU",
        photo:     "images/profile.png",
        affiliation: {
            name: "Al Ain University · College of Pharmacy &amp; Health and Biomedical Research Centre",
            url:  "https://www.aau.ac.ae/",
            role: "Senior Laboratory Supervisor"
        }
    },

    // ── Palette ── amber (warm gold; the fourth hub colour) ──────
    palette: {
        name: "amber",
        dark: {
            bg:          "#161310",
            bgSoft:      "#201a14",
            bgDeep:      "#0e0c0a",
            card:        "#241d16",
            cardSoft:    "#1c160f",
            text:        "#f0e7d8",
            textSoft:    "#cbbfa8",
            muted:       "#8a7a60",
            border:      "#3a2f23",
            borderS:     "#2a2218",
            accent:      "#e8a85c",     /* amber, warm luminous */
            accentD:     "#f5be7d",
            accentBg:    "rgba(232,168,92,0.10)",
            accentGlow:  "rgba(232,168,92,0.22)",
            amber:       "#f5be7d",
            amberBg:     "rgba(245,190,125,0.10)",
            amberGlow:   "rgba(245,190,125,0.18)"
        },
        light: {
            bg:          "#fbf6ee",
            bgSoft:      "#f5ebd9",
            bgDeep:      "#ede0c4",
            card:        "#ffffff",
            cardSoft:    "#fcf6e8",
            text:        "#221b10",
            textSoft:    "#4a3d27",
            muted:       "#8a7a60",
            border:      "#e2d3b3",
            borderS:     "#ece0c5",
            accent:      "#a86411",     /* amber, deep saturated */
            accentD:     "#8a4f08",
            accentBg:    "#f6e7c7",
            accentGlow:  "rgba(168,100,17,0.16)",
            amber:       "#7a4505",
            amberBg:     "#f1deb3",
            amberGlow:   "rgba(122,69,5,0.16)"
        }
    },

    // ── IDs (external profiles) ───────────────────────────────────
    ids: {
        scholar: "usUecnoAAAAJ",
        orcid:   "0000-0002-8370-9562",
        github:  "ScholarlyBrightMinds",
        email:   "Ahmad.almeslamani@aau.ac.ae"
    },

    // ── Social links ──────────────────────────────────────────────
    social: [
        { key: "scholar", label: "Google Scholar", url: "https://scholar.google.com/citations?user=usUecnoAAAAJ&hl=en" },
        { key: "orcid",   label: "ORCID",          url: "https://orcid.org/0000-0002-8370-9562" },
        { key: "github",  label: "GitHub",         url: "https://github.com/ScholarlyBrightMinds" },
        { key: "email",   label: "Email",          url: "mailto:Ahmad.almeslamani@aau.ac.ae" }
    ],

    // ── Bio ──────────────────────────────────────────────────────
    bio: {
        short: "Pharmacist and clinical-research scientist working at the intersection of drug safety, pharmacotherapy, and health information technology.",
        long:  "Senior Laboratory Supervisor at Al Ain University's College of Pharmacy and AAU Health &amp; Biomedical Research Centre. Now pursuing a PhD at UAEU while continuing to lead lab operations and clinical-pharmacy research."
    },

    // ── Hero chips ────────────────────────────────────────────────
    chips: [
        { label: "1,500+ Citations" },
        { label: "Drug Safety &amp; Pharmacotherapy" },
        { label: "Health Information Technology", variant: "gold" },
        { label: "Senior Lab Supervisor · AAU" },
        { label: "PhD Candidate · UAEU" }
    ],

    // ── Per-page sub-hero lede text ──────────────────────────────
    ledes: {
        about:        "Pharmacist–scientist with broad clinical-pharmacy and digital-health interests. Currently pursuing a PhD at UAEU while continuing as Senior Laboratory Supervisor at Al Ain University.",
        projects:     "Active research across digital health, AI in clinical practice, and pharmacovigilance, alongside a body of published work in clinical pharmacy and drug safety.",
        publications: "Peer-reviewed output across drug safety, pharmacotherapy, telepharmacy, and AI in healthcare — updated automatically from Scholar and Scopus.",
        blog:         "Reflections on clinical pharmacy, digital health, and the path through a PhD."
    },

    // ── About page ────────────────────────────────────────────────
    about: {
        paragraphs: [
            "I trained as a pharmacist and built a research career at the intersection of <strong>clinical pharmacy practice</strong>, <strong>drug safety</strong>, and <strong>health information technology</strong>. I currently serve as <strong>Senior Laboratory Supervisor</strong> at Al Ain University's College of Pharmacy, and as a researcher at the <strong>AAU Health &amp; Biomedical Research Centre</strong>.",
            "My published work spans randomized controlled trials in community pharmacy, prescribing-error studies, telepharmacy and virtual care during COVID-19, pharmacist-led coaching interventions, and policy-level analyses of digital health adoption in low- and middle-income countries.",
            "More recently, I have been writing on the role of <em>artificial intelligence and machine learning in clinical pharmacy</em> — from AI-assisted deprescribing in older adults to ML in paediatric asthma care, and the digital-health policy frameworks needed to make those tools work in real practice settings.",
            "I am now pursuing a <strong>PhD at UAEU</strong>, while continuing to anchor laboratory operations and clinical-pharmacy research at AAU. The dual role keeps the work close to both the bench and the patient."
        ],

        timeline: [
            { date: "BSc · Pharmacy",                   title: "Bachelor of Pharmacy",           desc: "Foundational training in pharmaceutical sciences." },
            { date: "MSc · Pharmaceutical Sciences",    title: "Master's degree",                desc: "Specialisation in clinical pharmacy practice and drug safety." },
            { date: "Early career · Jordan &amp; UAE", title: "Clinical-pharmacy research",     desc: "RCTs in community pharmacy, prescribing errors, dispensing safety." },
            { date: "2020 · COVID-19 era",              title: "Telepharmacy &amp; virtual care", desc: "Pharmacist-led virtual coaching, telemedicine adoption studies, OTC misuse during the pandemic." },
            { date: "Ongoing · AAU",                    title: "Senior Laboratory Supervisor",   desc: "Lab oversight + clinical-pharmacy research at the College of Pharmacy.", state: "current" },
            { date: "Ongoing · AAU HBRC",               title: "Health &amp; Biomedical Research Centre", desc: "Multi-institution clinical research collaborations.", state: "current" },
            { date: "2024 · Present",                   title: "AI in clinical pharmacy writing", desc: "Editorials &amp; commentaries on AI/ML in deprescribing, asthma care, digital-health policy.", state: "current" },
            { date: "Now · UAEU",                       title: "PhD candidate",                  desc: "Doctoral research at the United Arab Emirates University, alongside the AAU role.", state: "current" }
        ],

        pillars: [
            { icon: "flask",    title: "Drug Safety &amp; Pharmacovigilance", desc: "Prescribing errors, dispensing errors, medication-related problems, vaccine administration safety." },
            { icon: "molecule", title: "Clinical Pharmacy Practice",          desc: "RCTs in community pharmacy, deprescribing, telepharmacy, pharmacist-led coaching." },
            { icon: "chart",    title: "Health Information Technology",       desc: "Digital health policy, e-prescribing, electronic patient medication records, AI in pharmacy." }
        ],

        awards: [
            { icon: "🎓", title: "MSc in Pharmaceutical Sciences",          venue: "College of Pharmacy" },
            { icon: "🔬", title: "Senior Laboratory Supervisor",            venue: "Al Ain University · College of Pharmacy" },
            { icon: "🏛️", title: "Affiliated Researcher",                  venue: "AAU Health &amp; Biomedical Research Centre" },
            { icon: "📚", title: "Cited 1,500+ times across his work",      venue: "Google Scholar · Drug Safety, Pharmacotherapy, Health IT" }
        ]
    },

    // ── Projects (Ongoing Research) ──────────────────────────────
    // statusKind: 'active' | 'review' | 'published' | 'draft'
    projects: [
        {
            n: "01",
            label: "AI &amp; Clinical Pharmacy",
            title: "AI in Pharmacist-Led Deprescribing",
            desc:  "Examining how AI-assisted decision support can help community and hospital pharmacists identify candidates for deprescribing in older patients with polypharmacy, and the practical and policy barriers to deploying such tools.",
            tech:  ["AI", "Deprescribing", "Polypharmacy", "Clinical Pharmacy"],
            status: "Active — review &amp; commentary work in progress",
            statusKind: "active",
            needs: "Open to clinical pharmacists, geriatricians, and digital-health researchers who want to co-author on the deployment side."
        },
        {
            n: "02",
            label: "Digital Health Policy",
            title: "eHealth Policy Frameworks for LMICs",
            desc:  "Building on prior work analysing eHealth policy adoption in low- and middle-income countries, identifying what makes regional digital-health rollouts succeed or stall.",
            tech:  ["Digital Health", "Policy", "LMICs", "PRISMA"],
            status: "Active — manuscript &amp; collaboration",
            statusKind: "active",
            needs: "Looking for health-policy researchers and country-specific collaborators."
        },
        {
            n: "03",
            label: "Pharmacy Practice · Review",
            title: "Pharmacists in Public Health &amp; Disease Prevention",
            desc:  "A four-domain framework reviewing what we know about pharmacists' roles in preventive, diagnostic, therapeutic, and digital public-health activities, with attention to barriers in low-resource settings.",
            tech:  ["Public Health", "Pharmacy", "Review", "Framework"],
            status: "Published · Clinical Pharmacy Connect · 2025",
            statusKind: "published"
        },
        {
            n: "04",
            label: "Health IT · Survey",
            title: "Electronic Patient Medication Records in UAE Pharmacies",
            desc:  "Cross-sectional survey of community pharmacists in the UAE, evaluating perceived benefits, barriers, and concerns around adopting e-PMR systems beyond hospital settings.",
            tech:  ["e-PMR", "UAE", "Community Pharmacy", "Survey"],
            status: "Published · Health Information Management Journal · 2025",
            statusKind: "published"
        },
        {
            n: "05",
            label: "Telepharmacy · COVID-19",
            title: "Pharmacist-Led Virtual Coaching During COVID-19",
            desc:  "Randomized controlled work investigating whether pharmacist-delivered virtual health coaching could change behaviours that prevent COVID-19 transmission and improve vaccine acceptance.",
            tech:  ["Telepharmacy", "RCT", "COVID-19", "Behavioral Health"],
            status: "Published · 2022",
            statusKind: "published"
        },
        {
            n: "06",
            label: "Drug Safety · ED",
            title: "Clinical Pharmacy in Reducing Prescribing Errors",
            desc:  "Pre/post and RCT-style evaluations of clinical-pharmacy interventions for prescribing-error reduction in emergency departments and community pharmacies.",
            tech:  ["Drug Safety", "Prescribing Errors", "ED", "Hospital Pharmacy"],
            status: "Published · multiple journals · 2020–2022",
            statusKind: "published"
        }
    ],

    // ── Blog ──────────────────────────────────────────────────────
    blog: [],

    // ── Footer ────────────────────────────────────────────────────
    footer: {
        copyrightYear: 2026,
        tagline: "Part of the Scholarly Bright Minds hub.",
        credits: "A fork of <a href=\"https://github.com/muhammedrashidx/ScholarSite_2.0\" target=\"_blank\" rel=\"noopener\">ScholarSite_2.0</a>."
    }
};

// ═══════════════════════════════════════════════════════════════════
//  APPLY PALETTE TO CSS VARIABLES
// ═══════════════════════════════════════════════════════════════════
(function applyPalette() {
    const P = window.SITE_CONFIG.palette;
    const root = document.documentElement;

    function setMode(mode) {
        const p = P[mode];
        Object.entries(p).forEach(([k, v]) => {
            const cssVar = '--' + k.replace(/([A-Z])/g, '-$1').toLowerCase();
            root.style.setProperty(cssVar, v);
        });
    }

    let theme = null;
    try { theme = localStorage.getItem('sbm-theme'); } catch (e) {}
    if (!theme) theme = 'dark';

    root.setAttribute('data-theme', theme);
    setMode(theme);

    window.__applyTheme = function(mode) {
        root.setAttribute('data-theme', mode);
        setMode(mode);
        try { localStorage.setItem('sbm-theme', mode); } catch (e) {}
        const hL = document.getElementById('hljs-light');
        const hD = document.getElementById('hljs-dark');
        if (hL && hD) { hL.disabled = (mode === 'dark'); hD.disabled = (mode !== 'dark'); }
    };
})();
