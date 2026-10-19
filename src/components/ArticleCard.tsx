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

  if (variant === 'featured') {
    return (
      <article
        onClick={handle}
        className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
              categoryColors[article.category]
            }`}
          >
            {article.category}
          </span>
        </div>
        <div className="p-6">
          <h2 className="font-serif font-bold text-2xl text-slate-900 group-hover:text-primary-700 transition-colors leading-snug mb-3">
            {article.title}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {article.summary}
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="font-medium text-slate-700">{article.author}</span>
            <span>&middot;</span>
            <span>{article.date}</span>
            <span>&middot;</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article
        onClick={handle}
        className="group cursor-pointer flex gap-4 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="py-3 pr-3 flex flex-col justify-center">
          <span
            className={`inline-block w-fit px-2 py-0.5 rounded text-[10px] font-semibold text-white mb-1 ${
              categoryColors[article.category]
            }`}
          >
            {article.category}
          </span>
          <h3 className="font-serif font-semibold text-base text-slate-900 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2 mb-1">
            {article.title}
          </h3>
          <span className="text-xs text-slate-500">{article.date}</span>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article
        onClick={handle}
        className="group cursor-pointer flex flex-col gap-2 pb-4 border-b border-slate-100 last:border-0"
      >
        <span
          className={`inline-block w-fit px-2 py-0.5 rounded text-[10px] font-semibold text-white ${
            categoryColors[article.category]
          }`}
        >
          {article.category}
        </span>
        <h3 className="font-serif font-semibold text-base text-slate-900 group-hover:text-primary-700 transition-colors leading-snug">
          {article.title}
        </h3>
        <span className="text-xs text-slate-500">{article.date}</span>
      </article>
    );
  }

  return (
    <article
      onClick={handle}
      className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white ${
            categoryColors[article.category]
          }`}
        >
          {article.category}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif font-semibold text-lg text-slate-900 group-hover:text-primary-700 transition-colors leading-snug mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-3 flex-1">
          {article.summary}
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-medium text-slate-700">{article.author}</span>
          <span>&middot;</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
