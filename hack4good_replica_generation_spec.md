# Hack4Good 2.0 Website Replica — Generation Specification

> Source reference: https://hack4good2-0.ieeespskc.in/
>
> Goal: recreate the same website experience, information architecture, layout hierarchy, navigation model, event flow, and overall visual character while changing only the **event name** and **event logo**.
>
> Use this document as the direct implementation prompt for a coding agent or website generator.

---

## 1. Core instruction

Build a highly faithful recreation of the Hack4Good 2.0 event website.

The new site should:

- retain the same page structure;
- retain the same section order;
- retain the same type of navigation;
- retain the same information hierarchy;
- retain the same event data and factual structure unless explicitly replaced;
- retain the same multi-page architecture;
- retain the same responsive behavior;
- retain the same dark, technical, humanitarian-event visual direction;
- retain the same CTA locations and content density;
- preserve all current event facts and numbers;
- preserve all current phases, tracks, eligibility rules, schedules, workshop architecture, judging logic, and participation flow;
- change only:
  - `Hack4Good 2.0` → `{{NEW_EVENT_NAME}}`
  - original event logo → `{{NEW_EVENT_LOGO}}`

Do **not** redesign it into a generic hackathon page.

Do **not** simplify the information architecture.

Do **not** remove any major section.

Do **not** change factual event information unless a replacement value is supplied.

---

# 2. Global replacement variables

Use a single config/data file.

```js
const EVENT = {
  oldName: "Hack4Good 2.0",
  name: "{{NEW_EVENT_NAME}}",
  logo: "{{NEW_EVENT_LOGO}}",
  edition: "2.0",
  tagline: "Innovation for Humanity",
  organizer: "IEEE SPS Kerala Chapter",
  supportingOrganization: "IEEE Kerala Section",
  dates: "Oct – Dec 2026",
  phase1Start: "10 Oct 2026",
  teamSize: "2–4 members",
  femaleMemberRule: "At least one female member per team",
  problemStatements: 25,
  sdgTracks: 7,
  workshopLayers: 6,
  finalHackHours: 36
};
```

Every visible occurrence of the old event name must be controlled from this configuration.

The new logo must be used in:

- navbar;
- hero;
- footer;
- favicon / social preview if appropriate;
- mobile menu.

---

# 3. Recommended implementation stack

Preferred:

```text
React
Vite
TypeScript
CSS Modules or Tailwind CSS
Lucide icons
Framer Motion only for subtle movement
```

Alternative:

```text
HTML
CSS
Vanilla JavaScript
```

The site is primarily informational, so no backend is required for the initial build.

---

# 4. Required routes

Create the following routes.

```text
/
├── index
├── problem-statements
└── schedule
```

Recommended URLs:

```text
/
/problem-statements
/schedule
```

The original site also uses anchor navigation from the homepage.

Required homepage anchors:

```text
#about
#timeline
#tracks
#problems
#evaluation
#pricing
#phase1
#phase2
#faq
#contact
```

---

# 5. Global layout

## Announcement strip

Place a thin full-width strip at the top.

Content:

```text
Registration opens soon · Phase 1 begins 10 Oct 2026
```

Visual behavior:

- compact height;
- uppercase or compact technical typography;
- high contrast;
- centered;
- visible above main navbar.

---

# 6. Navbar

Desktop navbar structure:

```text
[LOGO + {{NEW_EVENT_NAME}} / Tech-a-thon]

About
Timeline
Tracks
Problems
Schedule
FAQ
Contact

[Registration opens soon]
```

Requirements:

- sticky or semi-sticky;
- translucent/dark background;
- subtle divider;
- responsive;
- hamburger menu on mobile;
- CTA button on right;
- logo on far left;
- smooth scrolling for homepage anchor links;
- page links for:
  - Problems
  - Schedule

Navbar link behavior:

```text
About       -> /#about
Timeline    -> /#timeline
Tracks      -> /#tracks
Problems    -> /problem-statements
Schedule    -> /schedule
FAQ         -> /#faq
Contact     -> /#contact
```

---

# 7. Hero section

