import { useState, useEffect, useCallback } from 'react';
import Header, { type SectionId } from '@/components/Header';
import Footer from '@/components/Footer';
import CampaignPage from '@/pages/CampaignPage';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview');

  const scrollToSection = useCallback((section: SectionId) => {
    const el = document.getElementById(`section-${section}`);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  const handleNavigate = useCallback(
    (section: SectionId) => {
      scrollToSection(section);
    },
    [scrollToSection]
  );

  useEffect(() => {
    const sections: SectionId[] = [
      'overview',
      'strategy',
      'objectives',
      'messages',
      'assets',
      'inventory',
      'storyboard',
      'safety',
      'about',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id.replace('section-', '') as SectionId;
          if (sections.includes(id)) {
            setActiveSection(id);
          }
        }
      },
      { rootMargin: '-80px 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(`section-${s}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={handleNavigate} activeSection={activeSection} />
      <main className="flex-1">
        <CampaignPage onNavigate={handleNavigate} />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
