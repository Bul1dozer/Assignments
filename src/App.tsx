import { useEffect, useState } from 'react';
import Header, { type PageId } from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import BankingPage from '@/pages/BankingPage';
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
      case 'personal':
      case 'business':
      case 'corporate':
      case 'digital':
        return <BankingPage page={currentPage} onNavigate={handleNavigate} />;
      case 'campaign':
        return <CampaignPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'article': {
        const article = currentArticleId ? getArticleById(currentArticleId) : undefined;
        return article ? (
          <ArticleView article={article} onNavigate={handleNavigate} />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        );
      }
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