Use a large editorial technical-event hero.

Content hierarchy:

```text
Edition 2.0

Innovation for Humanity

Engineered so teams understand
the problem before they build.
```

Intro copy should communicate:

- national humanitarian technology challenge;
- organized by IEEE SPS Kerala Chapter;
- idea-to-impact pipeline;
- three structured phases;
- 25 interdisciplinary problem statements;
- six workshop layers;
- one 36-hour finale.

Phase labels:

```text
Phase 1
Online Idea Hack

Phase 2
HackTank & Mentorship

Phase 3
3-Day Offline Tech-a-thon
```

Primary CTA:

```text
Registration opens soon →
```

Below the CTA include an information grid.

### Hero information cards

#### Dates

```text
Oct – Dec 2026
Three phases
```

#### Mode

```text
Virtual + Offline
3-day in-person finale
```

#### Teams

```text
2–4 members
1 female member mandatory
```

#### Organizer

```text
IEEE SPS Kerala Chapter
with IEEE Kerala Section
```

---

# 8. Event metric strip

Create five large metric blocks.

```text
3
Structured Phases

25
Problem Statements

7
UN SDG Tracks

6
Workshop Layers

36 hrs
Final Hack Sprint
```

The numbers should visually dominate.

Use:

- large display numerals;
- narrow supporting label;
- borders between cells;
- horizontal desktop layout;
- stacked/grid layout on mobile.

---

# 9. About section

Anchor:

```text
#about
```

Eyebrow:

```text
About the event
```

Main heading:

```text
Not another 24-hour build sprint
```

Explain that the event is intentionally structured so teams:

1. validate humanitarian problems;
2. receive mentorship;
3. undergo technical preparation;
4. examine ethical considerations;
5. reflect on humanitarian learning;
6. build;
7. evaluate impact.

---

# 10. Three principle cards

Create three symbolic information cards.

## Card 1

Title:

```text
Community first, technology second
```

Meaning:

Teams must clearly identify:

- beneficiary;
- real problem;
- gap analysis;
- ethical risks;

before moving into implementation.

Suggested icon:

```text
●
```

---

## Card 2

Title:

```text
Skill equity by design
```

Meaning:

Capacity-building workshops are delivered before the main hack so participants receive shared training before implementation.

Suggested icon:

```text
■
```

---

## Card 3

Title:

```text
Reflection is scored
```

Meaning:

The BrainStorm Round includes a Humanitarian Learning Report which contributes approximately 20–25% of the final score.

Suggested icon:

```text
▲
```

---

# 11. Traditional hackathon comparison table

Create a two-column comparison.

Headers:

```text
Traditional hackathon
{{NEW_EVENT_NAME}}
```

Rows:

```text
Idea → Build → Present
vs.
Idea → Validation → Mentorship → Technical Training → Humanitarian Awareness → Reflection → Build → Evaluate Impact
```

```text
Judges only the final output
vs.
Evaluates understanding, ethics, learning and community impact
```

```text
No structured mentorship
vs.
Domain and technical mentors assigned
```

```text
All teams start at the same level
vs.
Capacity-building creates more equitable technical preparation
```

Desktop:

- two-column table.

Mobile:

- stacked comparison cards.

---

# 12. Timeline section

Anchor:

```text
#timeline
```

Eyebrow:

```text
Event timeline
```

Heading:

```text
Three phases, one pipeline
```

Core idea:

Each phase works as a qualification gate.

Flow:

```text
PHASE 1
Online Idea Hack

↓ shortlisted teams

PHASE 2
HackTank + Structured Mentorship

↓ finalists

PHASE 3
3-Day Offline Tech-a-thon
```

Clearly show progression.

Phase 1 success:

```text
earns mentorship
```

Phase 2 success:

```text
earns a seat in the offline finale
```

Visual treatment:

- large numbered cards;
- vertical connector line;
- desktop horizontal progression or editorial timeline;
- mobile vertical flow.

---

# 13. Eligibility section

Heading:

```text
Who can enter
```

Key facts:

```text
Open nationally
```

```text
IEEE membership affects the participation fee, not eligibility.
```

