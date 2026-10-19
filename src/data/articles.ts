export interface Article {
  id: string;
  category: 'National' | 'International' | 'Sports' | 'Entertainment';
  sectionLabel?: string;
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
  sourceUrl?: string;
}

const whatsappNewsUrl =
  'https://www.bankwindhoek.com.na/Pages/News/bank-windhoek-becomes-first-bank-in-namibia-to-launch-whatsapp-banking.aspx';
const biometricsNewsUrl =
  'https://www.bankwindhoek.com.na/Pages/Newsroom/News/Articles/bank-windhoek-fortifies-customer-security-with-biometrics.aspx';

export const articles: Article[] = [
  {
    id: 'bank-windhoek-whatsapp-banking',
    category: 'National',
    sectionLabel: 'Digital Banking',
    title: 'Bank Windhoek launches WhatsApp Banking',
    summary:
      'The Bank introduced WhatsApp Banking in April 2026, adding another way for customers to access selected banking services through a familiar messaging channel.',
    author: 'Bank Windhoek newsroom',
    date: '20 April 2026',
    readTime: '3 min read',
    image:
      'https://www.bankwindhoek.com.na/Style%20Library/Image2023/Media_Releases/WhatsApp%20Banking.jpg',
    imageAlt: 'Bank Windhoek representatives at the WhatsApp Banking launch',
    imageCredit: 'Image: Bank Windhoek public newsroom',
    sourceUrl: whatsappNewsUrl,
    tags: ['Banking', 'WhatsApp Banking', 'Digital services', 'Customer education'],
    body: [
      "On 20 April 2026, Bank Windhoek announced the launch of its WhatsApp Banking channel. The Bank described the service as another way to make everyday banking more accessible through a communication platform many customers already use.",
      "According to the Bank’s public announcement, the channel supports balance enquiries, mini statements, selected payments and transfers, and basic account support. Customers should consult the original announcement and current official instructions for the latest service details.",
      "## What customers should know",
      "Digital channels can make some banking tasks more convenient, but customers should always confirm that they are using the Bank’s official channels. The Bank’s announcement lists the WhatsApp Banking number as +264 81 140 2950.",
      "Never share your PIN, password or one-time password with anyone, including someone claiming to represent the Bank. If a message or request seems unusual, stop and contact Bank Windhoek using details published through its official website.",
      "## Why it matters to the campaign",
      "The Banking Where You Are academic campaign explores how simple demonstrations and clear mobile-first communication can help customers understand digital banking. The campaign does not provide or operate the Bank’s services; it directs readers to official information."
    ].join('\n\n'),
  },
  {
    id: 'bank-windhoek-biometric-security',
    category: 'National',
    sectionLabel: 'Security & Trust',
    title: 'Bank Windhoek publishes update on biometric security',
    summary:
      'In a November 2025 announcement, Bank Windhoek described biometric authentication on its mobile app as part of its wider digital security and fraud-prevention approach.',
    author: 'Bank Windhoek newsroom',
    date: '1 December 2025',
    readTime: '3 min read',
    image:
      'https://www.bankwindhoek.com.na/Style%20Library/Image2023/Media_Releases/Go%20beyong%20pic%201.jpg',
    imageAlt: 'A Bank Windhoek branch interior with a customer service area',
    imageCredit: 'Image: Bank Windhoek public newsroom',
    sourceUrl: biometricsNewsUrl,
    tags: ['Cybersecurity', 'Biometrics', 'Fraud awareness', 'Digital banking'],
    body: [
      "In a public article dated 1 December 2025, Bank Windhoek described biometric authentication on its mobile app as one part of its approach to digital security and fraud prevention.",
      "The Bank’s article also highlighted customer education. It reminded customers that the Bank would not ask for their PIN, password, card number or one-time password. Read the original article for the Bank’s full explanation and any updates to the service.",
      "## Simple steps to protect yourself",
      "- Never disclose your PIN, password or one-time password to another person.",
      "- Be cautious with unexpected calls, messages or links asking for banking details.",
      "- Use the official Bank Windhoek website to find current support information.",
      "- Report suspicious messages or activity through the Bank’s verified contact channels.",
      "Security guidance can change as services evolve. This article is a short academic summary; the Bank’s own published information should be treated as the authoritative source."
    ].join('\n\n'),
  },
];

export const getArticleById = (id: string): Article | undefined =>
  articles.find((article) => article.id === id);

export const getArticlesByCategory = (category: Article['category']): Article[] =>
  articles.filter((article) => article.category === category);

export const getFeaturedArticle = (): Article => articles[0];

export const getLatestArticles = (limit = 6): Article[] =>
  articles.slice(0, limit);
