import { ArrowLeft, ArrowUpRight, Clock, Tag, User } from 'lucide-react';
import type { Article } from '@/data/articles';
import type { PageId } from './Header';
import { getArticlesByCategory } from '@/data/articles';
import ArticleCard from './ArticleCard';

interface ArticleViewProps {
  article: Article;
  onNavigate: (page: PageId, articleId?: string) => void;
}

export default function ArticleView({ article, onNavigate }: ArticleViewProps) {
  const related = getArticlesByCategory(article.category)
    .filter((item) => item.id !== article.id)
    .slice(0, 2);

  return (
    <div className="bg-white pb-16 pt-8">
      <div className="container-max">
        <button type="button" onClick={() => onNavigate('home')} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-primary-800">
          <ArrowLeft className="h-4 w-4" /> Back to homepage
        </button>

        <article className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-accent-700">{article.sectionLabel || 'Banking news'}</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">{article.title}</h1>
            <p className="mt-5 text-lg leading-7 text-slate-600">{article.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 border-b border-slate-200 pb-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {article.author}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          <figure className="my-8">
            <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm"><img src={article.image} alt={article.imageAlt} className="max-h-[560px] w-full object-cover" /></div>
            <figcaption className="mt-2 text-center text-xs text-slate-400">{article.imageCredit}</figcaption>
          </figure>

          <div className="article-prose mx-auto max-w-3xl" dangerouslySetInnerHTML={{ __html: renderBody(article.body) }} />

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-slate-400" />
            {article.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{tag}</span>)}
          </div>

          {article.sourceUrl && (
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm leading-6 text-slate-600">This article is an academic summary. Refer to the original Bank Windhoek publication for authoritative details and any updates.</p>
              <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary-800 transition hover:text-accent-600">Read the original source <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          )}
        </article>

        {related.length > 0 && (
          <section className="mx-auto mt-16 max-w-5xl">
            <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-700">Continue reading</p><h2 className="mt-2 text-2xl font-bold text-primary-900 sm:text-3xl">More banking updates</h2></div>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((item) => <ArticleCard key={item.id} article={item} onNavigate={onNavigate} />)}
            </div>
          </section>
        )}

        <p className="mx-auto mt-12 max-w-3xl text-center text-[11px] leading-5 text-slate-400">Student-created content for the Mobile Journalism (H2612CJ) assignment. This website is not an official Bank Windhoek channel.</p>
      </div>
    </div>
  );
}

function renderBody(body: string): string {
  return body
    .split('\n\n')
    .map((block) => {
      const safe = escapeHtml(block);
      if (safe.startsWith('## ')) return '<h2>' + safe.slice(3) + '</h2>';
      if (safe.startsWith('- ')) {
        const items = safe.split('\n').map((line) => line.replace(/^-\s*/, '')).filter(Boolean);
        return '<ul>' + items.map((item) => '<li>' + item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') + '</li>').join('') + '</ul>';
      }
      return '<p>' + safe.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') + '</p>';
    })
    .join('');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