Important warning:

```text
At least one female member per team is mandatory.
```

Treat the rule as a clear highlighted eligibility condition.

---

## Eligibility card 1

Title:

```text
Team size: 2 to 4
```

Details:

- registration is team-based;
- first listed member is the team lead;
- team lead becomes the primary point of contact.

---

## Eligibility card 2

Title:

```text
One SDG track per team
```

Details:

- teams choose one of seven UN SDG tracks;
- exact problem statement can be locked during Phase 1.

---

## Eligibility card 3

Title:

```text
Category-based fees
```

Details:

- fees are charged per participant;
- fee depends on each participant's IEEE membership status;
- mixed teams therefore pay the sum of individual member categories;
- do not display the concept as a flat team fee.

CTA:

```text
See the fee categories
```

---

# 14. Workshop tracks section

Anchor:

```text
#tracks
```

Eyebrow:

```text
Phase 3 workshop tracks
```

Heading:

```text
Six workshops. One technology stack.
```

Explain that the six domains are layers of one humanitarian cyber-physical system rather than six isolated topics.

Training structure:

```text
Set A
3 hours total across two sessions

Set B
5.5 hours total
with greater emphasis on hands-on implementation
```

---

# 15. Required six workshop domains

Use the following workshop domains.

```text
1. GIS, Weather Intelligence & Remote Sensing
2. Edge AI & Computer Vision
3. Offline-First & Resilient Application Development
4. Embedded Systems & Sensor Integration
5. Rapid Hardware Prototyping & Digital Fabrication
6. Robotics, Automation & Control Systems
```

Create one technical card for each.

Suggested card fields:

```text
Workshop name
Short description
Example technologies
Related system layer
Workshop set
```

Do not visually treat them as unrelated silos.

Use connectors, a system diagram, or shared grid language to reinforce that the stack is integrated.

---

# 16. Problem statements section

Anchor:

```text
#problems
```

Heading:

```text
25 interdisciplinary challenges, 7 SDG tracks
```

Explain that each challenge should require multiple workshop layers rather than a single isolated technology.

Preview table:

```text
SDG
Track
Problems
Core humanitarian theme
```

CTA:

```text
Explore all 25 problem statements →
```

Link to:

```text
/problem-statements
```

---

# 17. Evaluation section

Anchor:

```text
#evaluation
```

Eyebrow:

```text
Evaluation criteria
```

Heading:

```text
How you are scored
```

Create three rubric columns/tabs:

```text
Phase 1
Idea Hack

Phase 2
HackTank Pitch

Final Hack
Phase 3
```

Each should support:

```text
Criterion
Weight
```

Build the component so evaluation values can be stored in a data object.

Example schema:

```js
evaluation = {
  phase1: [],
  phase2: [],
  phase3: []
}
```

Important standalone note:

```text
BrainStorm Round / Humanitarian Learning Report
```

The report should cover themes such as:

- workshop learning;
- ethical risks;
- community validation;
- sustainability pathway;
- IEEE humanitarian-technology awareness.

Weight:

```text
20–25% of the final score
```

---

# 18. Registration and pricing

Anchor:

```text
#pricing
```

Eyebrow:

```text
Registration & pricing
```

Heading:

```text
Priced per participant, not per team
```

Explain:

- members of one team may belong to different pricing categories;
- total team amount equals the sum of each participant's fee;
- do not show one fixed team price.

Status notice:

```text
Registration will open soon for Phase 1.
```

Supporting factual information:

```text
Phase 1 begins 10 October 2026.
```

The registration link is expected to be announced on the site and organizer social channels.

Use a disabled or upcoming CTA state until a live registration URL is provided.

Suggested state:

```text
Registration opens soon
```

---

# 19. Phase 1 submission section

Anchor:

```text
#phase1
```

Eyebrow:

```text
Phase 1 submission guidelines
```

Heading:

```text
What your team submits
```

Structure this as six submission-component cards.

The intent of the section should emphasize:

- real community;
- concrete humanitarian problem;
- validation;
- feasibility;
- ethical awareness;
- impact thinking.

