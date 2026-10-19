import { useState, useEffect } from 'react';
import Header, { type PageId } from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import CampaignPage from '@/pages/CampaignPage';
import ContactPage from '@/pages/ContactPage';
import ArticleView from '@/components/ArticleView';
import { getArticleById } from '@/data/articles';

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null);

  const handleNavigate = (page: PageId, articleId?: string) => {
    if (page === 'article' && articleId) {
      setCurrentArticleId(articleId);
      setCurrentPage('article');
    } else {
      setCurrentPage(page);
      setCurrentArticleId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'national':
        return <CategoryPage category="National" onNavigate={handleNavigate} />;
      case 'international':
        return <CategoryPage category="International" onNavigate={handleNavigate} />;
      case 'sports':
        return <CategoryPage category="Sports" onNavigate={handleNavigate} />;
      case 'entertainment':
        return (
          <CategoryPage category="Entertainment" onNavigate={handleNavigate} />
        );
      case 'campaign':
        return <CampaignPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'article': {
        const article = currentArticleId
          ? getArticleById(currentArticleId)
          : undefined;
        if (article) {
          return <ArticleView article={article} onNavigate={handleNavigate} />;
        }
        return <HomePage onNavigate={handleNavigate} />;
      }
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
