import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CampaignPage from '@/pages/CampaignPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header />
      <main>
        <CampaignPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