Status note:

```text
Phase 1 submission portal opens 10 Oct 2026.
```

CTA:

```text
Open the Phase 1 submission form →
```

Keep the target URL configurable.

```js
phase1SubmissionUrl: "{{PHASE_1_FORM_URL}}"
```

---

# 20. Phase 2 section

Anchor:

```text
#phase2
```

Eyebrow:

```text
Phase 2
```

Heading:

```text
HackTank & structured mentorship
```

Explain that shortlisted teams pitch to a mixed panel involving:

- IEEE professionals;
- humanitarian practitioners;
- industry mentors;
- academicians.

---

# 21. Required Phase 2 pitch areas

Display the following as chips/cards/checklist:

```text
Problem validation
Stakeholder mapping
Implementation feasibility
Risk factors
Sustainability pathway
```

---

# 22. Mentorship system

Heading:

```text
Two mentors per selected team
```

Mentor 1:

```text
Technical Mentor
```

Purpose:

```text
domain-specific engineering guidance
```

Mentor 2:

```text
Humanitarian / Domain Mentor
```

Purpose:

```text
community context and ethics advisory
```

Mentor focus areas:

```text
Real-world constraints
Ethical deployment
Scalability
Cost-effectiveness
Local context adaptation
```

---

# 23. Mentor Networking Night

Create a special feature card.

Heading:

```text
Mentor Networking Night
```

Structure:

- SDG-themed networking tables;
- industry expert;
- humanitarian practitioner;
- IEEE volunteer leader;
- rotating team interactions;
- rotations approximately every 20–30 minutes.

Use a visually distinctive section because this is a special programme item.

---

# 24. IEEE Humanitarian Technology representation

Eyebrow:

```text
HT representation sessions
```

Heading:

```text
IEEE HTB representation
```

Explain that the event includes plenary / breakout exposure to the IEEE humanitarian-technology ecosystem.

Topics expected to include:

```text
IEEE HTB initiatives
SIGHT projects
EPICS in IEEE
IEEE humanitarian technology resources
Volunteer pathways
```

Speaker status:

```text
Representatives / speakers to be finalized.
```

The site should allow speaker cards to be added later without redesigning the section.

---

# 25. Phase 3 finale section

Eyebrow:

```text
Phase 3 · the finale
```

Heading:

```text
55 hours. 36 of them continuous.
```

Core schedule:

```text
Friday 9:00 AM
to
Sunday 4:00 PM
```

Main hack:

```text
36-hour continuous hack
```

Hack kickoff:

```text
Friday midnight
```

Meals occur without stopping the hack clock.

Metric cards:

```text
3
Days, in person

36
Hour final hack

6
Workshop layers

{{FINALIST_TEAM_COUNT}}
Teams in the finale
```

CTA:

```text
See the full 3-day schedule →
```

Link:

```text
/schedule
```

---

# 26. Legacy section

Eyebrow:

```text
Legacy
```

Heading:

```text
Hack4Good 1.0 — NIT Calicut, 2024
```

Keep this legacy section intact unless specifically instructed to change historical information.

Explain the previous edition as the proof-of-concept for the structured humanitarian-innovation format.

Add a small table:

```text
Aspect | Details
```

Add a visual/media area titled:

```text
From the 2024 edition
```

Allow gallery assets to be populated from a config array.

---

# 27. FAQ section

Anchor:

```text
#faq
```

Heading:

```text
Questions we get asked
```

Use accordion items.

At minimum include questions covering:

```text
Who can participate?
How many members can a team have?
Is IEEE membership required?
Is a female team member mandatory?
How are participation fees calculated?
How many phases are there?
What happens after Phase 1?
What is HackTank?
What happens during Phase 3?
How long is the final hack?
What is the BrainStorm Round?
Where can teams see the problem statements?
```

Answers should stay consistent with the event rules in this document.

---

# 28. Final CTA

Large closing statement:

```text
Build something that survives contact with the real world.
```

Supporting information:

```text
Registration opens soon for Phase 1.
Teams of 2–4.
One SDG track.
Three phases.
```

Primary CTA:

