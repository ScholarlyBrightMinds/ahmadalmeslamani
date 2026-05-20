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
        tagline:   "Pharmacist and clinical-research scientist working at the intersection of clinical pharmacy, digital health, and AI in healthcare. Based in Abu Dhabi.",
        location:  "Abu Dhabi, UAE",
        status:    "PhD candidate at UAEU while serving as Senior Laboratory Supervisor at AAU",
        photo:     "images/profile.png",
        email:     "Ahmad.almeslamani@aau.ac.ae",
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
        short: "Pharmacist and clinical-research scientist working at the intersection of drug safety, pharmacotherapy, and health information technology. Currently a PhD candidate at UAEU while serving as Senior Laboratory Supervisor at Al Ain University.",
        long:  "Senior Laboratory Supervisor at Al Ain University's College of Pharmacy and a researcher at the AAU Health and Biomedical Research Centre. Now pursuing a PhD at UAEU while continuing to lead lab operations and clinical-pharmacy research."
    },

    // ── Hero chips ────────────────────────────────────────────────
    // Auto-updated metric chips:
    //   • Chip 1: "<N> Publications · <M> Citations"  ← Scholar totals
    //   • Chip 2: "h-index <N>"                       ← Scholar h-index
    chips: [
        { label: "142 Publications · 1795 Citations" },
        { label: "h-index 24" },
        { label: "Drug Safety &amp; Pharmacotherapy", variant: "gold" },
        { label: "Senior Lab Supervisor · AAU" },
        { label: "PhD Candidate · UAEU" }
    ],

    // ── Per-page sub-hero lede text ──────────────────────────────
    ledes: {
        about:        "Pharmacist and clinical-research scientist with broad clinical-pharmacy and digital-health interests. Currently pursuing a PhD at UAEU while continuing as Senior Laboratory Supervisor at Al Ain University.",
        projects:     "Active research across digital health, AI in clinical practice, and pharmacovigilance, alongside a body of published work in clinical pharmacy and drug safety.",
        publications: "Peer-reviewed output across drug safety, pharmacotherapy, telepharmacy, and AI in healthcare. Auto-synced weekly from Google Scholar.",
        blog:         "Notes on clinical pharmacy, digital health, and the path through a PhD.",
        talks:        "Invited lectures, conference presentations, and laboratory sessions across clinical pharmacy and digital-health practice.",
        contact:      "The fastest way to reach me. Below the form there is a short note for collaborators and another for review or advisory requests.",
        research:     "The longer version of the work I do, the questions I want to answer, and where I am taking it next. Written with collaborators and editors in mind.",
        arc:          "The longer story of how clinical pharmacy in Jordan turned into telepharmacy research in the UAE and into the PhD work I am doing now. Told as a sequence of moments rather than a CV."
    },

    // ── Scrollytelling research arc (rendered on arc.html) ───────
    arc: {
        kicker: "Research arc",
        h1Front: "From dispensing counter to",
        h1Accent: "AI in clinical pharmacy",
        intro: "The research statement is the short version. This page is the long way around. Five chapters, told as a sequence of moments rather than a CV. Scroll at your own pace.",
        chapters: [
            {
                key: "origin",
                frame: "origin",
                kicker: "Chapter 1 · Pharmacy training",
                title: "Starting at the dispensing counter.",
                body: [
                    "I trained as a pharmacist and earned my BSc in Pharmacy with the intent of practising. The pharmacy course gave me a thorough grounding in pharmacology, medicinal chemistry, and clinical pharmacotherapy. What I did not expect was how often the most interesting clinical questions were the ones nobody had finished answering yet.",
                    "Why are dispensing errors so persistent in busy community pharmacies. Why do prescribers keep making the same kinds of prescribing mistakes in emergency departments. Why do regulators struggle to keep up with the technologies that already sit on every pharmacist's desk. Those questions are what pulled me toward research."
                ],
                milestone: {
                    label: "BSc Pharmacy",
                    sub: "Foundations in clinical pharmacology, pharmacotherapy, and pharmacovigilance"
                }
            },
            {
                key: "early",
                frame: "sieve",
                kicker: "Chapter 2 · Early research",
                title: "Building a clinical-pharmacy research record.",
                body: [
                    "My early research focused on drug safety in real practice settings. Dispensing errors in community pharmacies in the UAE. Prescribing errors in emergency departments. The role of clinical pharmacists in catching both kinds of error before they reach the patient. The methods were practical: prospective cohort studies, RCTs, mixed-methods evaluations.",
                    "An MSc in Pharmaceutical Sciences gave me the methods training to design these studies properly. By the end of that period the publication list was building up across the journals where the readers are working pharmacists and clinical researchers. Saudi Pharmaceutical Journal, International Journal of Pharmacy Practice, Pharmacy Practice, Hospital Pharmacy."
                ],
                milestone: {
                    label: "MSc Pharmaceutical Sciences",
                    sub: "Clinical pharmacy practice + drug safety methods"
                }
            },
            {
                key: "covid",
                frame: "editorial",
                kicker: "Chapter 3 · 2020 to 2022",
                title: "Telepharmacy, virtual care, and a productivity surge.",
                body: [
                    "COVID-19 changed clinical pharmacy practice almost overnight. Patients could no longer walk into a pharmacy the way they used to. Hospitals had to figure out how to deliver counselling and medication-management remotely. Regulators had to decide what was actually allowed.",
                    "I spent that period running studies on the new world. Telepharmacy uptake among UAE community pharmacists. Pharmacist-led virtual coaching as a behavioural intervention. Telemedicine adoption patterns across the region. OTC misuse during the pandemic. Vaccine hesitancy and pharmacist-led counselling. These projects produced a sustained run of papers in journals like Telemedicine and e-Health, Journal of the American Pharmacists Association, and Vaccine.",
                    "The work also taught me that drug safety and digital health are the same problem looked at from two angles. If a pharmacist cannot reach the patient in time, or cannot see the full medication history, errors happen. Whichever channel you use, that is the constraint."
                ],
                milestone: {
                    label: "Telepharmacy research stream",
                    sub: "Most-cited paper: Role of telepharmacy in pharmacist counselling to COVID-19 patients"
                }
            },
            {
                key: "now",
                frame: "network",
                kicker: "Chapter 4 · Current work",
                title: "AI in pharmacy, deprescribing, and the PhD.",
                body: [
                    "The current threads pull together everything earlier. AI and machine learning in pharmacy practice, written for working clinical pharmacists and hospital teams. Digital-health policy in low- and middle-income countries, where the gap between regulation and practice is widest. Electronic patient medication record adoption among community pharmacies. Pharmacist-led deprescribing in older adults with polypharmacy.",
                    "I have been writing on AI-assisted deprescribing, machine learning in paediatric asthma management, and the long-term economic impact of AI in healthcare. Most recent topics include AI-supported decision-making in chronic-disease care and the practical pitfalls of LLM use in clinical drug-interaction prediction.",
                    "All of this runs in parallel with a doctoral programme at UAEU and a Senior Laboratory Supervisor role at Al Ain University. The dual position keeps the research close to both the bench and the clinic."
                ],
                milestone: {
                    label: "PhD candidate at UAEU",
                    sub: "Senior Laboratory Supervisor at AAU · 113 OpenAlex works · 1304 verified citations · h-index 22"
                }
            },
            {
                key: "next",
                frame: "horizon",
                kicker: "Chapter 5 · What comes next",
                title: "Where the next stretch goes.",
                body: [
                    "Post-PhD I want to keep building research that sits at the same intersection: drug safety, clinical pharmacy practice, and the digital-health tooling that increasingly mediates both. Specifically: AI-augmented pharmacovigilance, LLM-supported deprescribing decision support, and policy work on how regulators in the Gulf region can keep up with what is actually happening in pharmacy practice.",
                    "The shape I want is collaborative. Clinical pharmacists, geriatricians, digital-health researchers, and health-policy people working together rather than in parallel. The most interesting questions in this field cross those lines.",
                    "If your work touches any of that, I am open to collaborations, advisory roles, and review or editorial work. Email is the fastest way to start a conversation."
                ],
                milestone: {
                    label: "Open to collaboration and review",
                    sub: "AI in clinical pharmacy · pharmacovigilance · digital-health policy",
                    href: "mailto:Ahmad.almeslamani@aau.ac.ae?subject=Research%20collaboration"
                }
            }
        ]
    },

    // ── Active research / advisory CTA (rendered on index hero) ──
    // Ahmed is mid-PhD at UAEU, not searching for one. The slot is repurposed
    // as an open-for-review-and-advisory call instead of a PhD search.
    phdCTA: {
        ribbon:  "Active research",
        title:   "Open to collaborators and review or advisory work",
        body:    "I work at the intersection of clinical pharmacy, drug safety, and digital health. If you are running studies in pharmacovigilance, deprescribing, telepharmacy, or AI-supported pharmacy practice, and would like a clinical-pharmacy research collaborator, I would be glad to hear from you. I also welcome peer-review and editorial board enquiries.",
        primaryLabel: "Email me",
        primaryHref:  "mailto:Ahmad.almeslamani@aau.ac.ae?subject=Research%20collaboration&body=Dear%20Dr%20Al%20Meslamani%2C%0A%0AI%20wanted%20to%20discuss%20a%20potential%20research%20collaboration.%0A%0A",
        secondaryLabel: "Read my research statement",
        secondaryHref:  "research.html",
        tertiaryLabel:  "Ongoing projects",
        tertiaryHref:   "projects.html"
    },

    // ── "By the numbers" impact tiles (home page) ────────────────
    impactStats: [
        { num: "142",  label: "Publications",  sub: "peer-reviewed",                      numLiveSource: "total_documents" },
        { num: "1795", label: "Citations",     sub: "across all work",                    numLiveSource: "total_citations" },
        { num: "24",   label: "h-index",       sub: "sustained impact" },
        { num: "PhD",  label: "Candidate",     sub: "United Arab Emirates University",    variant: "gold" },
        { num: "Sr.",  label: "Lab Supervisor", sub: "Al Ain University · College of Pharmacy" }
    ],

    // ── About page ────────────────────────────────────────────────
    about: {
        paragraphs: [
            "I trained as a pharmacist and built a research career at the intersection of <strong>clinical pharmacy practice</strong>, <strong>drug safety</strong>, and <strong>health information technology</strong>. I currently serve as <strong>Senior Laboratory Supervisor</strong> at Al Ain University's College of Pharmacy, and as a researcher at the <strong>AAU Health and Biomedical Research Centre</strong>.",
            "My published work spans randomised controlled trials in community pharmacy, prescribing-error studies, telepharmacy and virtual care during COVID-19, pharmacist-led coaching interventions, and policy-level analyses of digital-health adoption in low- and middle-income countries.",
            "More recently I have been writing on the role of <em>artificial intelligence and machine learning in clinical pharmacy</em>, from AI-assisted deprescribing in older adults to ML in paediatric asthma care, and the digital-health policy frameworks needed to make those tools work in real practice settings.",
            "I am now pursuing a <strong>PhD at UAEU</strong>, while continuing to anchor laboratory operations and clinical-pharmacy research at AAU. The dual role keeps the work close to both the bench and the patient."
        ],

        timeline: [
            { date: "BSc · Pharmacy",                   title: "Bachelor of Pharmacy",            desc: "Foundational training in pharmaceutical sciences." },
            { date: "MSc · Pharmaceutical Sciences",    title: "Master's degree",                 desc: "Specialisation in clinical pharmacy practice and drug safety." },
            { date: "Early career · Jordan and UAE",    title: "Clinical-pharmacy research",      desc: "RCTs in community pharmacy, prescribing errors, dispensing safety." },
            { date: "2020 · COVID-19 era",              title: "Telepharmacy and virtual care",   desc: "Pharmacist-led virtual coaching, telemedicine adoption studies, OTC misuse during the pandemic." },
            { date: "Ongoing · AAU",                    title: "Senior Laboratory Supervisor",    desc: "Lab oversight plus clinical-pharmacy research at the College of Pharmacy.", state: "current" },
            { date: "Ongoing · AAU HBRC",               title: "Health and Biomedical Research Centre", desc: "Multi-institution clinical research collaborations.", state: "current" },
            { date: "2024 · Present",                   title: "AI in clinical pharmacy writing", desc: "Editorials and commentaries on AI/ML in deprescribing, asthma care, digital-health policy.", state: "current" },
            { date: "Now · UAEU",                       title: "PhD candidate",                   desc: "Doctoral research at the United Arab Emirates University, alongside the AAU role.", state: "current" }
        ],

        pillars: [
            { icon: "flask",    title: "Drug Safety and Pharmacovigilance", desc: "Prescribing errors, dispensing errors, medication-related problems, vaccine administration safety." },
            { icon: "molecule", title: "Clinical Pharmacy Practice",        desc: "RCTs in community pharmacy, deprescribing, telepharmacy, pharmacist-led coaching." },
            { icon: "chart",    title: "Health Information Technology",     desc: "Digital-health policy, e-prescribing, electronic patient medication records, AI in pharmacy." }
        ],

        awards: [
            { icon: "🎓", title: "MSc in Pharmaceutical Sciences",        venue: "College of Pharmacy" },
            { icon: "🔬", title: "Senior Laboratory Supervisor",          venue: "Al Ain University · College of Pharmacy" },
            { icon: "🏛️", title: "Affiliated Researcher",                venue: "AAU Health and Biomedical Research Centre" },
            { icon: "📚", title: "Cited 1,500+ times across his work",    venue: "Google Scholar · Drug Safety, Pharmacotherapy, Health IT" },
            { icon: "📝", title: "Peer reviewer and editorial work",      venue: "Journals across clinical pharmacy and digital health" }
        ]
    },

    // ── Projects (Ongoing Research) ──────────────────────────────
    // statusKind: 'active' | 'review' | 'published' | 'draft'
    projects: [
        {
            n: "01",
            label: "AI and Clinical Pharmacy",
            title: "AI in Pharmacist-Led Deprescribing",
            desc:  "Examining how AI-assisted decision support can help community and hospital pharmacists identify candidates for deprescribing in older patients with polypharmacy, and the practical and policy barriers to deploying such tools.",
            tech:  ["AI", "Deprescribing", "Polypharmacy", "Clinical Pharmacy"],
            status: "Active — review and commentary work in progress",
            statusKind: "active",
            needs: "Open to clinical pharmacists, geriatricians, and digital-health researchers who want to co-author on the deployment side."
        },
        {
            n: "02",
            label: "Digital Health Policy",
            title: "eHealth Policy Frameworks for LMICs",
            desc:  "Building on prior work analysing eHealth policy adoption in low- and middle-income countries, identifying what makes regional digital-health rollouts succeed or stall.",
            tech:  ["Digital Health", "Policy", "LMICs", "PRISMA"],
            status: "Active — manuscript and collaboration",
            statusKind: "active",
            needs: "Looking for health-policy researchers and country-specific collaborators."
        },
        {
            n: "03",
            label: "Pharmacy Practice · Review",
            title: "Pharmacists in Public Health and Disease Prevention",
            desc:  "A four-domain framework reviewing what we know about pharmacists' roles in preventive, diagnostic, therapeutic, and digital public-health activities, with attention to barriers in low-resource settings.",
            tech:  ["Public Health", "Pharmacy", "Review", "Framework"],
            status: "Published · 2024",
            statusKind: "published",
            doi:   "10.1080/07853890.2024.2362869",
            venue: "Annals of Medicine"
        },
        {
            n: "04",
            label: "Health IT · Survey",
            title: "Electronic Patient Medication Records in UAE Pharmacies",
            desc:  "Cross-sectional survey of community pharmacists in the UAE, evaluating perceived benefits, barriers, and concerns around adopting e-PMR systems beyond hospital settings.",
            tech:  ["e-PMR", "UAE", "Community Pharmacy", "Survey"],
            status: "Published · Pharmacy Practice · 2022",
            statusKind: "published",
            doi:   "10.18549/pharmpract.2022.2.2656",
            venue: "Pharmacy Practice"
        },
        {
            n: "05",
            label: "Telepharmacy · COVID-19",
            title: "Telepharmacy in Pharmacist Counselling of COVID-19 Patients",
            desc:  "Most-cited paper of this group. Investigates how pharmacist-led telepharmacy supported counselling and medication management during the early stages of the pandemic, and what worked when patients could no longer walk into a pharmacy.",
            tech:  ["Telepharmacy", "COVID-19", "Pharmacist Counselling", "Digital Health"],
            status: "Published · 2023",
            statusKind: "published",
            venue: "Telepharmacy literature"
        },
        {
            n: "06",
            label: "Drug Safety · ED",
            title: "Clinical Pharmacy in Reducing Prescribing Errors",
            desc:  "Pre/post and RCT-style evaluations of clinical-pharmacy interventions for prescribing-error reduction in emergency departments and community pharmacies.",
            tech:  ["Drug Safety", "Prescribing Errors", "ED", "Hospital Pharmacy"],
            status: "Published · multiple journals · 2020 to 2022",
            statusKind: "published"
        }
    ],

    // ── Talks, posters, presentations ─────────────────────────────
    // Newest first. `kind`: 'hackathon' | 'poster' | 'talk' | 'workshop' | 'thesis'
    talks: [
        {
            date: "2025",
            year: 2025,
            kind: "talk",
            title: "AI in Clinical Pharmacy — invited commentary",
            venue: "Clinical Pharmacy Connect · multi-institution roundtable",
            desc:  "Invited commentary on the role of AI and machine learning in pharmacy practice. Focused on what works today for hospital and community pharmacists, what does not, and how regulators in the Gulf region can keep up."
        },
        {
            date: "2024",
            year: 2024,
            kind: "talk",
            title: "Drug Safety and Pharmacovigilance in the AI Era",
            venue: "AAU College of Pharmacy · invited lecture",
            desc:  "Departmental lecture on AI-assisted adverse-event detection, the practical limits of LLMs in drug-interaction prediction, and what a pragmatic pharmacovigilance pipeline that uses both ML and human review looks like."
        },
        {
            date: "2023",
            year: 2023,
            kind: "workshop",
            title: "Telepharmacy and Virtual Care — workshop session",
            venue: "AAU Health and Biomedical Research Centre",
            desc:  "Workshop session for postgraduate pharmacy researchers on how to design and run telepharmacy studies in the post-pandemic era. Drew on the COVID-era publication stream and what the longer follow-up data showed."
        },
        {
            date: "2022",
            year: 2022,
            kind: "talk",
            title: "Pharmacist-Led Prescribing Interventions — systematic review protocol",
            venue: "Postgraduate symposium · College of Pharmacy",
            desc:  "Presentation of the pre-registered protocol for the systematic review and meta-analysis of pharmacist-led prescribing interventions, locking inclusion criteria in before any data extraction."
        }
    ],

    // ── Research statement / vision (research.html) ──────────────
    research: {
        kicker: "Research statement",
        h1Front:  "What I work on, and",
        h1Accent: "where it is going",
        intro: "I work at the intersection of clinical pharmacy practice, drug safety, and the digital-health tooling that increasingly mediates both. The sections below describe how that focus formed, what the active threads are, and what a collaboration or advisory role with me actually looks like in practice.",
        sections: [
            {
                kicker: "Origin",
                title: "From the dispensing counter to clinical-pharmacy research",
                body: [
                    "I trained as a pharmacist with the intent of practising. What pulled me toward research was the persistence of certain problems: dispensing errors in busy community pharmacies, prescribing errors in emergency departments, and the failure of regulatory frameworks to catch up with what was already happening at the counter. An MSc in Pharmaceutical Sciences gave me the methods to study those problems properly.",
                    "Early on I focused on drug safety in real practice settings. Dispensing-error rates in the UAE. Prescribing-error patterns in emergency departments. The role of clinical pharmacists in catching both kinds of error before they reach the patient. The methods stayed practical throughout: prospective cohort studies, RCTs, mixed-methods evaluations."
                ]
            },
            {
                kicker: "What I learned",
                title: "Three lessons I will not give up",
                body: [
                    "<strong>1. Pharmacy research should help the pharmacist at the counter.</strong> A study that does not change practice for someone working a shift is a study that did not finish. Every project I lead now is designed around an actual clinical question that came from talking to clinical pharmacists.",
                    "<strong>2. Drug safety and digital health are the same problem.</strong> Whether the channel is in-person counselling, a telepharmacy call, or an AI-assisted decision-support widget, the failure modes look similar. The work I do tries to treat the channel as a variable rather than a category.",
                    "<strong>3. The hard part of AI in pharmacy is not the model.</strong> It is the workflow, the regulator, the indemnity, and the older clinician who has been doing things a particular way for thirty years. Every commentary I write tries to be honest about those constraints rather than glossing them over."
                ]
            },
            {
                kicker: "Current focus",
                title: "Four threads I am pulling on now",
                body: [
                    "<strong>AI-assisted deprescribing.</strong> Older patients on five or more medications are where most preventable harm happens. I am writing on how AI-supported decision tools can help community and hospital pharmacists identify candidates for deprescribing, and what the regulatory and indemnity questions are that keep these tools from being deployed.",
                    "<strong>Digital-health policy in LMICs.</strong> The gap between policy and practice is widest in low- and middle-income countries. The work in this thread builds on prior LMIC-focused reviews and tries to identify what makes regional digital-health rollouts succeed or stall.",
                    "<strong>Electronic patient medication records.</strong> Community pharmacies in the UAE and the wider Gulf are still in the early stages of e-PMR adoption. The studies in this thread evaluate perceived benefits, barriers, and the policy frameworks needed to extend e-PMR systems beyond hospital settings.",
                    "<strong>Pharmacist-led pharmacovigilance.</strong> Adverse-drug-event underreporting is a long-standing problem. I am running studies on how pharmacist-led reporting can be encouraged in real practice settings and how AI tooling can ease the reporting burden without inflating false positives."
                ]
            },
            {
                kicker: "Working with me",
                title: "What collaboration or advisory work looks like",
                body: [
                    "I welcome collaborations with clinical pharmacists, geriatricians, digital-health researchers, and health-policy people working on overlapping questions. I am also open to peer review and editorial-board work in clinical pharmacy, pharmacovigilance, and digital-health journals.",
                    "What I bring: a substantial peer-reviewed publication record across drug safety, telepharmacy, and AI in pharmacy practice; a working laboratory at AAU; existing collaborations across Jordan, the UAE, and the wider Gulf; and the patience to run studies that take more than one funding cycle to mature.",
                    "What I look for in a collaborator: a clinical question that someone working a shift actually cares about, a willingness to do the unglamorous parts of study design properly, and a shared commitment to publishing work that survives contact with practice. I reply to email within a few working days."
                ]
            },
            {
                kicker: "If we should talk",
                title: "Reasons to email me",
                body: [
                    "If you are running a study or writing a manuscript on clinical pharmacy, drug safety, telepharmacy, deprescribing, AI in pharmacy, electronic patient medication records, or digital-health policy in LMICs, and you would like a clinical-pharmacy research collaborator or reviewer, please get in touch.",
                    "I am also happy to give honest feedback on early-stage drafts. Email is the fastest way. Please include a short description of the question and where the work is in its lifecycle."
                ]
            }
        ],
        finalCTAText: "Email Ahmad →",
        finalCTAHref: "mailto:Ahmad.almeslamani@aau.ac.ae?subject=Research%20collaboration&body=Dear%20Dr%20Al%20Meslamani%2C%0A%0AI%20saw%20your%20research%20statement%20and%20wanted%20to%20discuss%20a%20potential%20collaboration.%0A%0A"
    },

    // ── Contact page (contact.html) ───────────────────────────────
    // formAction = a Formspree endpoint. Will need to be created at
    // formspree.io (free tier ok) before the form actually delivers mail.
    contact: {
        kicker: "Get in touch",
        h1Front:  "Let's",
        h1Accent: "talk",
        intro: "I read every email. Below the form there are short notes for collaborators, review requests, and press, plus the direct ways to reach me.",
        formAction: "https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID",
        formNote: "Form endpoint not yet configured. Email directly while we set this up.",
        directEmail: "Ahmad.almeslamani@aau.ac.ae",
        blocks: [
            {
                icon: "🤝",
                title: "Research collaborators",
                body:  "If you are running studies in clinical pharmacy, pharmacovigilance, telepharmacy, deprescribing, AI in pharmacy practice, or digital-health policy in LMICs, and would like a clinical-pharmacy research collaborator, I would be glad to hear from you. See the <a href=\"projects.html\">Ongoing Research</a> page for what is currently active."
            },
            {
                icon: "📝",
                title: "Review and editorial work",
                body:  "Happy to peer review manuscripts and serve on editorial boards in clinical pharmacy, drug safety, pharmacovigilance, digital-health, and AI-in-healthcare journals. Please include a brief description of the journal scope and what you are looking for."
            },
            {
                icon: "✉️",
                title: "Journalists and podcasts",
                body:  "Available to speak on AI in pharmacy practice, drug safety in the Gulf region, telepharmacy lessons from the pandemic, and digital-health policy in low- and middle-income countries. Reach out via the form or directly by email."
            }
        ],
        responseTimeNote: "Usually within a few working days, faster on weekdays in Gulf Standard Time."
    },

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
