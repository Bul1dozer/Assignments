import type { Article } from '@/data/articles';
import type { PageId } from './Header';

interface ArticleCardProps {
  article: Article;
  onNavigate: (page: PageId, articleId?: string) => void;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
}

const categoryColors: Record<string, string> = {
  National: 'bg-primary-500',
  International: 'bg-accent-500',
  Sports: 'bg-success-500',
  Entertainment: 'bg-sand-600',
};

export default function ArticleCard({
  article,
  onNavigate,
  variant = 'default',
}: ArticleCardProps) {
  const handle = () => onNavigate('article', article.id);
  const label = article.sectionLabel || article.category;
  const color = categoryColors[article.category] || 'bg-primary-500';

  if (variant === 'featured') {
    return (
      <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
        <button type="button" onClick={handle} className="block w-full text-left">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img src={article.image} alt={article.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <span className={'absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ' + color}>{label}</span>
          </div>
          <div className="p-6">
            <h3 className="mb-3 text-xl font-bold leading-snug text-primary-900 transition-colors group-hover:text-accent-600 sm:text-2xl">{article.title}</h3>
            <p className="mb-4 leading-relaxed text-slate-600">{article.summary}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">{article.author}</span><span aria-hidden="true">·</span><span>{article.date}</span><span aria-hidden="true">·</span><span>{article.readTime}</span>
            </div>
          </div>
        </button>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article className="group flex gap-4 overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
        <button type="button" onClick={handle} className="flex w-full gap-4 text-left">
          <div className="h-32 w-32 flex-shrink-0 overflow-hidden"><img src={article.image} alt={article.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div>
          <div className="flex flex-col justify-center py-3 pr-3">
            <span className={'mb-1 inline-block w-fit rounded px-2 py-0.5 text-[10px] font-semibold text-white ' + color}>{label}</span>
            <h3 className="mb-1 line-clamp-2 text-base font-semibold leading-snug text-primary-900 transition-colors group-hover:text-accent-600">{article.title}</h3>
            <span className="text-xs text-slate-500">{article.date}</span>
          </div>
        </button>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group border-b border-slate-100 pb-4 last:border-0">
        <button type="button" onClick={handle} className="flex w-full flex-col gap-2 text-left">
          <span className={'inline-block w-fit rounded px-2 py-0.5 text-[10px] font-semibold text-white ' + color}>{label}</span>
          <h3 className="text-base font-semibold leading-snug text-primary-900 transition-colors group-hover:text-accent-600">{article.title}</h3>
          <span className="text-xs text-slate-500">{article.date}</span>
        </button>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <button type="button" onClick={handle} className="flex h-full flex-col text-left">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img src={article.image} alt={article.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <span className={'absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white ' + color}>{label}</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-primary-900 transition-colors group-hover:text-accent-600">{article.title}</h3>
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">{article.summary}</p>
          <div className="flex items-center gap-2 text-xs text-slate-500"><span className="font-semibold text-slate-700">{article.author}</span><span aria-hidden="true">·</span><span>{article.readTime}</span></div>
        </div>
      </button>
    </article>
  );
}