```text
Browse problem statements
```

Secondary CTA:

```text
Registration opens soon
```

---

# 29. Footer

Footer brand:

```text
{{NEW_EVENT_LOGO}}
{{NEW_EVENT_NAME}}
```

Description should identify it as:

```text
A national humanitarian technology tech-a-thon organized by IEEE SPS Kerala Chapter, with IEEE Kerala Section supporting the programme structure.
```

### Footer column: Event

```text
About
Timeline
Workshop tracks
Problem statements
Phase 3 schedule
```

### Footer column: Participate

```text
Registration & fees
Pricing
Eligibility
FAQ
```

### Footer column: Contact

Fields:

```text
Email
Phone
Website
```

Website:

```text
ieeespskc.in
```

Copyright:

```text
© 2026 IEEE SPS Kerala Chapter. All rights reserved.
```

---

# 30. Problem Statements page

Route:

```text
/problem-statements
```

Shared top area:

- announcement strip;
- shared navbar;
- organizer branding;
- event logo;
- same footer.

Breadcrumb:

```text
Home / Problem statements
```

Main heading:

```text
25 problem statements
```

Intro should communicate:

- each challenge combines multiple technical workshop layers;
- challenges are humanitarian cyber-physical systems;
- problem statements are weighted equally;
- teams should choose based on the community/problem they care about.

---

# 31. SDG distribution block

Eyebrow:

```text
SDG distribution
```

Heading:

```text
How the 25 are spread
```

Table:

```text
SDG
Track
Problems
Core humanitarian theme
```

Create this from structured data.

Example:

```js
const sdgTracks = [
  {
    sdg: "",
    track: "",
    problemCount: 0,
    theme: ""
  }
];
```

---

# 32. Problem search

Add live search.

Placeholder:

```text
Search titles, problems, technologies…
```

Search should filter:

- problem title;
- problem description;
- technologies;
- SDG track;
- keywords.

No page reload.

---

# 33. Problem cards

Create 25 expandable/filterable problem cards.

Suggested schema:

```js
{
  id: 1,
  title: "",
  sdg: "",
  track: "",
  humanitarianContext: "",
  challenge: "",
  beneficiaries: [],
  technologies: [],
  workshopDomains: [],
  outcomes: []
}
```

Recommended card UI:

```text
Problem #
SDG badge
Track badge
Title
Short description

Technologies
Workshop layers

[View challenge]
```

---

# 34. Workshop coverage table

Eyebrow:

```text
Workshop coverage
```

Heading:

```text
Which workshops each domain spans
```

Use the following exact mapping as factual data.

```text
GIS, Weather Intelligence & Remote Sensing
1, 2, 3, 4, 7, 8, 9, 11, 12, 13, 15, 16, 18, 20, 21, 24, 25
```

```text
Edge AI & Computer Vision
1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 17, 18, 20, 21, 22, 24
```

```text
Offline-First & Resilient Application Development
All 25
```

```text
Embedded Systems & Sensor Integration
1, 2, 3, 8, 9, 10, 11, 12, 14, 16, 18, 20, 21, 22, 23, 24
```

```text
Rapid Hardware Prototyping & Digital Fabrication
1, 4, 5, 7, 8, 9, 12, 14, 20, 23, 24, 25
```

```text
Robotics, Automation & Control Systems
1, 2, 4, 10, 13, 15, 17, 18, 20, 21, 24, 25
```

Bottom CTA:

```text
Registration opens soon →
```

---

# 35. Schedule page

Route:

```text
/schedule
```

Breadcrumb:

```text
Home / Phase 3 schedule
```

Heading:

```text
Phase 3 — 3-day offline tech-a-thon
```

---

# 36. Schedule summary cards

Create four prominent cards.

### Card 1

```text
~55 hours
```

Supporting:

```text
Friday 9:00 AM through Sunday 4:00 PM IST
```

Treat the programme as continuous.

---

### Card 2

```text
36-hour hack
```

Supporting:

```text
Begins Friday at midnight
```

Meals do not pause the hack clock.

---

### Card 3

```text
8.5 workshop hours
```

