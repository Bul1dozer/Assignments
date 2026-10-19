export interface Article {
  id: string;
  category: 'National' | 'International' | 'Sports' | 'Entertainment';
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  body: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 'national-bank-whatsapp-banking',
    category: 'National',
    title: 'Bank Windhoek Becomes First Bank in Namibia to Launch WhatsApp Banking',
    summary:
      'In April 2026, Bank Windhoek introduced WhatsApp Banking, allowing customers to check balances, make payments, and buy airtime through a platform they already use every day.',
    author: 'Willemina T. Alfons',
    date: 'October 14, 2026',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/2260237/pexels-photo-2260237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A person using a smartphone, emphasising modern digital banking technology',
    imageCredit: 'Photo: Absalom Robinson / Pexels',
    tags: ['Banking', 'Technology', 'Digital', 'Bank Windhoek'],
    body: `
In April 2026, Bank Windhoek became the first bank in Namibia to launch WhatsApp Banking, a digital service designed to make everyday banking simpler and more accessible by using a communication platform that customers already use every day.

The service allows customers to check balances, transfer money, pay beneficiaries, buy airtime, and perform other routine banking tasks directly through WhatsApp \u2014 without needing to visit a branch, download a separate app, or navigate a traditional online banking portal.

## Why WhatsApp Banking Matters

According to industry data, WhatsApp is the most widely used messaging platform in Namibia, particularly among smartphone users who may not regularly use banking apps. By bringing banking services to where customers already are, Bank Windhoek is addressing a key challenge in digital banking adoption: convenience.

"Customers should not have to change their habits to bank with us," a Bank Windhoek representative said when the service launched. "We are bringing banking to the platform they already use every day."

## The Phygital Approach

The WhatsApp Banking launch is part of Bank Windhoek\u2019s broader "phygital" strategy, which combines physical and digital banking. The Bank\u2019s Goreangab Mall Digital Banking Hub, opened earlier in 2026, is another example \u2014 combining in-person service with self-service banking and bringing services closer to the community.

A Bank Windhoek executive explained that customers may want the convenience of digital services while still needing human assistance when they have more difficult questions. The phygital approach ensures that digital convenience does not mean losing human support.

## Customer Response

The Bank\u2019s 2025 customer survey recorded a Net Promoter Score of 45 percent, brand affinity of 83 percent, and customer satisfaction of 76 percent \u2014 figures that suggest a strong foundation for digital service adoption.

Early feedback on WhatsApp Banking has focused on its simplicity. Customers who previously found online banking intimidating report that the WhatsApp interface feels familiar and approachable, since it works like any other chat conversation.

## Safety and Security

Bank Windhoek has emphasised that WhatsApp Banking uses secure authentication and does not share customer banking details with WhatsApp or any third party. Customers are reminded to never share their PIN or passwords and to only use the official Bank Windhoek WhatsApp number, which is displayed on the Bank\u2019s website and verified social media accounts.

The Bank has also launched a fraud-awareness initiative alongside the WhatsApp Banking rollout, providing tips on how to identify phishing attempts and scam messages.

## What This Means for Customers

For the average Bank Windhoek customer, WhatsApp Banking means being able to:

- **Check account balances** in seconds without logging into a separate app.
- **Transfer money** to beneficiaries using a simple chat interface.
- **Buy airtime** directly from a bank account.
- **Receive transaction notifications** in real time.
- **Get customer support** without waiting in a branch queue.

## Looking Ahead

The launch positions Bank Windhoek as an innovator in the Namibian banking sector. As digital adoption continues to grow, the Bank\u2019s strategy of meeting customers where they are \u2014 whether on WhatsApp, at a Digital Banking Hub, or through traditional branches \u2014 reflects a customer-centred approach that could shape the future of banking in Namibia.
    `.trim(),
  },
  {
    id: 'national-education-tech',
    category: 'National',
    title: 'Digital Classrooms Pilot Expands to 30 Schools Across Khomas and Erongo',
    summary:
      'A public-private partnership bringing tablet-based learning and solar-powered internet to rural schools reports improved engagement in its first year.',
    author: 'Ndamongelwa Nghipandwa',
    date: 'October 11, 2026',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/30688907/pexels-photo-30688907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A man working on a laptop in a modern indoor workspace in Lagos, Nigeria',
    imageCredit: 'Photo: Ninthgrid / Pexels',
    tags: ['Education', 'Technology', 'Youth', 'Innovation'],
    body: `
A digital classrooms pilot programme that launched in February 2026 with ten schools has been expanded to 30 schools across the Khomas and Erongo regions following what organisers describe as "measurably improved learner engagement" in its first year.

The programme, a partnership between the Ministry of Education, Arts and Culture and two private telecommunications companies, provides tablet devices loaded with curriculum-aligned digital content, solar-powered Wi-Fi routers, and teacher training in blended-learning methodologies.

## Year One Findings

According to an internal evaluation reviewed by *The Namibian Times*, schools participating in the pilot reported a 23 percent increase in learner attendance on days when digital content was used in lessons. Teachers also reported that interactive content — particularly in mathematics and physical science — helped them explain abstract concepts more effectively.

A grade 8 teacher at a pilot school in the Khomas region said the tablets had transformed her classroom. "Before, I had one textbook for every six learners. Now each child can read, watch, and practise at their own pace," she said.

## Challenges Remain

The evaluation also identified challenges. Internet connectivity at three rural schools was intermittent during cloudy periods due to the reliance on solar power. Device maintenance and screen breakage resulted in 11 tablets being taken out of circulation during the first term.

The programme coordinators said they are addressing these issues by procuring ruggedised tablet cases and exploring hybrid power solutions that combine solar with battery storage.

## Scaling Up

The expansion to 30 schools — announced on October 8, 2026 — will include six schools in remote areas of the Erongo region that have never had internet access before. The ministry has said it intends to reach 100 schools by the end of 2027, contingent on continued private-sector support and budget availability.
    `.trim(),
  },
  {
    id: 'international-climate-summit',
    category: 'International',
    title: 'African Nations Push for Binding Climate Finance Commitments at COP31',
    summary:
      'The African Group of Negotiators is calling for a firm timeline on the promised $300 billion annual climate finance pledge, citing mounting adaptation costs across the continent.',
    author: 'Moses K. Shilongo',
    date: 'October 13, 2026',
    readTime: '7 min read',
    image:
      'https://images.pexels.com/photos/35279538/pexels-photo-35279538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Cracked dry earth illustrating the effects of drought and climate change',
    imageCredit: 'Photo: Md Shakib / Pexels',
    tags: ['Climate', 'Diplomacy', 'Finance', 'Africa'],
    body: `
The African Group of Negotiators (AGN) has arrived at the COP31 climate summit with a unified demand: a binding timeline for the delivery of the $300 billion annual climate finance pledge made by developed nations in 2024.

The pledge, agreed at COP29 in Baku, committed developed countries to mobilising $300 billion per year by 2035 to support developing nations with climate adaptation and mitigation. But the AGN says the timeline is too slow and the commitments too vague — particularly for African nations facing escalating droughts, floods, and food insecurity.

## The African Position

Namibia, which is part of the AGN, has particular reason to push for urgency. As the driest country in sub-Saharan Africa, Namibia's agricultural sector, water security, and energy supply are all highly sensitive to climate variability. The country's Green Climate Fund-supported projects on water infrastructure and renewable energy represent a fraction of what full-scale adaptation would require.

"Africa contributes less than four percent of global emissions, yet we bear some of the heaviest costs," said a member of the Namibian delegation, speaking before the summit opened. "We need predictable, grant-based finance — not loans that deepen our debt burden."

## Key Demands

The AGN is seeking:

1. **An earlier delivery timeline** — moving the $300 billion target from 2035 to 2030.
2. **A minimum 50 percent allocation for adaptation**, rather than the current emphasis on mitigation.
3. **Grant-based finance rather than loans**, to avoid increasing debt distress in vulnerable nations.
4. **A transparent tracking mechanism** with annual progress reports verified by an independent body.

## Regional Significance

For Southern Africa specifically, the stakes are direct. The region has experienced three consecutive years of below-average rainfall in multiple countries, driving food insecurity and internal migration. A 2025 report by the Intergovernmental Authority on Climate Prediction and Assessment estimated that Southern African nations will need between $50 billion and $80 billion for adaptation alone by 2030.

Namibia's own National Climate Change Policy identifies water security, agriculture, and coastal infrastructure as the three areas most in need of adaptation funding. The country has already begun integrating climate considerations into its national development planning, but officials say international finance is essential to move from planning to implementation at the required scale.

## What to Watch

Negotiations on the finance timeline are expected to dominate the first week of COP31. A coalition of Small Island Developing States has aligned with the AGN's position, increasing the negotiating bloc's collective weight. Observers say the outcome of these discussions will shape climate policy in Africa for the next decade.
    `.trim(),
  },
  {
    id: 'international-tech-cybersecurity',
    category: 'International',
    title: 'Southern African Bloc Launches Joint Cybersecurity Response Framework',
    summary:
      'SADC member states have signed a regional agreement to share threat intelligence and coordinate responses to cross-border cyberattacks targeting critical infrastructure.',
    author: 'Selma Amukwiyo',
    date: 'October 9, 2026',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/2260237/pexels-photo-2260237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A person using a smartphone, emphasising modern digital technology',
    imageCredit: 'Photo: Absalom Robinson / Pexels',
    tags: ['Cybersecurity', 'SADC', 'Technology', 'Diplomacy'],
    body: `
Member states of the Southern African Development Community (SADC) have signed a joint cybersecurity response framework aimed at sharing threat intelligence and coordinating responses to cross-border cyberattacks on critical infrastructure.

The agreement, signed at a ministerial meeting in October 2026, establishes a regional Computer Security Incident Response Team (CSIRT) coordination centre. The centre will serve as a hub for real-time threat information sharing among national cybersecurity teams in the 16 SADC member states.

## Why It Matters

Cyberattacks targeting banks, power grids, and government databases have increased across Southern Africa. In 2025 alone, several SADC nations reported ransomware incidents affecting public services. The absence of a formal coordination mechanism meant that threats detected in one country often reached others before warnings could be issued.

The new framework addresses this gap by creating standardised protocols for incident reporting, joint investigation, and mutual technical assistance.

## Namibia's Role

Namibia's communications regulator, the Communications Regulatory Authority of Namibia (CRAN), will host the interim coordination centre for the first two years. The choice reflects Namibia's relatively advanced national cybersecurity strategy and its existing computer incident response capacity.

## Next Steps

The framework enters into force on January 1, 2027. Member states are expected to nominate their national focal points by the end of November 2026.
    `.trim(),
  },
  {
    id: 'sports-rugby-welwitschias',
    category: 'Sports',
    title: 'Welwitschias Prepare for Africa Cup with High-Performance Camp in Windhoek',
    summary:
      'Namibia\u2019s national rugby squad enters a six-week training block under new coaching staff, eyeing a strong continental showing and a path to 2027 World Cup qualification.',
    author: 'Jafet U. Amakali',
    date: 'October 12, 2026',
    readTime: '4 min read',
    image:
      'https://images.pexels.com/photos/33879975/pexels-photo-33879975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Rugby players in action under stadium lights during an evening match',
    imageCredit: 'Photo: Ollie Craig / Pexels',
    tags: ['Rugby', 'Africa Cup', 'World Cup', 'Welwitschias'],
    body: `
The Welwitschias, Namibia's national rugby team, have entered a six-week high-performance training camp in Windhoek as they prepare for the upcoming Rugby Africa Cup — the continental qualifier pathway for the 2027 Rugby World Cup.

The camp, which began on October 7, 2026, brings together a 38-man provisional squad under the direction of a restructured coaching team. The squad features a blend of experienced overseas-based professionals and emerging domestic talent from the Namibia Premier Rugby league.

## Coaching Restructure

The training camp marks the first major cycle for the new-look coaching staff, who have emphasised a faster, more expansive style of play. The forwards coach, speaking to media at the squad's opening session, said the focus would be on set-piece efficiency and defensive organisation in the early weeks before transitioning to attacking structures.

"We have the athletes. What we need is the precision and the conditioning to play at international intensity for 80 minutes," he said.

## Africa Cup Significance

The Rugby Africa Cup serves as the primary qualification route for African nations seeking a place at the Rugby World Cup. Namibia has qualified for every World Cup since 1999, a streak the squad is determined to extend.

The 2027 tournament, to be hosted in Australia, will feature 24 teams. The African qualification process involves a series of regional and continental matches scheduled throughout 2026 and 2027.

## Squad Depth

The provisional squad includes several players who featured in Namibia's last World Cup campaign, alongside uncapped players who impressed during the domestic season. The coaching staff indicated that the final squad of 30 would be named after two warm-up fixtures in November.

A prominent feature of the camp is the integration of sports science — including GPS tracking of training loads, nutrition planning, and recovery protocols — which the squad has not previously had access to on a consistent basis.

## Community Engagement

As part of the camp, the squad will conduct a youth coaching clinic at a Windhoek-based school, aiming to inspire the next generation of Namibian rugby players. The clinic is open to learners aged 12 to 16 and will focus on fundamental skills and the values of teamwork and discipline.
    `.trim(),
  },
  {
    id: 'sports-athletics-namibia',
    category: 'Sports',
    title: 'Namibian Sprint Sensation Targets Sub-10 Second 100m at Continental Meet',
    summary:
      'A 21-year-old sprinter from the Oshana region is turning heads on the African athletics circuit and has his sights set on breaking the 10-second barrier.',
    author: 'Loini K. Hashipala',
    date: 'October 10, 2026',
    readTime: '4 min read',
    image:
      'https://images.pexels.com/photos/401896/pexels-photo-401896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Empty running track lane with 1500 metre marking on a sunny day',
    imageCredit: 'Photo: Mateusz Dach / Pexels',
    tags: ['Athletics', 'Sprint', 'Youth', 'Africa'],
    body: `
A 21-year-old sprinter from the Oshana region has emerged as one of the most exciting prospects in African athletics, recording a personal best of 10.08 seconds in the 100 metres at a continental meet in September 2026.

The performance, which placed him among the top ten sprinters on the continent this year, has drawn attention from national selectors and international coaching programmes. The athlete, who trains at a regional sports centre with limited facilities, says his target is clear: run under 10 seconds before the end of the 2027 season.

## From Oshana to the Continental Stage

The sprinter's rise has been rapid. He was identified at a school athletics meeting in 2024 and selected for a regional development squad. His natural speed — attributed in part to his background running on sandy surfaces — caught the eye of a visiting coach from the Athletics Namibia development programme.

Since then, he has competed in four continental meets, improving his personal best with each appearance. His September run of 10.08 seconds was the fastest by a Namibian sprinter in over a decade.

## Breaking the Barrier

Only a handful of African athletes have broken the 10-second barrier in the 100 metres. The sprinter's coach said the goal is ambitious but achievable with the right support.

"He has raw speed that you cannot teach," the coach said. "What we need now is access to quality competition, proper strength and conditioning, and biomechanical analysis. With those, sub-10 is within reach."

## What Comes Next

The athlete has been invited to a high-altitude training camp in Kenya in early 2027, organised by a continental athletics development body. Athletics Namibia is seeking sponsorship to cover the costs of the camp and the athlete's competition schedule for the first half of 2027.
    `.trim(),
  },
  {
    id: 'entertainment-fashion-week',
    category: 'Entertainment',
    title: 'Windhoek Fashion Week Returns with a Bold Vision for Namibian Design',
    summary:
      'The annual showcase brings together 25 designers from across the country and the diaspora, spotlighting sustainable fashion and traditional textile revival.',
    author: 'Greta N. Iipinge',
    date: 'October 15, 2026',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/908933/pexels-photo-908933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A woman posing in a vibrant floral dress against a brick wall',
    imageCredit: 'Photo: Godisable Jacob / Pexels',
    tags: ['Fashion', 'Culture', 'Design', 'Windhoek'],
    body: `
Windhoek Fashion Week has returned for its seventh edition, featuring 25 designers from across Namibia and the diaspora in a three-day celebration of contemporary African design, sustainable fashion, and the revival of traditional textile techniques.

The event, held at a converted warehouse in the city's industrial district, opened on October 15, 2026, and runs through October 17. It includes runway shows, a designer marketplace, panel discussions, and a dedicated emerging-talent showcase.

## A Platform for Namibian Voices

Founded in 2019, Windhoek Fashion Week has grown into the country's most prominent fashion event. This year's edition places particular emphasis on designers who work with locally sourced materials — including organically dyed cotton, recycled textiles, and handwoven fabrics produced by artisans in northern Namibia.

The event director said the goal is to position Namibian fashion within the broader African creative economy. "We are not just showing clothes. We are telling stories about who we are, where we come from, and where we are going," she said.

## Sustainability in Focus

Several designers presenting this year have built their brands around sustainability. One participating designer, based in Swakopmund, creates garments from upcycled denim and ocean-recovered plastic textiles. Another, from the Oshikoto region, has revived a traditional weaving technique that had nearly disappeared, working with elder artisans to document and transmit the skill to younger makers.

## The Runway

Opening night featured collections that ranged from avant-garde streetwear to elegant evening wear incorporating Herero-inspired silhouettes. A standout collection used tones of ochre, sand, and deep terracotta — evoking the Namibian landscape — with accessories crafted from reclaimed metals and ostrich shell beads.

## Beyond the Catwalk

In addition to the runway shows, the event hosts panel discussions on topics including intellectual property for designers, access to finance for creative businesses, and the role of fashion in cultural preservation. A dedicated marketplace allows attendees to purchase pieces directly from designers, creating economic opportunity beyond the event itself.

Windhoek Fashion Week runs through October 17. Tickets are available at the door and online.
    `.trim(),
  },
  {
    id: 'entertainment-music-festival',
    category: 'Entertainment',
    title: 'Namibian Musicians Blend Traditional Sounds with Modern Production on New Compilation Album',
    summary:
      'A collective of twelve artists from across the country has released a collaborative album fusing indigenous instruments with electronic production, drawing national attention.',
    author: 'Kaleb T. Shihepo',
    date: 'October 8, 2026',
    readTime: '4 min read',
    image:
      'https://images.pexels.com/photos/34752668/pexels-photo-34752668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'African musicians performing traditional music with wooden pipes outdoors',
    imageCredit: 'Photo: Skylight Views / Pexels',
    tags: ['Music', 'Culture', 'Collaboration', 'Album'],
    body: `
A collective of twelve Namibian musicians has released a collaborative album that fuses indigenous instruments — including the oudandi bow harp, traditional mouth bows, and percussion — with modern electronic production, creating a sound that is both rooted in heritage and forward-looking.

The album, titled *Kaitse* (meaning "echo" in Otjiherero), was released on October 6, 2026, through an independent Namibian record label. It features tracks recorded over a six-month period in studios across Windhoek, Opuwo, and Rundu, with field recordings captured in rural communities.

## A Collaborative Vision

The project was initiated by a Windhoek-based producer who wanted to bridge the gap between traditional music preservation and contemporary music production. The producer reached out to musicians across Namibia's diverse cultural communities, inviting them to contribute recordings and co-produce tracks.

"Too often, our traditional music is treated as a museum piece — something to be preserved but not engaged with creatively," the producer said. "We wanted to show that these sounds can live in the present tense."

## The Sound

The album's eleven tracks range from downtempo ambient pieces built around mouth bow recordings to up-tempo dance tracks layered with polyrhythmic percussion and synthesised bass. Several tracks feature vocals in Otjiherero, Oshiwambo, Khoekhoegowab, and Rukwangali.

Early reviews from regional music critics have praised the album's production quality and the respectful way it handles traditional material. One reviewer called it "a landmark release that could redefine how Namibian music is heard internationally."

## What Comes Next

The collective is planning a short tour of Namibian towns and cities in November 2026, with performances that will combine live traditional instrumentation with electronic production. They are also in discussions with international platforms for digital distribution, aiming to reach audiences beyond Southern Africa.
    `.trim(),
  },
];

export const getArticleById = (id: string): Article | undefined =>
  articles.find((a) => a.id === id);

export const getArticlesByCategory = (cat: Article['category']): Article[] =>
  articles.filter((a) => a.category === cat);

export const getFeaturedArticle = (): Article => articles[0];

export const getLatestArticles = (limit: number = 6): Article[] =>
  [...articles].slice(0, limit);
