import { ArrowLeft, Clock, User, Tag, ArrowRight } from 'lucide-react';
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
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const categoryColors: Record<string, string> = {
    National: 'bg-primary-500',
    International: 'bg-accent-500',
    Sports: 'bg-success-500',
    Entertainment: 'bg-sand-600',
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container-max">
        {/* Back link */}
        <button
          onClick={() => onNavigate(article.category === 'National' ? 'national' : article.category === 'International' ? 'international' : article.category === 'Sports' ? 'sports' : 'entertainment')}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {article.category}
        </button>

        {/* Article header */}
        <div className="max-w-3xl mx-auto">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 ${
              categoryColors[article.category]
            }`}
          >
            {article.category}
          </span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {article.summary}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pb-6 border-b border-slate-200">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.date}
            </span>
            <span>&middot; {article.readTime}</span>
          </div>
        </div>

        {/* Hero image */}
        <figure className="max-w-4xl mx-auto my-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full object-cover"
            />
          </div>
          <figcaption className="text-xs text-slate-500 mt-2 text-center italic">
            {article.imageCredit}
          </figcaption>
        </figure>

        {/* Article body */}
        <div
          className="article-prose max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: renderBody(article.body) }}
        />

        {/* Tags */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-slate-400" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Image credit / editorial note */}
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-sand-50 border border-sand-200 rounded-lg">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Editorial note:</strong> This article is produced as an
            academic project for the course Mobile Journalism &amp; Digital Media
            Production. Facts are based on publicly available information and
            credible reporting. Where direct quotations appear, they are clearly
            attributed. Photographs are sourced from Pexels under its licence and
            are credited accordingly.
          </p>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif font-bold text-2xl text-slate-900">
                More in {article.category}
              </h2>
              <button
                onClick={() =>
                  onNavigate(
                    article.category === 'National'
                      ? 'national'
                      : article.category === 'International'
                      ? 'international'
                      : article.category === 'Sports'
                      ? 'sports'
                      : 'entertainment'
                  )
                }
                className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                View all <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <ArticleCard
                  key={a.id}
                  article={a}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function renderBody(body: string): string {
  return body
    .split('\n\n')
    .map((block) => {
      if (block.startsWith('## ')) {
        return `<h2>${block.slice(3)}</h2>`;
      }
      if (block.startsWith('### ')) {
        return `<h3>${block.slice(4)}</h3>`;
      }
      if (block.startsWith('- ')) {
        const items = block
          .split('\n')
          .map((line) => line.replace(/^-\s*/, ''))
          .filter(Boolean)
          .map((item) => `<li>${item}</li>`)
          .join('');
        return `<ul>${items}</ul>`;
      }
      if (block.startsWith('> ')) {
        return `<blockquote>${block.slice(2)}</blockquote>`;
      }
      return `<p>${block}</p>`;
    })
    .join('');
}