Supporting:

```text
Set A: 3 hrs
Set B: 5.5 hrs
```

Set B should be described as more hands-on.

---

### Card 4

```text
3 HTB talks
```

Cover:

```text
Inaugural address
HTB Events Committee breakout
HT volunteer keynote
```

---

# 37. BrainStorm planning note

Add an alert/info component.

Content should explain:

- BrainStorm Round produces the Humanitarian Learning Report;
- report carries around 20–25% of final score;
- current schedule does not assign a fixed slot;
- it may be completed by:
  - slightly trimming a workshop block;
  - running it as a rolling task;
  - overnight completion during the hack.

---

# 38. Schedule page closing CTA

Heading:

```text
Seats at the finale are earned in Phase 1.
```

Supporting sequence:

```text
Register
Submit the idea
Pitch
Qualify for the offline phase
```

Buttons:

```text
Registration opens soon →
Browse problem statements
```

---

# 39. Visual design direction

The site should look:

```text
editorial
technical
institutional
modern
high-trust
humanitarian
engineering-focused
```

Avoid:

```text
generic neon hacker UI
gaming aesthetic
overdone gradients
cartoon illustrations
excessive glassmorphism
template-like startup landing pages
```

---

# 40. Color system

Recreate the source website's visual mood rather than inventing a different brand.

Recommended token structure:

```css
:root {
  --bg: #0b0d0e;
  --surface: #101315;
  --surface-2: #15191c;

  --text: #f2f2ee;
  --text-muted: #a9ada9;

  --line: rgba(255,255,255,.12);
  --line-strong: rgba(255,255,255,.22);

  --accent: #d7ff3f;
  --accent-soft: rgba(215,255,63,.12);

  --danger: #ff6b5f;
}
```

If the original site's extracted CSS is available during implementation, prefer its actual palette.

---

# 41. Typography

Use an editorial sans-serif combination.

Recommended:

```text
Heading:
Space Grotesk / Geist / Inter Tight

Body:
Inter / Geist / Arial

Technical labels:
IBM Plex Mono / JetBrains Mono
```

Hierarchy:

```text
Hero heading:
clamp(3.5rem, 8vw, 8rem)

Section heading:
clamp(2.2rem, 5vw, 5rem)

Body:
1rem–1.15rem

Eyebrow:
0.72rem–0.85rem
uppercase
tracking
```

---

# 42. Grid and spacing

Desktop maximum content width:

```text
1280–1440px
```

Section vertical spacing:

```text
96px–160px
```

Mobile:

```text
56px–88px
```

Use:

- thin borders;
- aligned grids;
- generous whitespace;
- asymmetric editorial layouts;
- large numbers;
- compact labels.

---

# 43. Buttons

Primary CTA:

- accent background;
- dark text;
- square/slightly rounded corners;
- arrow icon;
- clear hover shift.

Secondary:

- transparent;
- border;
- light text.

Disabled/upcoming CTA:

- muted;
- still visibly interactive-looking but non-clickable;
- show `Registration opens soon`.

---

# 44. Card style

Cards should use:

```text
dark surface
1px border
minimal radius
generous internal spacing
```

Suggested:

```css
border-radius: 2px 2px 16px 2px;
```

or near-square editorial geometry.

Do not use large bubbly SaaS-style cards.

---

# 45. Motion

Use restrained motion.

Allowed:

- fade + translate on section entry;
- number count-up once;
- subtle button arrow movement;
- navbar background transition;
- accordion height animation;
- search result transitions;
- card hover border shift.

Avoid:

- excessive parallax;
- spinning elements;
- heavy WebGL;
- distracting cursor effects.

---

# 46. Responsive requirements

Breakpoints:

```text
mobile: < 640px
tablet: 640–1024px
desktop: > 1024px
```

On mobile:

- hero phases stack vertically;
- metric strip becomes 2-column / 1-column;
- comparison table stacks;
- timeline becomes vertical;
- navbar becomes drawer menu;
- tables become horizontally scrollable or card-based;
- buttons remain at least 44px high;
- no text clipping;
- hero heading must stay within viewport.

