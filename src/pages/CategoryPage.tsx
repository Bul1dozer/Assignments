import { TrendingUp, Globe2, Trophy, Music } from 'lucide-react';
import type { PageId } from '@/components/Header';
import type { Article } from '@/data/articles';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

interface CategoryPageProps {
  category: Article['category'];
  onNavigate: (page: PageId, articleId?: string) => void;
}

const categoryConfig: Record<
  Article['category'],
  {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    bgGradient: string;
  }
> = {
  National: {
    title: 'National News',
    subtitle:
      'Stories that shape Namibia — from government policy and infrastructure to community initiatives and social development.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'bg-primary-500',
    bgGradient: 'from-primary-700 to-primary-600',
  },
  International: {
    title: 'International News',
    subtitle:
      'Global developments with a Namibian and African lens — climate, diplomacy, technology, and the stories that connect us to the world.',
    icon: <Globe2 className="w-6 h-6" />,
    color: 'bg-accent-500',
    bgGradient: 'from-accent-600 to-accent-500',
  },
  Sports: {
    title: 'Sports',
    subtitle:
      'From the Welwitschias to the track — covering Namibian athletes, teams, and sporting achievements on the national and continental stage.',
    icon: <Trophy className="w-6 h-6" />,
    color: 'bg-success-500',
    bgGradient: 'from-success-600 to-success-500',
  },
  Entertainment: {
    title: 'Entertainment & Lifestyle',
    subtitle:
      'Celebrating Namibian creativity — music, fashion, film, culture, and the voices shaping the nation\u2019s creative economy.',
    icon: <Music className="w-6 h-6" />,
    color: 'bg-sand-600',
    bgGradient: 'from-sand-600 to-sand-500',
  },
};

export default function CategoryPage({ category, onNavigate }: CategoryPageProps) {
  const config = categoryConfig[category];
  const categoryArticles = articles.filter((a) => a.category === category);
  const [lead, ...rest] = categoryArticles;

  return (
    <div className="pt-20">
      {/* Header banner */}
      <section className={`relative bg-gradient-to-r ${config.bgGradient} py-16 overflow-hidden`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        <div className="container-max relative z-10">
          <div className="flex items-center gap-4 mb-4 animate-fade-up">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white backdrop-blur-sm">
              {config.icon}
            </span>
            <span className="text-white/80 text-sm uppercase tracking-widest font-medium">
              The Namibian Times
            </span>
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-white mb-3 animate-fade-up">
            {config.title}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl leading-relaxed animate-fade-up">
            {config.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-slate-50 min-h-[50vh]">
        <div className="container-max">
          {lead && (
            <>
              {/* Lead article */}
              <div className="mb-10">
                <ArticleCard
                  article={lead}
                  onNavigate={onNavigate}
                  variant="featured"
                />
              </div>

              {/* Remaining articles */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((a) => (
                    <ArticleCard
                      key={a.id}
                      article={a}
                      onNavigate={onNavigate}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {categoryArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">
                No articles in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
