import { Building2, ArrowRight, TrendingUp, Globe2, Trophy, Music } from 'lucide-react';
import type { PageId } from '@/components/Header';
import { articles, getFeaturedArticle, getLatestArticles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import { campaignInfo } from '@/data/campaign';

interface HomePageProps {
  onNavigate: (page: PageId, articleId?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(7);
  const nationalArticles = articles.filter((a) => a.category === 'National');
  const intlArticles = articles.filter((a) => a.category === 'International');
  const sportsArticles = articles.filter((a) => a.category === 'Sports');
  const entArticles = articles.filter((a) => a.category === 'Entertainment');

  return (
    <div className="pt-20">
      {/* Breaking news ticker */}
      <div className="bg-primary-900 text-white py-2 overflow-hidden">
        <div className="container-max flex items-center gap-4">
          <span className="flex-shrink-0 bg-error-500 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
            Breaking
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-8 animate-marquee whitespace-nowrap text-sm">
              <span>Bank Windhoek becomes first bank in Namibia to launch WhatsApp Banking</span>
              <span>&middot;</span>
              <span>African nations push for binding climate finance at COP31</span>
              <span>&middot;</span>
              <span>Welwitschias enter high-performance camp for Africa Cup</span>
              <span>&middot;</span>
              <span>Windhoek Fashion Week returns with bold vision</span>
              <span>&middot;</span>
              <span>Bank Windhoek becomes first bank in Namibia to launch WhatsApp Banking</span>
              <span>&middot;</span>
              <span>African nations push for binding climate finance at COP31</span>
              <span>&middot;</span>
              <span>Welwitschias enter high-performance camp for Africa Cup</span>
              <span>&middot;</span>
              <span>Windhoek Fashion Week returns with bold vision</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <section className="bg-white py-8">
        <div className="container-max">
          {/* Mission statement */}
          <div className="text-center mb-8 max-w-2xl mx-auto animate-fade-up">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-primary-500" />
              <span className="text-xs uppercase tracking-widest text-primary-600 font-semibold">
                Mobile-First Digital Journalism
              </span>
              <Building2 className="w-5 h-5 text-primary-500" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              "Bringing verified, accessible news to every Namibian pocket — from
              national headlines to community stories, told with accuracy and integrity."
            </p>
          </div>

          {/* Featured + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 animate-fade-up">
              <ArticleCard article={featured} onNavigate={onNavigate} variant="featured" />
            </div>
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-slate-900 pb-2 border-b-2 border-primary-500">
                Latest Stories
              </h3>
              {latest.slice(1, 5).map((a) => (
                <ArticleCard key={a.id} article={a} onNavigate={onNavigate} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campaign banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 py-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400/20 rounded-full blur-2xl" />
        <div className="container-max relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-3">
                Featured Campaign — Bank Windhoek
              </span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-2">
                Banking Where You Are
              </h2>
              <p className="text-xl text-accent-300 font-medium mb-3">{campaignInfo.tagline}</p>
              <p className="text-sm text-primary-100 max-w-lg leading-relaxed">
                A Bank Windhoek campaign showing how customers can access banking
                services in ways that fit their everyday lives. Explore the full
                campaign portfolio with 12 visual assets and multimedia content.
              </p>
            </div>
            <button
              onClick={() => onNavigate('campaign')}
              className="flex items-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-lg font-semibold text-sm hover:bg-accent-50 transition-all hover:scale-105 flex-shrink-0"
            >
              View Campaign Portfolio
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Category sections */}
      <section className="bg-slate-50 py-12">
        <div className="container-max">
          <CategorySection title="National News" icon={<TrendingUp className="w-5 h-5" />} color="bg-primary-500" articles={nationalArticles} onNavigate={onNavigate} page="national" />
          <CategorySection title="International News" icon={<Globe2 className="w-5 h-5" />} color="bg-accent-500" articles={intlArticles} onNavigate={onNavigate} page="international" />
          <CategorySection title="Sports" icon={<Trophy className="w-5 h-5" />} color="bg-success-500" articles={sportsArticles} onNavigate={onNavigate} page="sports" />
          <CategorySection title="Entertainment & Lifestyle" icon={<Music className="w-5 h-5" />} color="bg-primary-400" articles={entArticles} onNavigate={onNavigate} page="entertainment" />
        </div>
      </section>
    </div>
  );
}

function CategorySection({
  title,
  icon,
  color,
  articles,
  onNavigate,
  page,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  articles: typeof import('@/data/articles').articles;
  onNavigate: (page: PageId, articleId?: string) => void;
  page: PageId;
}) {
  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className={`flex items-center justify-center w-9 h-9 rounded-lg ${color} text-white`}>
            {icon}
          </span>
          <h2 className="font-serif font-bold text-2xl text-slate-900">{title}</h2>
        </div>
        <button
          onClick={() => onNavigate(page)}
          className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          View all <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((a) => (
          <ArticleCard key={a.id} article={a} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}