---

# 47. Accessibility

Must include:

- semantic heading order;
- keyboard navigable menu;
- visible focus states;
- aria labels;
- accessible accordion controls;
- meaningful alt text;
- minimum contrast compliance;
- reduced-motion support.

Example:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 48. SEO

Homepage title:

```text
{{NEW_EVENT_NAME}} — National Humanitarian Tech-a-thon | IEEE SPS Kerala Chapter
```

Problem page:

```text
Problem Statements — {{NEW_EVENT_NAME}} | IEEE SPS Kerala Chapter
```

Schedule page:

```text
Phase 3 Schedule — {{NEW_EVENT_NAME}} | IEEE SPS Kerala Chapter
```

Meta description should mention:

- national humanitarian technology challenge;
- IEEE SPS Kerala Chapter;
- three phases;
- problem statements;
- mentorship;
- offline tech-a-thon.

Add:

- Open Graph;
- Twitter/X cards;
- favicon;
- canonical URLs;
- structured Event schema if final event dates/venue become available.

---

# 49. Content architecture

Store event content separately from UI.

Recommended:

```text
src/
├── data/
│   ├── event.ts
│   ├── timeline.ts
│   ├── workshops.ts
│   ├── evaluation.ts
│   ├── faq.ts
│   ├── problems.ts
│   └── schedule.ts
```

This makes future event editions easy to update.

---

# 50. Suggested component structure

```text
src/
├── components/
│   ├── AnnouncementBar
│   ├── Navbar
│   ├── MobileMenu
│   ├── Hero
│   ├── StatGrid
│   ├── SectionHeader
│   ├── PrincipleCard
│   ├── ComparisonTable
│   ├── Timeline
│   ├── EligibilityCards
│   ├── WorkshopGrid
│   ├── ProblemPreview
│   ├── EvaluationTabs
│   ├── PricingSection
│   ├── PhaseOne
│   ├── PhaseTwo
│   ├── MentorSection
│   ├── HTBSection
│   ├── FinaleSection
│   ├── LegacySection
│   ├── FAQ
│   ├── FinalCTA
│   ├── Footer
│   ├── ProblemSearch
│   ├── ProblemCard
│   └── ScheduleCard
```

---

# 51. Data integrity rules

Do not accidentally change these factual values:

```text
3 structured phases
25 problem statements
7 SDG tracks
6 workshop layers
2–4 members per team
minimum 1 female member per team
36-hour final hack
Phase 1 starts 10 October 2026
Phase 3 programme ≈55 hours
Workshop time = 8.5 hours
3 HTB talks
Humanitarian Learning Report ≈20–25% of final score
```

---

# 52. Branding replacement rule

Search the entire project for:

```text
Hack4Good
Hack4Good 2.0
hack4good
```

Replace branding only where it identifies the current event.

Do **not** alter historical content referring to:

```text
Hack4Good 1.0 — NIT Calicut, 2024
```

unless the user explicitly asks to rewrite the legacy section.

---

# 53. Logo replacement rule

Create:

```text
/public/assets/event-logo.svg
```

or:

```text
/public/assets/event-logo.png
```

Map `{{NEW_EVENT_LOGO}}` to that location.

Requirements:

- transparent background preferred;
- navbar version;
- hero version;
- footer version;
- high-DPI support;
- preserve aspect ratio;
- no stretching.

---

# 54. Registration state

Since registration is currently not live, do not invent a working registration form.

Use:

```js
registration = {
  status: "upcoming",
  label: "Registration opens soon",
  url: null
}
```

Once URL is provided:

```js
registration = {
  status: "open",
  label: "Register now",
  url: "{{REGISTRATION_URL}}"
}
```

---

# 55. Contact configuration

Use configurable values.

```js
contact = {
  email: "{{CONTACT_EMAIL}}",
  phone: "{{CONTACT_PHONE}}",
  website: "https://ieeespskc.in/"
}
```

Do not hardcode fake phone numbers or email addresses.

---

# 56. Content safety rule for generation

When implementing from this specification:

- preserve the event facts listed here;
- preserve section names and information architecture;
- do not fabricate missing fee amounts;
- do not fabricate speakers;
- do not fabricate venue;
- do not fabricate finalist count;
- do not fabricate registration URLs;
- use clearly marked placeholders when source values are unavailable.

---

# 57. Completion checklist

The implementation is complete only when all of the following exist:

- [ ] announcement strip
- [ ] responsive navbar
- [ ] new logo everywhere
- [ ] new event name everywhere
- [ ] hero
- [ ] phase preview
- [ ] fact cards
- [ ] event statistics
- [ ] about section
- [ ] three principle cards
- [ ] comparison table
- [ ] timeline
- [ ] eligibility section
- [ ] workshop section
- [ ] problem statement preview
- [ ] evaluation section
- [ ] registration / pricing section
- [ ] Phase 1 section
- [ ] Phase 2 section
- [ ] mentorship block
- [ ] networking night
- [ ] IEEE HTB section
- [ ] Phase 3 finale
- [ ] legacy section
- [ ] FAQ
- [ ] final CTA
- [ ] footer
- [ ] `/problem-statements`
- [ ] problem search
- [ ] 25-problem data architecture
- [ ] workshop coverage table
- [ ] `/schedule`
- [ ] four schedule summary cards
- [ ] BrainStorm note
- [ ] mobile responsiveness
- [ ] accessibility
- [ ] SEO
- [ ] no broken anchors
- [ ] no dead buttons
- [ ] no horizontal overflow
- [ ] event name controlled by config
- [ ] logo controlled by config

---

# 58. Final generator prompt

Use the following prompt with a coding agent:

```text
Recreate the website at https://hack4good2-0.ieeespskc.in/ as faithfully as possible in structure, hierarchy, layout system, responsiveness, section ordering, navigation behavior, multi-page architecture and overall visual character.

Use the implementation specification in this Markdown file as the source of truth.

IMPORTANT BRANDING CHANGE:
Replace the current event name "Hack4Good 2.0" with "{{NEW_EVENT_NAME}}" everywhere that refers to the current edition.

Replace the current event logo with "{{NEW_EVENT_LOGO}}".

Do not otherwise redesign the event.

Keep:
- the same three-phase architecture;
- the same 25-problem structure;
- the same 7 SDG-track structure;
- the same 6 workshop domains;
- the same participation rules;
- the same evaluation concept;
- the same Phase 1 → Phase 2 → Phase 3 flow;
- the same problem-statements page;
- the same schedule page;
- the same navbar/footer architecture;
- the same CTA placement;
- the same information density;
- the same editorial technical visual language.

Do not invent missing data.

Use placeholder variables for unavailable values such as:
{{REGISTRATION_URL}}
{{PHASE_1_FORM_URL}}
{{CONTACT_EMAIL}}
{{CONTACT_PHONE}}
{{FINALIST_TEAM_COUNT}}

Build the page as a production-ready responsive website.

Requirements:
- React + Vite + TypeScript preferred
- componentized architecture
- event data stored separately from components
- mobile-first responsive implementation
- accessible navigation
- semantic HTML
- excellent performance
- subtle animation only
- no unnecessary backend
- no redesign into a generic template
- no removal of sections

Before finishing:
1. test every nav link;
2. test all anchors;
3. test mobile menu;
4. test problem search;
5. test desktop/tablet/mobile widths;
6. check that old current-edition branding does not remain accidentally;
7. preserve Hack4Good 1.0 historical references in the legacy section unless told otherwise;
8. verify there are no broken buttons or overflow issues.
```

---

# 59. Source snapshot used for this specification

The source website currently identifies the event as a national humanitarian technology tech-a-thon organized by IEEE SPS Kerala Chapter and structured around:

```text
3 phases
25 problem statements
7 SDG tracks
6 workshop layers
36-hour finale
2–4 person teams
minimum one female team member
Phase 1 beginning 10 Oct 2026
```

It also includes dedicated Problem Statements and Phase 3 Schedule pages.

This specification intentionally models those factual structures while making the current event name and logo replaceable from one configuration layer.
